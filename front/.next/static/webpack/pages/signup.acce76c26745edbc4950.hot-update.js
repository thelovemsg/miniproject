webpackHotUpdate_N_E("pages/signup",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJGQUlMIiwiU1VDQ0VTUyIsIkRVUExJQ0FURSIsImxvZ0luQVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImxvZ2luIiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsImNvbnNvbGUiLCJzdGF0dXNDb2RlIiwid2FybmluZ01zZyIsInJlc3BvbnNlTWVzc2FnZSIsInB1dCIsInR5cGUiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19JTl9TVUNDRVNTIiwiZXJyb3IiLCJsb2dPdXRBUEkiLCJsb2dvdXQiLCJkZWxheSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsInRlc3QiLCJzaWduVXAiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxfRFVQTElDQVRFIiwiU0lHTl9VUF9GQUlMIiwiU0lHTl9VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwiZm9sbG93IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuRm9sbG93QVBJIiwidW5mb2xsb3ciLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIndhdGNoRm9sbG93IiwidGFrZUxhdGVzdCIsIkZPTExPV19SRVFVRVNUIiwid2F0Y2hVbmZvbGxvdyIsIlVORk9MTE9XX1JFUVVFU1QiLCJ3YXRjaExvZ0luIiwiTE9HX0lOX1JFUVVFU1QiLCJ3YXRjaExvZ091dCIsIkxPR19PVVRfUkVRVUVTVCIsIndhdGNoU2lnblVwIiwiU0lHTl9VUF9SRVFVRVNUIiwidXNlclNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFrQkE7QUFFTyxNQUFNQSxJQUFJLEdBQUcsTUFBYjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFo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bUIsQ0FDdUI7QUFDN0M7O0FBRUQsVUFBVVUsYUFBVixHQUF5QjtBQUNyQixRQUFNRixxRUFBVSxDQUFDRywrREFBRCxFQUFtQlAsUUFBbkIsQ0FBaEIsQ0FEcUIsQ0FDeUI7QUFDakQ7O0FBRUQsVUFBVVEsVUFBVixHQUFzQjtBQUNsQixRQUFNSixxRUFBVSxDQUFDSyw2REFBRCxFQUFpQnZDLEtBQWpCLENBQWhCLENBRGtCLENBQ3VCO0FBQzVDOztBQUVELFVBQVV3QyxXQUFWLEdBQXVCO0FBQ25CO0FBQ0EsUUFBTU4scUVBQVUsQ0FBQ08sOERBQUQsRUFBa0IzQixNQUFsQixDQUFoQixDQUZtQixDQUV3QjtBQUMzQztBQUNIOztBQUVELFVBQVU0QixXQUFWLEdBQXVCO0FBQ25CLFFBQU1SLHFFQUFVLENBQUNTLDhEQUFELEVBQWtCdkIsTUFBbEIsQ0FBaEIsQ0FEbUIsQ0FDd0I7QUFDOUM7O0FBRWMsVUFBVXdCLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDYixXQUFELENBREUsRUFFTmEsK0RBQUksQ0FBQ1YsYUFBRCxDQUZFLEVBR05VLCtEQUFJLENBQUNSLFVBQUQsQ0FIRSxFQUlOUSwrREFBSSxDQUFDTixXQUFELENBSkUsRUFLTk0sK0RBQUksQ0FBQ0osV0FBRCxDQUxFLENBQUQsQ0FBVDtBQU9IIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5hY2NlNzZjMjY3NDVlZGJjNDk1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIGRlbGF5LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9GQUlMVVJFLCBcclxuICAgIExPR19JTl9SRVFVRVNULCBcclxuICAgIExPR19JTl9TVUNDRVNTLCBcclxuICAgIExPR19PVVRfRkFJTFVSRSwgXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsIFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLCBcclxuICAgIFNJR05fVVBfU1VDQ0VTUywgXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsIFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsIFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCwgXHJcbiAgICBGT0xMT1dfRkFJTFVSRSwgXHJcbiAgICBGT0xMT1dfU1VDQ0VTUywgXHJcbiAgICBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfRkFJTF9EVVBMSUNBVEVcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyB3YXJuaW5nTXNnIH0gZnJvbSBcIi4uL3V0aWxzL3N3ZWV0QWxlcnRVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZBSUwgPSBcIkZBSUxcIjtcclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1MgPSBcIlNVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IERVUExJQ0FURSA9IFwiRFVQTElDQVRFXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlKHJlc3VsdCk7XHJcbiAgICAgICAgaWYocmVzdWx0LmRhdGEuc3RhdHVzQ29kZSAhPSAyMDApe1xyXG4gICAgICAgICAgICB3YXJuaW5nTXNnKHJlc3VsdC5kYXRhLnJlc3BvbnNlTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ291dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICBsZXQgdGVzdCA9IGF4aW9zLnBvc3QoJy9hcGkvbWVtYmVyJywgZGF0YSk7XHJcbiAgICByZXR1cm4gdGVzdDtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTsgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOyekOumrOu2gO2EsOuKlCDtlajsiJjsnZgg66ek6rCc67OA7IiY6rCAIOyYqOuLpC4gXHJcbiAgICAgICAgaWYocmVzdWx0LmRhdGEgPT09IFNVQ0NFU1Mpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYocmVzdWx0LmRhdGEgPT09IERVUExJQ0FURSl7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYocmVzdWx0LmRhdGEgPT09IEZBSUwpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ2luKTsgLy8gTE9HX0lO7J20652864qUIGFjdGlvbuydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg66eQXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpe1xyXG4gICAgLy8geWllbGQgdGFrZUV2ZXJ5KCdMT0dfT1VUX1JFUVVFU1QnLCBsb2dvdXQpOyAvLyDsl6zrn6zrsogg7YG066at7ZW064+EIOq3uOunjO2BvCDsnZHri7XsnbQg6rCQXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nb3V0KTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG4gICAgLy8geWllbGQgdGhyb3R0bGUoJ0xPR19PVVRfUkVRVVJFU1QnLCBsb2dvdXQsIDEwMDAwKTsgLy8g7Ja866eI64+Z7JWIIO2VnOuyiOunjCDsmpTssq3snYQg67O064K064+E66GdIOygnO2VnCDqsIDriqVcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9