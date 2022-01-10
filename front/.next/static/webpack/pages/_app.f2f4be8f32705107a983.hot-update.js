webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
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
      // let base64Payload = result.data.accessToken.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE var payload = Buffer.from(base64Payload, 'base64'); var result = JSON.parse(payload.toString()) console.log(result);
      // let payload = Buffer.from(base64Payload, 'base64'); 
      // let payloadResult = JSON.parse(payload.toString()); 
      // console.log(payloadResult);
      cookies.set("accessToken", result.data.accessToken, {
        path: '/'
      });
      cookies.set("refreshToken", result.data.accessToken, {
        path: '/'
      }); // cookies.set("memberId", payloadResult.sub, {path:'/'});

      cookies.set("userEmail", action.data.email);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"]
      });
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
      console.log(response);

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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJqd3QiLCJyZXF1aXJlIiwiY29va2llcyIsIkNvb2tpZXMiLCJsb2FkTXlJbmZvQVBJIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJkYXRhIiwiZW1haWwiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwibG9hZE15SW5mbyIsImFjdGlvbiIsInJlc3BvbnNlIiwiY2FsbCIsInB1dCIsInR5cGUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsInBvc3RJZHMiLCJyZXN1bHQiLCJwb3N0RHRvSWRzIiwibWVtYmVySWQiLCJpZCIsImVycm9yIiwiTE9BRF9NWV9JTkZPX0ZBSUwiLCJsb2dJbkFQSSIsImxvZ2luIiwic3RhdHVzIiwid2FybmluZ01zZyIsIkxPR19JTl9GQUlMVVJFIiwic2V0IiwicGF0aCIsIkxPR19JTl9TVUNDRVNTIiwiY29uc29sZSIsImxvZyIsImxvZ291dCIsInJlbW92ZSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsInNpZ25VcCIsIkRVUExJQ0FURSIsIlNJR05fVVBfRkFJTF9EVVBMSUNBVEUiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJkZWxheSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ1bkZvbGxvd0FQSSIsInVuZm9sbG93IiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJ3YXRjaExvYWRNeUluZm8iLCJ0YWtlTGF0ZXN0IiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJ3YXRjaEZvbGxvdyIsIkZPTExPV19SRVFVRVNUIiwid2F0Y2hVbmZvbGxvdyIsIlVORk9MTE9XX1JFUVVFU1QiLCJ3YXRjaExvZ0luIiwiTE9HX0lOX1JFUVVFU1QiLCJ3YXRjaExvZ091dCIsIkxPR19PVVRfUkVRVUVT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QixDQUN3QjtBQUM5Qzs7QUFFYyxVQUFVMkIsUUFBVixHQUFxQjtBQUNoQyxRQUFNQyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNmLGVBQUQsQ0FERSxFQUVOZSwrREFBSSxDQUFDWixXQUFELENBRkUsRUFHTlksK0RBQUksQ0FBQ1YsYUFBRCxDQUhFLEVBSU5VLCtEQUFJLENBQUNSLFVBQUQsQ0FKRSxFQUtOUSwrREFBSSxDQUFDTixXQUFELENBTEUsRUFNTk0sK0RBQUksQ0FBQ0osV0FBRCxDQU5FLENBQUQsQ0FBVDtBQVFIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjJmNGJlOGYzMjcwNTEwN2E5ODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCBkZWxheSwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX0ZBSUxVUkUsIFxyXG4gICAgTE9HX0lOX1JFUVVFU1QsIFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsIFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLCBcclxuICAgIExPR19PVVRfUkVRVUVTVCwgXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsIFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLCBcclxuICAgIFNJR05fVVBfUkVRVUVTVCwgXHJcbiAgICBGT0xMT1dfUkVRVUVTVCwgXHJcbiAgICBVTkZPTExPV19SRVFVRVNULCBcclxuICAgIEZPTExPV19GQUlMVVJFLCBcclxuICAgIEZPTExPV19TVUNDRVNTLCBcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9GQUlMX0RVUExJQ0FURSxcclxuICAgIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICBMT0FEX01ZX0lORk9fRkFJTFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7YGBcclxudmFyIGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5pbXBvcnQgeyB3YXJuaW5nTXNnIH0gZnJvbSBcIi4uL3V0aWxzL3N3ZWV0QWxlcnRVdGlsc1wiO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZW1haWw6IHVzZXJFbWFpbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9tZW1iZXInLCBkYXRhLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdElkcyA6IHJlc3BvbnNlLmRhdGEucmVzdWx0LnBvc3REdG9JZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVySWQgOiByZXNwb25zZS5kYXRhLnJlc3VsdC5pZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTCxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSA0MDEpe1xyXG4gICAgICAgICAgICB3YXJuaW5nTXNnKFwi66Gc6re47J247JeQIOyLpO2MqO2WiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gbGV0IGJhc2U2NFBheWxvYWQgPSByZXN1bHQuZGF0YS5hY2Nlc3NUb2tlbi5zcGxpdCgnLicpWzFdOyAvL3ZhbHVlIDAgLT4gaGVhZGVyLCAxIC0+IHBheWxvYWQsIDIgLT4gVkVSSUZZIFNJR05BVFVSRSB2YXIgcGF5bG9hZCA9IEJ1ZmZlci5mcm9tKGJhc2U2NFBheWxvYWQsICdiYXNlNjQnKTsgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UocGF5bG9hZC50b1N0cmluZygpKSBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAvLyBsZXQgcGF5bG9hZCA9IEJ1ZmZlci5mcm9tKGJhc2U2NFBheWxvYWQsICdiYXNlNjQnKTsgXHJcbiAgICAgICAgICAgIC8vIGxldCBwYXlsb2FkUmVzdWx0ID0gSlNPTi5wYXJzZShwYXlsb2FkLnRvU3RyaW5nKCkpOyBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF5bG9hZFJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNvb2tpZXMuc2V0KFwiYWNjZXNzVG9rZW5cIiwgcmVzdWx0LmRhdGEuYWNjZXNzVG9rZW4seyBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgICAgIGNvb2tpZXMuc2V0KFwicmVmcmVzaFRva2VuXCIsIHJlc3VsdC5kYXRhLmFjY2Vzc1Rva2VuLHsgcGF0aDogJy8nIH0pO1xyXG4gICAgICAgICAgICAvLyBjb29raWVzLnNldChcIm1lbWJlcklkXCIsIHBheWxvYWRSZXN1bHQuc3ViLCB7cGF0aDonLyd9KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJ1c2VyRW1haWxcIiwgYWN0aW9uLmRhdGEuZW1haWwpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge3Bvc3RJZHM6cmVzcG9uc2UuZGF0YS5yZXN1bHQucG9zdER0b0lkc31cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB3YXJuaW5nTXNnKFwi66Gc6re47J247JeQIOyLpO2MqO2WiOyKteuLiOuLpCFcIik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKCdhY2Nlc3NUb2tlbicpO1xyXG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKCdyZWZyZXNoVG9rZW4nKTtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgndXNlckVtYWlsJyk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9zaWdudXAnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTsgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOyekOumrOu2gO2EsOuKlCDtlajsiJjsnZgg66ek6rCc67OA7IiY6rCAIOyYqOuLpC4gXHJcbiAgICAgICAgaWYocmVzdWx0LmRhdGEuc3RhdHVzID09PSBEVVBMSUNBVEUpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMX0RVUExJQ0FURSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOyekOumrOu2gO2EsOuKlCDtlajsiJjsnZgg66ek6rCc67OA7IiY6rCAIOyYqOuLpC4gXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuRm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTsgLy8gTE9HX0lO7J20652864qUIGFjdGlvbuydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg66eQXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTsgLy8gTE9HX0lO7J20652864qUIGFjdGlvbuydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg66eQXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dpbik7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIC8vIHlpZWxkIHRha2VFdmVyeSgnTE9HX09VVF9SRVFVRVNUJywgbG9nb3V0KTsgLy8g7Jes65+s67KIIO2BtOumre2VtOuPhCDqt7jrp4ztgbwg7J2R64u17J20IOqwkFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ291dCk7IC8v64+Z7Iuc7JeQIOyalOyyreydtCDsl6zrn6zrsogg65Ok7Ja07JqU66m0IOuniOyngOunieq6vOunjCDsi6TtlontlZzri6QuIOydkeuLteydhCDst6jshoztlZjsp4Ag7JqU7LKt7J2AIOy3qOyGjO2VmOyngCDslYrsnYxcclxuICAgIC8vIHlpZWxkIHRocm90dGxlKCdMT0dfT1VUX1JFUVVSRVNUJywgbG9nb3V0LCAxMDAwMCk7IC8vIOyWvOuniOuPmeyViCDtlZzrsojrp4wg7JqU7LKt7J2EIOuztOuCtOuPhOuhnSDsoJztlZwg6rCA64qlXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7IC8v64+Z7Iuc7JeQIOyalOyyreydtCDsl6zrn6zrsogg65Ok7Ja07JqU66m0IOuniOyngOunieq6vOunjCDsi6TtlontlZzri6QuIOydkeuLteydhCDst6jshoztlZjsp4Ag7JqU7LKt7J2AIOy3qOyGjO2VmOyngCDslYrsnYxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=