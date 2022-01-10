webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/sweetAlertUtils */ "./utils/sweetAlertUtils.js");




``;

var jwt = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");


const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_2__["default"]();

function loadMyInfoAPI() {
  const accessToken = cookies.get("accessToken");
  const userEmail = cookies.get("userEmail");
  const data = {
    email: userEmail
  };
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/member', data, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  });
}

function* loadMyInfo(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    console.log("response :: ", response);
    console.log("response.data.result.id :: ", response.data.result.id);
    '';

    if (response.data != "") {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
        data: {
          postIds: response.data.result.postDtoIds,
          memberId: response.data.result.id
        }
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_FAIL"],
      error: error.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/login', data);
}

function* login(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);

    if (result.status == 401) {
      Object(_utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_4__["warningMsg"])("로그인에 실패했습니다.");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"]
      });
    } else {
      let base64Payload = result.data.accessToken.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE var payload = Buffer.from(base64Payload, 'base64'); var result = JSON.parse(payload.toString()) console.log(result);

      let payload = Buffer.from(base64Payload, 'base64');
      let payloadResult = JSON.parse(payload.toString()); // console.log(payloadResult);

      cookies.set("accessToken", result.data.accessToken, {
        path: '/'
      });
      cookies.set("refreshToken", result.data.accessToken, {
        path: '/'
      }); // cookies.set("memberId", payloadResult.sub, {path:'/'});

      cookies.set("userEmail", action.data.email);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
        data: {
          memberId: payloadResult.sub
        }
      });
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
      console.log("response : ", response);

      if (response.data != "") {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
          data: {
            postIds: response.data.result.postDtoIds
          }
        });
      }
    }
  } catch (error) {
    Object(_utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_4__["warningMsg"])("로그인에 실패했습니다!");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
      error: error.data
    });
  }
}

function* logout() {
  try {
    cookies.remove('accessToken');
    cookies.remove('refreshToken');
    cookies.remove('userEmail');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
      error: error.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/signup', data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 

    if (result.data.status === DUPLICATE) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAIL_DUPLICATE"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
      error: error.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(logInAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
      error: error.data
    });
  }
}

function unFollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(logInAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
      error: error.data
    });
  }
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"], loadMyInfo); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], login); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogOut() {
  // yield takeEvery('LOG_OUT_REQUEST', logout); // 여러번 클릭해도 그만큼 응답이 감
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logout); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
  // yield throttle('LOG_OUT_REQUREST', logout, 10000); // 얼마동안 한번만 요청을 보내도록 제한 가능
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJqd3QiLCJyZXF1aXJlIiwiY29va2llcyIsIkNvb2tpZXMiLCJsb2FkTXlJbmZvQVBJIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJkYXRhIiwiZW1haWwiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwibG9hZE15SW5mbyIsImFjdGlvbiIsInJlc3BvbnNlIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJpZCIsInB1dCIsInR5cGUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsInBvc3RJZHMiLCJwb3N0RHRvSWRzIiwibWVtYmVySWQiLCJlcnJvciIsIkxPQURfTVlfSU5GT19GQUlMIiwibG9nSW5BUEkiLCJsb2dpbiIsInN0YXR1cyIsIndhcm5pbmdNc2ciLCJMT0dfSU5fRkFJTFVSRSIsImJhc2U2NFBheWxvYWQiLCJzcGxpdCIsInBheWxvYWQiLCJCdWZmZXIiLCJmcm9tIiwicGF5bG9hZFJlc3VsdCIsIkpTT04iLCJwYXJzZSIsInRvU3RyaW5nIiwic2V0IiwicGF0aCIsIkxPR19JTl9TVUNDRVNTIiwic3ViIiwibG9nb3V0IiwicmVtb3ZlIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwic2lnblVwIiwiRFVQTElDQVRFIiwiU0lHTl9VUF9GQUlMX0RVUExJQ0FURSIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvd0FQSSIsImZvbGxvdyIsImRlbGF5IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuRm9sbG93QVBJIiwidW5mb2xsb3ciLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIndhdGNoTG9hZE15SW5mbyIsInRha2VMYXRlc3QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIndhdGNoRm9sbG93IiwiRk9MTE9XX1JFUVVFU1QiLCJ3YXRjaFVuZm9sbG93IiwiVU5GT0xMT1dfUkVRVUVTVCIsIndhdGNoTG9nSW4iLCJMT0dfSU5fUkVRVUVTVCIsIndhdGNoTG9nT3V0IiwiTE9HX09VVF9SRVFVRVNUIiwid2F0Y2hTaWduVXAiLCJTSUdOX1VQX1JFUVVFU1QiLCJ1c2VyU2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFvQjJCLEVBQUQ7O0FBQzFCLElBQUlBLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUFqQjs7QUFDQTtBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjs7QUFFQSxTQUFTQyxhQUFULEdBQXlCO0FBQ3JCLFFBQU1DLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0wsT0FBTyxDQUFDSSxHQUFSLENBQVksV0FBWixDQUFsQjtBQUNBLFFBQU1FLElBQUksR0FBRztBQUNUQyxTQUFLLEVBQUVGO0FBREUsR0FBYjtBQUlBLFNBQU9HLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxjQUFYLEVBQTJCSCxJQUEzQixFQUFnQztBQUNuQ0ksV0FBTyxFQUFDO0FBQ0osdUJBQWtCLFVBQVNQLFdBQVksRUFEbkM7QUFFSixzQkFBZ0I7QUFGWjtBQUQyQixHQUFoQyxDQUFQO0FBTUg7O0FBRUQsVUFBVVEsVUFBVixDQUFxQkMsTUFBckIsRUFBNkI7QUFDekIsTUFBSTtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDWixhQUFELENBQTNCO0FBQ0FhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJILFFBQTVCO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDSCxRQUFRLENBQUNQLElBQVQsQ0FBY1csTUFBZCxDQUFxQkMsRUFBaEU7QUFBb0U7O0FBQ3BF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MEQsZUFBVixHQUEyQjtBQUN2QixRQUFNQyxxRUFBVSxDQUFDQyxtRUFBRCxFQUF1QnZELFVBQXZCLENBQWhCLENBRHVCLENBQzZCO0FBQ3ZEOztBQUVELFVBQVV3RCxXQUFWLEdBQXVCO0FBQ25CLFFBQU1GLHFFQUFVLENBQUNHLDZEQUFELEVBQWlCWixNQUFqQixDQUFoQixDQURtQixDQUN1QjtBQUM3Qzs7QUFFRCxVQUFVYSxhQUFWLEdBQXlCO0FBQ3JCLFFBQU1KLHFFQUFVLENBQUNLLCtEQUFELEVBQW1CVCxRQUFuQixDQUFoQixDQURxQixDQUN5QjtBQUNqRDs7QUFFRCxVQUFVVSxVQUFWLEdBQXNCO0FBQ2xCLFFBQU1OLHFFQUFVLENBQUNPLDZEQUFELEVBQWlCNUMsS0FBakIsQ0FBaEIsQ0FEa0IsQ0FDdUI7QUFDNUM7O0FBRUQsVUFBVTZDLFdBQVYsR0FBdUI7QUFDbkI7QUFDQSxRQUFNUixxRUFBVSxDQUFDUyw4REFBRCxFQUFrQjdCLE1BQWxCLENBQWhCLENBRm1CLENBRXdCO0FBQzNDO0FBQ0g7O0FBRUQsVUFBVThCLFdBQVYsR0FBdUI7QUFDbkIsUUFBTVYscUVBQVUsQ0FBQ1csOERBQUQsRUFBa0IxQixNQUFsQixDQUFoQixDQURtQixDQUN3QjtBQUM5Qzs7QUFFYyxVQUFVMkIsUUFBVixHQUFxQjtBQUNoQyxRQUFNQyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNmLGVBQUQsQ0FERSxFQUVOZSwrREFBSSxDQUFDZixlQUFELENBRkUsRUFHTmUsK0RBQUksQ0FBQ1osV0FBRCxDQUhFLEVBSU5ZLCtEQUFJLENBQUNWLGFBQUQsQ0FKRSxFQUtOVSwrREFBSSxDQUFDUixVQUFELENBTEUsRUFNTlEsK0RBQUksQ0FBQ04sV0FBRCxDQU5FLEVBT05NLCtEQUFJLENBQUNKLFdBQUQsQ0FQRSxDQUFELENBQVQ7QUFTSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ1NDY0ZWRhYWNhYjFlNTk4OTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgZGVsYXksIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9GQUlMVVJFLCBcclxuICAgIExPR19JTl9SRVFVRVNULCBcclxuICAgIExPR19JTl9TVUNDRVNTLCBcclxuICAgIExPR19PVVRfRkFJTFVSRSwgXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsIFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLCBcclxuICAgIFNJR05fVVBfU1VDQ0VTUywgXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsIFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsIFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCwgXHJcbiAgICBGT0xMT1dfRkFJTFVSRSwgXHJcbiAgICBGT0xMT1dfU1VDQ0VTUywgXHJcbiAgICBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfRkFJTF9EVVBMSUNBVEUsXHJcbiAgICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgTE9BRF9NWV9JTkZPX0ZBSUxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO2BgXHJcbnZhciBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcclxuaW1wb3J0IHsgd2FybmluZ01zZyB9IGZyb20gXCIuLi91dGlscy9zd2VldEFsZXJ0VXRpbHNcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGVtYWlsOiB1c2VyRW1haWxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvbWVtYmVyJywgZGF0YSx7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSA6OiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UuZGF0YS5yZXN1bHQuaWQgOjogXCIsIHJlc3BvbnNlLmRhdGEucmVzdWx0LmlkKTsnJ1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0SWRzIDogcmVzcG9uc2UuZGF0YS5yZXN1bHQucG9zdER0b0lkcyxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJJZCA6IHJlc3BvbnNlLmRhdGEucmVzdWx0LmlkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09IDQwMSl7XHJcbiAgICAgICAgICAgIHdhcm5pbmdNc2coXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukLlwiKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgYmFzZTY0UGF5bG9hZCA9IHJlc3VsdC5kYXRhLmFjY2Vzc1Rva2VuLnNwbGl0KCcuJylbMV07IC8vdmFsdWUgMCAtPiBoZWFkZXIsIDEgLT4gcGF5bG9hZCwgMiAtPiBWRVJJRlkgU0lHTkFUVVJFIHZhciBwYXlsb2FkID0gQnVmZmVyLmZyb20oYmFzZTY0UGF5bG9hZCwgJ2Jhc2U2NCcpOyB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShwYXlsb2FkLnRvU3RyaW5nKCkpIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGxldCBwYXlsb2FkID0gQnVmZmVyLmZyb20oYmFzZTY0UGF5bG9hZCwgJ2Jhc2U2NCcpOyBcclxuICAgICAgICAgICAgbGV0IHBheWxvYWRSZXN1bHQgPSBKU09OLnBhcnNlKHBheWxvYWQudG9TdHJpbmcoKSk7IFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXlsb2FkUmVzdWx0KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJhY2Nlc3NUb2tlblwiLCByZXN1bHQuZGF0YS5hY2Nlc3NUb2tlbix7IHBhdGg6ICcvJyB9KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJyZWZyZXNoVG9rZW5cIiwgcmVzdWx0LmRhdGEuYWNjZXNzVG9rZW4seyBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvb2tpZXMuc2V0KFwibWVtYmVySWRcIiwgcGF5bG9hZFJlc3VsdC5zdWIsIHtwYXRoOicvJ30pO1xyXG4gICAgICAgICAgICBjb29raWVzLnNldChcInVzZXJFbWFpbFwiLCBhY3Rpb24uZGF0YS5lbWFpbCk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHttZW1iZXJJZCA6IHBheWxvYWRSZXN1bHQuc3VifSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSA6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtwb3N0SWRzOnJlc3BvbnNlLmRhdGEucmVzdWx0LnBvc3REdG9JZHN9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgd2FybmluZ01zZyhcIuuhnOq3uOyduOyXkCDsi6TtjKjtlojsirXri4jri6QhXCIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogbG9nb3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgnYWNjZXNzVG9rZW4nKTtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgncmVmcmVzaFRva2VuJyk7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3VzZXJFbWFpbCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvc2lnbnVwJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gRFVQTElDQVRFKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTF9EVVBMSUNBVEUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bkZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOyekOumrOu2gO2EsOuKlCDtlajsiJjsnZgg66ek6rCc67OA7IiY6rCAIOyYqOuLpC4gXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICAvLyB5aWVsZCB0YWtlRXZlcnkoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ291dCk7IC8vIOyXrOufrOuyiCDtgbTrpq3tlbTrj4Qg6re466eM7YG8IOydkeuLteydtCDqsJBcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dvdXQpOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbiAgICAvLyB5aWVsZCB0aHJvdHRsZSgnTE9HX09VVF9SRVFVUkVTVCcsIGxvZ291dCwgMTAwMDApOyAvLyDslrzrp4jrj5nslYgg7ZWc67KI66eMIOyalOyyreydhCDrs7TrgrTrj4TroZ0g7KCc7ZWcIOqwgOuKpVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==