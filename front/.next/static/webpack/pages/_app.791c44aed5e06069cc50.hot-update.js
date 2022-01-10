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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJqd3QiLCJyZXF1aXJlIiwiY29va2llcyIsIkNvb2tpZXMiLCJsb2FkTXlJbmZvQVBJIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJkYXRhIiwiZW1haWwiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwibG9hZE15SW5mbyIsImFjdGlvbiIsInJlc3BvbnNlIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJpZCIsInB1dCIsInR5cGUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsInBvc3RJZHMiLCJwb3N0RHRvSWRzIiwibWVtYmVySWQiLCJlcnJvciIsIkxPQURfTVlfSU5GT19GQUlMIiwibG9nSW5BUEkiLCJsb2dpbiIsInN0YXR1cyIsIndhcm5pbmdNc2ciLCJMT0dfSU5fRkFJTFVSRSIsImJhc2U2NFBheWxvYWQiLCJzcGxpdCIsInBheWxvYWQiLCJCdWZmZXIiLCJmcm9tIiwicGF5bG9hZFJlc3VsdCIsIkpTT04iLCJwYXJzZSIsInRvU3RyaW5nIiwic2V0IiwicGF0aCIsIkxPR19JTl9TVUNDRVNTIiwic3ViIiwibG9nb3V0IiwicmVtb3ZlIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwic2lnblVwIiwiRFVQTElDQVRFIiwiU0lHTl9VUF9GQUlMX0RVUExJQ0FURSIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvd0FQSSIsImZvbGxvdyIsImRlbGF5IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuRm9sbG93QVBJIiwidW5mb2xsb3ciLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIndhdGNoTG9hZE15SW5mbyIsInRha2VMYXRlc3QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIndhdGNoRm9sbG93IiwiRk9MTE9XX1JFUVVFU1QiLCJ3YXRjaFVuZm9sbG93IiwiVU5GT0xMT1dfUkVRVUVTVCIsIndhdGNoTG9nSW4iLCJMT0dfSU5fUkVRVUVTVCIsIndhdGNoTG9nT3V0IiwiTE9HX09VVF9SRVFVRVNUIiwid2F0Y2hTaWduVXAiLCJTSUdOX1VQX1JFUVVFU1QiLCJ1c2VyU2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFvQjJCLEVBQUQ7O0FBQzFCLElBQUlBLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUFqQjs7QUFDQTtBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjs7QUFFQSxTQUFTQyxhQUFULEdBQXlCO0FBQ3JCLFFBQU1DLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0wsT0FBTyxDQUFDSSxHQUFSLENBQVksV0FBWixDQUFsQjtBQUNBLFFBQU1FLElBQUksR0FBRztBQUNUQyxTQUFLLEVBQUVGO0FBREUsR0FBYjtBQUlBLFNBQU9HLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxjQUFYLEVBQTJCSCxJQUEzQixFQUFnQztBQUNuQ0ksV0FBTyxFQUFDO0FBQ0osdUJBQWtCLFVBQVNQLFdBQVksRUFEbkM7QUFFSixzQkFBZ0I7QUFGWjtBQUQyQixHQUFoQyxDQUFQO0FBTUg7O0FBRUQsVUFBVVEsVUFBVixDQUFxQkMsTUFBckIsRUFBNkI7QUFDekIsTUFBSTtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDWixhQUFELENBQTNCO0FBQ0FhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJILFFBQTVCO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDSCxRQUFRLENBQUNQLElBQVQsQ0FBY1csTUFBZCxDQUFxQkMsRUFBaEU7O0FBQ0EsUUFBR0ws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LEdBQTJCO0FBQ3ZCLFFBQU1DLHFFQUFVLENBQUNDLG1FQUFELEVBQXVCdkQsVUFBdkIsQ0FBaEIsQ0FEdUIsQ0FDNkI7QUFDdkQ7O0FBRUQsVUFBVXdELFdBQVYsR0FBdUI7QUFDbkIsUUFBTUYscUVBQVUsQ0FBQ0csNkRBQUQsRUFBaUJaLE1BQWpCLENBQWhCLENBRG1CLENBQ3VCO0FBQzdDOztBQUVELFVBQVVhLGFBQVYsR0FBeUI7QUFDckIsUUFBTUoscUVBQVUsQ0FBQ0ssK0RBQUQsRUFBbUJULFFBQW5CLENBQWhCLENBRHFCLENBQ3lCO0FBQ2pEOztBQUVELFVBQVVVLFVBQVYsR0FBc0I7QUFDbEIsUUFBTU4scUVBQVUsQ0FBQ08sNkRBQUQsRUFBaUI1QyxLQUFqQixDQUFoQixDQURrQixDQUN1QjtBQUM1Qzs7QUFFRCxVQUFVNkMsV0FBVixHQUF1QjtBQUNuQjtBQUNBLFFBQU1SLHFFQUFVLENBQUNTLDhEQUFELEVBQWtCN0IsTUFBbEIsQ0FBaEIsQ0FGbUIsQ0FFd0I7QUFDM0M7QUFDSDs7QUFFRCxVQUFVOEIsV0FBVixHQUF1QjtBQUNuQixRQUFNVixxRUFBVSxDQUFDVyw4REFBRCxFQUFrQjFCLE1BQWxCLENBQWhCLENBRG1CLENBQ3dCO0FBQzlDOztBQUVjLFVBQVUyQixRQUFWLEdBQXFCO0FBQ2hDLFFBQU1DLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ2YsZUFBRCxDQURFLEVBRU5lLCtEQUFJLENBQUNmLGVBQUQsQ0FGRSxFQUdOZSwrREFBSSxDQUFDWixXQUFELENBSEUsRUFJTlksK0RBQUksQ0FBQ1YsYUFBRCxDQUpFLEVBS05VLCtEQUFJLENBQUNSLFVBQUQsQ0FMRSxFQU1OUSwrREFBSSxDQUFDTixXQUFELENBTkUsRUFPTk0sK0RBQUksQ0FBQ0osV0FBRCxDQVBFLENBQUQsQ0FBVDtBQVNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzkxYzQ0YWVkNWUwNjA2OWNjNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCBkZWxheSwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX0ZBSUxVUkUsIFxyXG4gICAgTE9HX0lOX1JFUVVFU1QsIFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsIFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLCBcclxuICAgIExPR19PVVRfUkVRVUVTVCwgXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsIFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLCBcclxuICAgIFNJR05fVVBfUkVRVUVTVCwgXHJcbiAgICBGT0xMT1dfUkVRVUVTVCwgXHJcbiAgICBVTkZPTExPV19SRVFVRVNULCBcclxuICAgIEZPTExPV19GQUlMVVJFLCBcclxuICAgIEZPTExPV19TVUNDRVNTLCBcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9GQUlMX0RVUExJQ0FURSxcclxuICAgIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICBMT0FEX01ZX0lORk9fRkFJTFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7YGBcclxudmFyIGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5pbXBvcnQgeyB3YXJuaW5nTXNnIH0gZnJvbSBcIi4uL3V0aWxzL3N3ZWV0QWxlcnRVdGlsc1wiO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZW1haWw6IHVzZXJFbWFpbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9tZW1iZXInLCBkYXRhLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlIDo6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZS5kYXRhLnJlc3VsdC5pZCA6OiBcIiwgcmVzcG9uc2UuZGF0YS5yZXN1bHQuaWQpO1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0SWRzIDogcmVzcG9uc2UuZGF0YS5yZXN1bHQucG9zdER0b0lkcyxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJJZCA6IHJlc3BvbnNlLmRhdGEucmVzdWx0LmlkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09IDQwMSl7XHJcbiAgICAgICAgICAgIHdhcm5pbmdNc2coXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukLlwiKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgYmFzZTY0UGF5bG9hZCA9IHJlc3VsdC5kYXRhLmFjY2Vzc1Rva2VuLnNwbGl0KCcuJylbMV07IC8vdmFsdWUgMCAtPiBoZWFkZXIsIDEgLT4gcGF5bG9hZCwgMiAtPiBWRVJJRlkgU0lHTkFUVVJFIHZhciBwYXlsb2FkID0gQnVmZmVyLmZyb20oYmFzZTY0UGF5bG9hZCwgJ2Jhc2U2NCcpOyB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShwYXlsb2FkLnRvU3RyaW5nKCkpIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGxldCBwYXlsb2FkID0gQnVmZmVyLmZyb20oYmFzZTY0UGF5bG9hZCwgJ2Jhc2U2NCcpOyBcclxuICAgICAgICAgICAgbGV0IHBheWxvYWRSZXN1bHQgPSBKU09OLnBhcnNlKHBheWxvYWQudG9TdHJpbmcoKSk7IFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXlsb2FkUmVzdWx0KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJhY2Nlc3NUb2tlblwiLCByZXN1bHQuZGF0YS5hY2Nlc3NUb2tlbix7IHBhdGg6ICcvJyB9KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJyZWZyZXNoVG9rZW5cIiwgcmVzdWx0LmRhdGEuYWNjZXNzVG9rZW4seyBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvb2tpZXMuc2V0KFwibWVtYmVySWRcIiwgcGF5bG9hZFJlc3VsdC5zdWIsIHtwYXRoOicvJ30pO1xyXG4gICAgICAgICAgICBjb29raWVzLnNldChcInVzZXJFbWFpbFwiLCBhY3Rpb24uZGF0YS5lbWFpbCk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHttZW1iZXJJZCA6IHBheWxvYWRSZXN1bHQuc3VifSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSA6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtwb3N0SWRzOnJlc3BvbnNlLmRhdGEucmVzdWx0LnBvc3REdG9JZHN9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgd2FybmluZ01zZyhcIuuhnOq3uOyduOyXkCDsi6TtjKjtlojsirXri4jri6QhXCIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogbG9nb3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgnYWNjZXNzVG9rZW4nKTtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgncmVmcmVzaFRva2VuJyk7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3VzZXJFbWFpbCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvc2lnbnVwJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gRFVQTElDQVRFKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTF9EVVBMSUNBVEUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bkZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOyekOumrOu2gO2EsOuKlCDtlajsiJjsnZgg66ek6rCc67OA7IiY6rCAIOyYqOuLpC4gXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICAvLyB5aWVsZCB0YWtlRXZlcnkoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ291dCk7IC8vIOyXrOufrOuyiCDtgbTrpq3tlbTrj4Qg6re466eM7YG8IOydkeuLteydtCDqsJBcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dvdXQpOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbiAgICAvLyB5aWVsZCB0aHJvdHRsZSgnTE9HX09VVF9SRVFVUkVTVCcsIGxvZ291dCwgMTAwMDApOyAvLyDslrzrp4jrj5nslYgg7ZWc67KI66eMIOyalOyyreydhCDrs7TrgrTrj4TroZ0g7KCc7ZWcIOqwgOuKpVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==