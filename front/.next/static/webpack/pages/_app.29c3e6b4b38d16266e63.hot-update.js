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
      console.log("response : ", response);

      if (response.data != "") {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
          data: {
            postIds: response.data.result.postDtoIds
          }
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: LOAD_ALL_POST_LIKE_UNLIKE
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJqd3QiLCJyZXF1aXJlIiwiY29va2llcyIsIkNvb2tpZXMiLCJsb2FkTXlJbmZvQVBJIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJkYXRhIiwiZW1haWwiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwibG9hZE15SW5mbyIsImFjdGlvbiIsInJlc3BvbnNlIiwiY2FsbCIsInB1dCIsInR5cGUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsInBvc3RJZHMiLCJyZXN1bHQiLCJwb3N0RHRvSWRzIiwibWVtYmVySWQiLCJpZCIsImVycm9yIiwiTE9BRF9NWV9JTkZPX0ZBSUwiLCJsb2dJbkFQSSIsImxvZ2luIiwic3RhdHVzIiwid2FybmluZ01zZyIsIkxPR19JTl9GQUlMVVJFIiwic2V0IiwicGF0aCIsIkxPR19JTl9TVUNDRVNTIiwiY29uc29sZSIsImxvZyIsIkxPQURfQUxMX1BPU1RfTElLRV9VTkxJS0UiLCJsb2dvdXQiLCJyZW1vdmUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJEVVBMSUNBVEUiLCJTSUdOX1VQX0ZBSUxfRFVQTElDQVRFIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwiZm9sbG93IiwiZGVsYXkiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwidW5Gb2xsb3dBUEkiLCJ1bmZvbGxvdyIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwid2F0Y2hMb2FkTXlJbmZvIiwidGFrZUxhdGVzdCIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwid2F0Y2hGb2xsb3ciLCJGT0xMT1dfUkVRVUVTVCIsIndhdGNoVW5mb2xsb3ciLCJVTkZPTExPV19SRVFVRVNUIiwid2F0Y2hMb2dJbiIsIkxPR19JTl9SRVFVRVNUIiwid2F0Y2hMb2dPdXQiLCJMT0dfT1VUX1JFUVVFU1QiLCJ3YXRjaFNpZ25VcCIsIlNJR05fVVBfUkVRVUVTVCIsInVzZXJTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQW9CMkIsRUFBRDs7QUFDMUIsSUFBSUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLDBEQUFELENBQWpCOztBQUNBO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLElBQUlDLHdEQUFKLEVBQWhCOztBQUVBLFNBQVNDLGFBQVQsR0FBeUI7QUFDckIsUUFBTUMsV0FBVyxHQUFHSCxPQUFPLENBQUNJLEdBQVIsQ0FBWSxhQUFaLENBQXBCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHTCxPQUFPLENBQUNJLEdBQVIsQ0FBWSxXQUFaLENBQWxCO0FBQ0EsUUFBTUUsSUFBSSxHQUFHO0FBQ1RDLFNBQUssRUFBRUY7QUFERSxHQUFiO0FBSUEsU0FBT0csNENBQUssQ0FBQ0MsSUFBTixDQUFXLGNBQVgsRUFBMkJILElBQTNCLEVBQWdDO0FBQ25DSSxXQUFPLEVBQUM7QUFDSix1QkFBa0IsVUFBU1AsV0FBWSxFQURuQztBQUVKLHNCQUFnQjtBQUZaO0FBRDJCLEdBQWhDLENBQVA7QUFNSDs7QUFFRCxVQUFVUSxVQUFWLENBQXFCQyxNQUFyQixFQUE2QjtBQUN6QixNQUFJO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNaLGFBQUQsQ0FBM0I7O0FBQ0EsUUFBR1csUUFBUSxDQUFDUCxJQUFULElBQWlCLEVBQXBCLEVBQXVCO0FBQ25CLFlBQU1TLDhEQUFHLENBQUM7QUFDTkMsWUFBSSxFQUFFQyxtRUFEQTtBQUVOWCxZQUFJLEVBQUU7QUFDRlksaUJBQU8sRUFBR0wsUUFBUSxDQUFDUCxJQUFULENBQWNhLE1BQWQsQ0FBcUJDLFVBRDdCO0FBRUZDLGtCQUFRLEVBQUdSLFFBQVEsQ0FBQ1AsSUFBVCxDQUFjYSxN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LENBRXdCO0FBQzNDO0FBQ0g7O0FBRUQsVUFBVThCLFdBQVYsR0FBdUI7QUFDbkIsUUFBTVYscUVBQVUsQ0FBQ1csOERBQUQsRUFBa0IxQixNQUFsQixDQUFoQixDQURtQixDQUN3QjtBQUM5Qzs7QUFFYyxVQUFVMkIsUUFBVixHQUFxQjtBQUNoQyxRQUFNQyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNmLGVBQUQsQ0FERSxFQUVOZSwrREFBSSxDQUFDWixXQUFELENBRkUsRUFHTlksK0RBQUksQ0FBQ1YsYUFBRCxDQUhFLEVBSU5VLCtEQUFJLENBQUNSLFVBQUQsQ0FKRSxFQUtOUSwrREFBSSxDQUFDTixXQUFELENBTEUsRUFNTk0sK0RBQUksQ0FBQ0osV0FBRCxDQU5FLENBQUQsQ0FBVDtBQVFIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjljM2U2YjRiMzhkMTYyNjZlNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCBkZWxheSwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX0ZBSUxVUkUsIFxyXG4gICAgTE9HX0lOX1JFUVVFU1QsIFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsIFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLCBcclxuICAgIExPR19PVVRfUkVRVUVTVCwgXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsIFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLCBcclxuICAgIFNJR05fVVBfUkVRVUVTVCwgXHJcbiAgICBGT0xMT1dfUkVRVUVTVCwgXHJcbiAgICBVTkZPTExPV19SRVFVRVNULCBcclxuICAgIEZPTExPV19GQUlMVVJFLCBcclxuICAgIEZPTExPV19TVUNDRVNTLCBcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9GQUlMX0RVUExJQ0FURSxcclxuICAgIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICBMT0FEX01ZX0lORk9fRkFJTFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7YGBcclxudmFyIGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5pbXBvcnQgeyB3YXJuaW5nTXNnIH0gZnJvbSBcIi4uL3V0aWxzL3N3ZWV0QWxlcnRVdGlsc1wiO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZW1haWw6IHVzZXJFbWFpbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9tZW1iZXInLCBkYXRhLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdElkcyA6IHJlc3BvbnNlLmRhdGEucmVzdWx0LnBvc3REdG9JZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVySWQgOiByZXNwb25zZS5kYXRhLnJlc3VsdC5pZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTCxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSA0MDEpe1xyXG4gICAgICAgICAgICB3YXJuaW5nTXNnKFwi66Gc6re47J247JeQIOyLpO2MqO2WiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gbGV0IGJhc2U2NFBheWxvYWQgPSByZXN1bHQuZGF0YS5hY2Nlc3NUb2tlbi5zcGxpdCgnLicpWzFdOyAvL3ZhbHVlIDAgLT4gaGVhZGVyLCAxIC0+IHBheWxvYWQsIDIgLT4gVkVSSUZZIFNJR05BVFVSRSB2YXIgcGF5bG9hZCA9IEJ1ZmZlci5mcm9tKGJhc2U2NFBheWxvYWQsICdiYXNlNjQnKTsgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UocGF5bG9hZC50b1N0cmluZygpKSBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAvLyBsZXQgcGF5bG9hZCA9IEJ1ZmZlci5mcm9tKGJhc2U2NFBheWxvYWQsICdiYXNlNjQnKTsgXHJcbiAgICAgICAgICAgIC8vIGxldCBwYXlsb2FkUmVzdWx0ID0gSlNPTi5wYXJzZShwYXlsb2FkLnRvU3RyaW5nKCkpOyBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF5bG9hZFJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNvb2tpZXMuc2V0KFwiYWNjZXNzVG9rZW5cIiwgcmVzdWx0LmRhdGEuYWNjZXNzVG9rZW4seyBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgICAgIGNvb2tpZXMuc2V0KFwicmVmcmVzaFRva2VuXCIsIHJlc3VsdC5kYXRhLmFjY2Vzc1Rva2VuLHsgcGF0aDogJy8nIH0pO1xyXG4gICAgICAgICAgICAvLyBjb29raWVzLnNldChcIm1lbWJlcklkXCIsIHBheWxvYWRSZXN1bHQuc3ViLCB7cGF0aDonLyd9KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJ1c2VyRW1haWxcIiwgYWN0aW9uLmRhdGEuZW1haWwpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7cG9zdElkczpyZXNwb25zZS5kYXRhLnJlc3VsdC5wb3N0RHRvSWRzfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9QT1NUX0xJS0VfVU5MSUtFLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgd2FybmluZ01zZyhcIuuhnOq3uOyduOyXkCDsi6TtjKjtlojsirXri4jri6QhXCIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogbG9nb3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgnYWNjZXNzVG9rZW4nKTtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgncmVmcmVzaFRva2VuJyk7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3VzZXJFbWFpbCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvc2lnbnVwJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gRFVQTElDQVRFKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTF9EVVBMSUNBVEUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bkZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOyekOumrOu2gO2EsOuKlCDtlajsiJjsnZgg66ek6rCc67OA7IiY6rCAIOyYqOuLpC4gXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICAvLyB5aWVsZCB0YWtlRXZlcnkoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ291dCk7IC8vIOyXrOufrOuyiCDtgbTrpq3tlbTrj4Qg6re466eM7YG8IOydkeuLteydtCDqsJBcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dvdXQpOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbiAgICAvLyB5aWVsZCB0aHJvdHRsZSgnTE9HX09VVF9SRVFVUkVTVCcsIGxvZ291dCwgMTAwMDApOyAvLyDslrzrp4jrj5nslYgg7ZWc67KI66eMIOyalOyyreydhCDrs7TrgrTrj4TroZ0g7KCc7ZWcIOqwgOuKpVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9