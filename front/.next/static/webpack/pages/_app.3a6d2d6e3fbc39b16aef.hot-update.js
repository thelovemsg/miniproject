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
        data: payloadResult.sub
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJqd3QiLCJyZXF1aXJlIiwiY29va2llcyIsIkNvb2tpZXMiLCJsb2FkTXlJbmZvQVBJIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJkYXRhIiwiZW1haWwiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwibG9hZE15SW5mbyIsImFjdGlvbiIsInJlc3BvbnNlIiwiY2FsbCIsInB1dCIsInR5cGUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsInBvc3RJZHMiLCJyZXN1bHQiLCJwb3N0RHRvSWRzIiwibWVtYmVySWQiLCJpZCIsImVycm9yIiwiTE9BRF9NWV9JTkZPX0ZBSUwiLCJsb2dJbkFQSSIsImxvZ2luIiwic3RhdHVzIiwid2FybmluZ01zZyIsIkxPR19JTl9GQUlMVVJFIiwiYmFzZTY0UGF5bG9hZCIsInNwbGl0IiwicGF5bG9hZCIsIkJ1ZmZlciIsImZyb20iLCJwYXlsb2FkUmVzdWx0IiwiSlNPTiIsInBhcnNlIiwidG9TdHJpbmciLCJzZXQiLCJwYXRoIiwiTE9HX0lOX1NVQ0NFU1MiLCJzdWIiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0IiwicmVtb3ZlIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwic2lnblVwIiwiRFVQTElDQVRFIiwiU0lHTl9VUF9GQUlMX0RVUExJQ0FURSIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvd0FQSSIsImZvbGxvdyIsImRlbGF5IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuRm9sbG93QVBJIiwidW5mb2xsb3ciLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIndhdGNoTG9hZE15SW5mbyIsInRha2VMYXRlc3QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIndhdGNoRm9sbG93IiwiRk9MTE9XX1JFUVVFU1QiLCJ3YXRjaFVuZm9sbG93IiwiVU5GT0xMT1dfUkVRVUVTVCIsIndhdGNoTG9nSW4iLCJMT0dfSU5fUkVRVUVTVCIsIndhdGNoTG9nT3V0IiwiTE9HX09VVF9SRVFVRVNUIiwid2F0Y2hTaWduVXAiLCJTSUdOX1VQX1JFUVVFU1QiLCJ1c2VyU2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFvQjJCLEVBQUQ7O0FBQzFCLElBQUlBLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUFqQjs7QUFDQTtBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjs7QUFFQSxTQUFTQyxhQUFULEdBQXlCO0FBQ3JCLFFBQU1DLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0wsT0FBTyxDQUFDSSxHQUFSLENBQVksV0FBWixDQUFsQjtBQUNBLFFBQU1FLElBQUksR0FBRztBQUNUQyxTQUFLLEVBQUVGO0FBREUsR0FBYjtBQUlBLFNBQU9HLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxjQUFYLEVBQTJCSCxJQUEzQixFQUFnQztBQUNuQ0ksV0FBTyxFQUFDO0FBQ0osdUJBQWtCLFVBQVNQLFdBQVksRUFEbkM7QUFFSixzQkFBZ0I7QUFGWjtBQUQyQixHQUFoQyxDQUFQO0FBTUg7O0FBRUQsVUFBVVEsVUFBVixDQUFxQkMsTUFBckIsRUFBNkI7QUFDekIsTUFBSTtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDWixhQUFELENBQTNCOztBQUNBLFFBQUdXLFFBQVEsQ0FBQ1AsSUFBVCxJQUFpQixFQUFwQixFQUF1QjtBQUNuQixZQUFNUyw4REFBRyxDQUFDO0FBQ05DLFlBQUksRUFBRUMsbUVBREE7QUFFTlgsWUFBSSxFQUFFO0FBQ0ZZLGlCQUFPLEVBQUdMLFFBQVEsQ0FBQ1As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QURtQixDQUN1QjtBQUM3Qzs7QUFFRCxVQUFVYSxhQUFWLEdBQXlCO0FBQ3JCLFFBQU1KLHFFQUFVLENBQUNLLCtEQUFELEVBQW1CVCxRQUFuQixDQUFoQixDQURxQixDQUN5QjtBQUNqRDs7QUFFRCxVQUFVVSxVQUFWLEdBQXNCO0FBQ2xCLFFBQU1OLHFFQUFVLENBQUNPLDZEQUFELEVBQWlCOUMsS0FBakIsQ0FBaEIsQ0FEa0IsQ0FDdUI7QUFDNUM7O0FBRUQsVUFBVStDLFdBQVYsR0FBdUI7QUFDbkI7QUFDQSxRQUFNUixxRUFBVSxDQUFDUyw4REFBRCxFQUFrQjdCLE1BQWxCLENBQWhCLENBRm1CLENBRXdCO0FBQzNDO0FBQ0g7O0FBRUQsVUFBVThCLFdBQVYsR0FBdUI7QUFDbkIsUUFBTVYscUVBQVUsQ0FBQ1csOERBQUQsRUFBa0IxQixNQUFsQixDQUFoQixDQURtQixDQUN3QjtBQUM5Qzs7QUFFYyxVQUFVMkIsUUFBVixHQUFxQjtBQUNoQyxRQUFNQyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNmLGVBQUQsQ0FERSxFQUVOZSwrREFBSSxDQUFDZixlQUFELENBRkUsRUFHTmUsK0RBQUksQ0FBQ1osV0FBRCxDQUhFLEVBSU5ZLCtEQUFJLENBQUNWLGFBQUQsQ0FKRSxFQUtOVSwrREFBSSxDQUFDUixVQUFELENBTEUsRUFNTlEsK0RBQUksQ0FBQ04sV0FBRCxDQU5FLEVBT05NLCtEQUFJLENBQUNKLFdBQUQsQ0FQRSxDQUFELENBQVQ7QUFTSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNhNmQyZDZlM2ZiYzM5YjE2YWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgZGVsYXksIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9GQUlMVVJFLCBcclxuICAgIExPR19JTl9SRVFVRVNULCBcclxuICAgIExPR19JTl9TVUNDRVNTLCBcclxuICAgIExPR19PVVRfRkFJTFVSRSwgXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsIFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLCBcclxuICAgIFNJR05fVVBfU1VDQ0VTUywgXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsIFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsIFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCwgXHJcbiAgICBGT0xMT1dfRkFJTFVSRSwgXHJcbiAgICBGT0xMT1dfU1VDQ0VTUywgXHJcbiAgICBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfRkFJTF9EVVBMSUNBVEUsXHJcbiAgICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgTE9BRF9NWV9JTkZPX0ZBSUxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO2BgXHJcbnZhciBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcclxuaW1wb3J0IHsgd2FybmluZ01zZyB9IGZyb20gXCIuLi91dGlscy9zd2VldEFsZXJ0VXRpbHNcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGVtYWlsOiB1c2VyRW1haWxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvbWVtYmVyJywgZGF0YSx7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICAgICAgaWYocmVzcG9uc2UuZGF0YSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZHMgOiByZXNwb25zZS5kYXRhLnJlc3VsdC5wb3N0RHRvSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcklkIDogcmVzcG9uc2UuZGF0YS5yZXN1bHQuaWQsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUwsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gNDAxKXtcclxuICAgICAgICAgICAgd2FybmluZ01zZyhcIuuhnOq3uOyduOyXkCDsi6TtjKjtlojsirXri4jri6QuXCIpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBiYXNlNjRQYXlsb2FkID0gcmVzdWx0LmRhdGEuYWNjZXNzVG9rZW4uc3BsaXQoJy4nKVsxXTsgLy92YWx1ZSAwIC0+IGhlYWRlciwgMSAtPiBwYXlsb2FkLCAyIC0+IFZFUklGWSBTSUdOQVRVUkUgdmFyIHBheWxvYWQgPSBCdWZmZXIuZnJvbShiYXNlNjRQYXlsb2FkLCAnYmFzZTY0Jyk7IHZhciByZXN1bHQgPSBKU09OLnBhcnNlKHBheWxvYWQudG9TdHJpbmcoKSkgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgbGV0IHBheWxvYWQgPSBCdWZmZXIuZnJvbShiYXNlNjRQYXlsb2FkLCAnYmFzZTY0Jyk7IFxyXG4gICAgICAgICAgICBsZXQgcGF5bG9hZFJlc3VsdCA9IEpTT04ucGFyc2UocGF5bG9hZC50b1N0cmluZygpKTsgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBheWxvYWRSZXN1bHQpO1xyXG4gICAgICAgICAgICBjb29raWVzLnNldChcImFjY2Vzc1Rva2VuXCIsIHJlc3VsdC5kYXRhLmFjY2Vzc1Rva2VuLHsgcGF0aDogJy8nIH0pO1xyXG4gICAgICAgICAgICBjb29raWVzLnNldChcInJlZnJlc2hUb2tlblwiLCByZXN1bHQuZGF0YS5hY2Nlc3NUb2tlbix7IHBhdGg6ICcvJyB9KTtcclxuICAgICAgICAgICAgLy8gY29va2llcy5zZXQoXCJtZW1iZXJJZFwiLCBwYXlsb2FkUmVzdWx0LnN1Yiwge3BhdGg6Jy8nfSk7XHJcbiAgICAgICAgICAgIGNvb2tpZXMuc2V0KFwidXNlckVtYWlsXCIsIGFjdGlvbi5kYXRhLmVtYWlsKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcGF5bG9hZFJlc3VsdC5zdWIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7cG9zdElkczpyZXNwb25zZS5kYXRhLnJlc3VsdC5wb3N0RHRvSWRzfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHdhcm5pbmdNc2coXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukIVwiKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIGxvZ291dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3JlZnJlc2hUb2tlbicpO1xyXG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKCd1c2VyRW1haWwnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL3NpZ251cCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICBpZihyZXN1bHQuZGF0YS5zdGF0dXMgPT09IERVUExJQ0FURSl7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7IC8v64+Z7Iuc7JeQIOyalOyyreydtCDsl6zrn6zrsogg65Ok7Ja07JqU66m0IOuniOyngOunieq6vOunjCDsi6TtlontlZzri6QuIOydkeuLteydhCDst6jshoztlZjsp4Ag7JqU7LKt7J2AIOy3qOyGjO2VmOyngCDslYrsnYxcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ2luKTsgLy8gTE9HX0lO7J20652864qUIGFjdGlvbuydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg66eQXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpe1xyXG4gICAgLy8geWllbGQgdGFrZUV2ZXJ5KCdMT0dfT1VUX1JFUVVFU1QnLCBsb2dvdXQpOyAvLyDsl6zrn6zrsogg7YG066at7ZW064+EIOq3uOunjO2BvCDsnZHri7XsnbQg6rCQXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nb3V0KTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG4gICAgLy8geWllbGQgdGhyb3R0bGUoJ0xPR19PVVRfUkVRVVJFU1QnLCBsb2dvdXQsIDEwMDAwKTsgLy8g7Ja866eI64+Z7JWIIO2VnOuyiOunjCDsmpTssq3snYQg67O064K064+E66GdIOygnO2VnCDqsIDriqVcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=