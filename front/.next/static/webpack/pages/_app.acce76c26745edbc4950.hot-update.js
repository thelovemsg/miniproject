webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: FAIL, SUCCESS, DUPLICATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAIL", function() { return FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE", function() { return DUPLICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sweetAlertUtils */ "./utils/sweetAlertUtils.js");




const FAIL = "FAIL";
const SUCCESS = "SUCCESS";
const DUPLICATE = "DUPLICATE";

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* login(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    console(result);

    if (result.data.statusCode != 200) {
      Object(_utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_3__["warningMsg"])(result.data.responseMessage);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
        data: result.data
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: error.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* logout() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: error.data
    });
  }
}

function signUpAPI(data) {
  let test = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/member', data);
  return test;
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 

    if (result.data === SUCCESS) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
      });
    } else if (result.data === DUPLICATE) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAIL_DUPLICATE"]
      });
    } else if (result.data === FAIL) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: SIGN_UP_FAIL
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: error.data
    });
  }
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogOut() {
  // yield takeEvery('LOG_OUT_REQUEST', logout); // 여러번 클릭해도 그만큼 응답이 감
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logout); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
  // yield throttle('LOG_OUT_REQUREST', logout, 10000); // 얼마동안 한번만 요청을 보내도록 제한 가능
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJGQUlMIiwiU1VDQ0VTUyIsIkRVUExJQ0FURSIsImxvZ0luQVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImxvZ2luIiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsImNvbnNvbGUiLCJzdGF0dXNDb2RlIiwid2FybmluZ01zZyIsInJlc3BvbnNlTWVzc2FnZSIsInB1dCIsInR5cGUiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19JTl9TVUNDRVNTIiwiZXJyb3IiLCJsb2dPdXRBUEkiLCJsb2dvdXQiLCJkZWxheSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsInRlc3QiLCJzaWduVXAiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxfRFVQTElDQVRFIiwiU0lHTl9VUF9GQUlMIiwiU0lHTl9VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwiZm9sbG93IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuRm9sbG93QVBJIiwidW5mb2xsb3ciLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIndhdGNoRm9sbG93IiwidGFrZUxhdGVzdCIsIkZPTExPV19SRVFVRVNUIiwid2F0Y2hVbmZvbGxvdyIsIlVORk9MTE9XX1JFUVVFU1QiLCJ3YXRjaExvZ0luIiwiTE9HX0lOX1JFUVVFU1QiLCJ3YXRjaExvZ091dCIsIkxPR19PVVRfUkVRVUVTVCIsIndhdGNoU2lnblVwIiwiU0lHTl9VUF9SRVFVRVNUIiwidXNlclNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFrQkE7QUFFTyxNQUFNQSxJQUFJLEdBQUcsTUFBYjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFo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bUIsQ0FDdUI7QUFDN0M7O0FBRUQsVUFBVVUsYUFBVixHQUF5QjtBQUNyQixRQUFNRixxRUFBVSxDQUFDRywrREFBRCxFQUFtQlAsUUFBbkIsQ0FBaEIsQ0FEcUIsQ0FDeUI7QUFDakQ7O0FBRUQsVUFBVVEsVUFBVixHQUFzQjtBQUNsQixRQUFNSixxRUFBVSxDQUFDSyw2REFBRCxFQUFpQnZDLEtBQWpCLENBQWhCLENBRGtCLENBQ3VCO0FBQzVDOztBQUVELFVBQVV3QyxXQUFWLEdBQXVCO0FBQ25CO0FBQ0EsUUFBTU4scUVBQVUsQ0FBQ08sOERBQUQsRUFBa0IzQixNQUFsQixDQUFoQixDQUZtQixDQUV3QjtBQUMzQztBQUNIOztBQUVELFVBQVU0QixXQUFWLEdBQXVCO0FBQ25CLFFBQU1SLHFFQUFVLENBQUNTLDhEQUFELEVBQWtCdkIsTUFBbEIsQ0FBaEIsQ0FEbUIsQ0FDd0I7QUFDOUM7O0FBRWMsVUFBVXdCLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDYixXQUFELENBREUsRUFFTmEsK0RBQUksQ0FBQ1YsYUFBRCxDQUZFLEVBR05VLCtEQUFJLENBQUNSLFVBQUQsQ0FIRSxFQUlOUSwrREFBSSxDQUFDTixXQUFELENBSkUsRUFLTk0sK0RBQUksQ0FBQ0osV0FBRCxDQUxFLENBQUQsQ0FBVDtBQU9IIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWNjZTc2YzI2NzQ1ZWRiYzQ5NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCBkZWxheSwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fRkFJTFVSRSwgXHJcbiAgICBMT0dfSU5fUkVRVUVTVCwgXHJcbiAgICBMT0dfSU5fU1VDQ0VTUywgXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsIFxyXG4gICAgTE9HX09VVF9SRVFVRVNULCBcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSwgXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsIFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULCBcclxuICAgIEZPTExPV19SRVFVRVNULCBcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsIFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsIFxyXG4gICAgRk9MTE9XX1NVQ0NFU1MsIFxyXG4gICAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgd2FybmluZ01zZyB9IGZyb20gXCIuLi91dGlscy9zd2VldEFsZXJ0VXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGQUlMID0gXCJGQUlMXCI7XHJcbmV4cG9ydCBjb25zdCBTVUNDRVNTID0gXCJTVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBEVVBMSUNBVEUgPSBcIkRVUExJQ0FURVwiO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZShyZXN1bHQpO1xyXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1c0NvZGUgIT0gMjAwKXtcclxuICAgICAgICAgICAgd2FybmluZ01zZyhyZXN1bHQuZGF0YS5yZXNwb25zZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgbGV0IHRlc3QgPSBheGlvcy5wb3N0KCcvYXBpL21lbWJlcicsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhID09PSBTVUNDRVNTKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHJlc3VsdC5kYXRhID09PSBEVVBMSUNBVEUpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMX0RVUExJQ0FURSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHJlc3VsdC5kYXRhID09PSBGQUlMKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOyekOumrOu2gO2EsOuKlCDtlajsiJjsnZgg66ek6rCc67OA7IiY6rCAIOyYqOuLpC4gXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuRm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTsgLy8gTE9HX0lO7J20652864qUIGFjdGlvbuydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg66eQXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTsgLy8gTE9HX0lO7J20652864qUIGFjdGlvbuydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg66eQXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dpbik7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIC8vIHlpZWxkIHRha2VFdmVyeSgnTE9HX09VVF9SRVFVRVNUJywgbG9nb3V0KTsgLy8g7Jes65+s67KIIO2BtOumre2VtOuPhCDqt7jrp4ztgbwg7J2R64u17J20IOqwkFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ291dCk7IC8v64+Z7Iuc7JeQIOyalOyyreydtCDsl6zrn6zrsogg65Ok7Ja07JqU66m0IOuniOyngOunieq6vOunjCDsi6TtlontlZzri6QuIOydkeuLteydhCDst6jshoztlZjsp4Ag7JqU7LKt7J2AIOy3qOyGjO2VmOyngCDslYrsnYxcclxuICAgIC8vIHlpZWxkIHRocm90dGxlKCdMT0dfT1VUX1JFUVVSRVNUJywgbG9nb3V0LCAxMDAwMCk7IC8vIOyWvOuniOuPmeyViCDtlZzrsojrp4wg7JqU7LKt7J2EIOuztOuCtOuPhOuhnSDsoJztlZwg6rCA64qlXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7IC8v64+Z7Iuc7JeQIOyalOyyreydtCDsl6zrn6zrsogg65Ok7Ja07JqU66m0IOuniOyngOunieq6vOunjCDsi6TtlontlZzri6QuIOydkeuLteydhCDst6jshoztlZjsp4Ag7JqU7LKt7J2AIOy3qOyGjO2VmOyngCDslYrsnYxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==