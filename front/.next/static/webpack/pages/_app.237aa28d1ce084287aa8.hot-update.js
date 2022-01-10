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
        }); // yield put({
        //     type: SET_LIKE_UNLIKE_INFO_REQUSET,
        //     data: action.data.email
        // })
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

function loadMyLikeUnlikeInfoAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/auth/signup', data);
}

function* loadMyLikeUnlikeInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyLikeUnlikeInfoAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 

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

function* watchLoadLikeUnlikeInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(SET_LIKE_UNLIKE_INFO_REQUSET, loadMyLikeUnlikeInfo); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJqd3QiLCJyZXF1aXJlIiwiY29va2llcyIsIkNvb2tpZXMiLCJsb2FkTXlJbmZvQVBJIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJkYXRhIiwiZW1haWwiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwibG9hZE15SW5mbyIsImFjdGlvbiIsInJlc3BvbnNlIiwiY2FsbCIsInB1dCIsInR5cGUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsInBvc3RJZHMiLCJyZXN1bHQiLCJwb3N0RHRvSWRzIiwibWVtYmVySWQiLCJpZCIsImVycm9yIiwiTE9BRF9NWV9JTkZPX0ZBSUwiLCJsb2dJbkFQSSIsImxvZ2luIiwic3RhdHVzIiwid2FybmluZ01zZyIsIkxPR19JTl9GQUlMVVJFIiwic2V0IiwicGF0aCIsIkxPR19JTl9TVUNDRVNTIiwiY29uc29sZSIsImxvZyIsInNpZ25VcEFQSSIsInNpZ25VcCIsIkRVUExJQ0FURSIsIlNJR05fVVBfRkFJTF9EVVBMSUNBVEUiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJsb2dvdXQiLCJyZW1vdmUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2FkTXlMaWtlVW5saWtlSW5mb0FQSSIsImxvYWRNeUxpa2VVbmxpa2VJbmZvIiwiZm9sbG93QVBJIiwiZm9sbG93IiwiZGVsYXkiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwidW5Gb2xsb3dBUEkiLCJ1bmZvbGxvdyIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwid2F0Y2hMb2FkTGlrZVVubGlrZUluZm8iLCJ0YWtlTGF0ZXN0IiwiU0VUX0xJS0VfVU5MSUtFX0lORk9fUkVRVVNFVCIsIndhdGNoTG9hZE15SW5mbyIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwid2F0Y2hGb2xsb3ciLCJGT0xMT1dfUkVRVUVTVCIsIndhdGNoVW5mb2xsb3ciLCJVTkZPTExPV19SRVFVRVNUIiwid2F0Y2hMb2dJbiIsIkxPR19JTl9SRVFVRVNUIiwid2F0Y2hMb2dPdXQiLCJMT0dfT1VUX1JFUVVFU1QiLCJ3YXRjaFNpZ25VcCIsIlNJR05fVVBfUkVRVUVTVCIsInVzZXJTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQW9CMkIsRUFBRDs7QUFDMUIsSUFBSUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLDBEQUFELENBQWpCOztBQUNBO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLElBQUlDLHdEQUFKLEVBQWhCOztBQUVBLFNBQVNDLGFBQVQsR0FBeUI7QUFDckIsUUFBTUMsV0FBVyxHQUFHSCxPQUFPLENBQUNJLEdBQVIsQ0FBWSxhQUFaLENBQXBCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHTCxPQUFPLENBQUNJLEdBQVIsQ0FBWSxXQUFaLENBQWxCO0FBQ0EsUUFBTUUsSUFBSSxHQUFHO0FBQ1RDLFNBQUssRUFBRUY7QUFERSxHQUFiO0FBSUEsU0FBT0csNENBQUssQ0FBQ0MsSUFBTixDQUFXLGNBQVgsRUFBMkJILElBQTNCLEVBQWdDO0FBQ25DSSxXQUFPLEVBQUM7QUFDSix1QkFBa0IsVUFBU1AsV0FBWSxFQURuQztBQUVKLHNCQUFnQjtBQUZaO0FBRDJCLEdBQWhDLENBQVA7QUFNSDs7QUFFRCxVQUFVUSxVQUFWLENBQXFCQyxNQUFyQixFQUE2QjtBQUN6QixNQUFJO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNaLGFBQUQsQ0FBM0I7O0FBQ0EsUUFBR1csUUFBUSxDQUFDUCxJQUFULElBQWlCLEVBQXBCLEVBQXVCO0FBQ25CLFlBQU1TLDhEQUFHLENBQUM7QUFDTkMsWUFBSSxFQUFFQyxtRUFEQTtBQUVOWCxZQUFJLEVBQUU7QUFDRlksaUJBQU8sRUFBR0wsUUFB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QUFELENBREUsRUFFTmMsK0RBQUksQ0FBQ2QsZUFBRCxDQUZFLEVBR05jLCtEQUFJLENBQUNaLFdBQUQsQ0FIRSxFQUlOWSwrREFBSSxDQUFDVixhQUFELENBSkUsRUFLTlUsK0RBQUksQ0FBQ1IsVUFBRCxDQUxFLEVBTU5RLCtEQUFJLENBQUNOLFdBQUQsQ0FORSxFQU9OTSwrREFBSSxDQUFDSixXQUFELENBUEUsQ0FBRCxDQUFUO0FBU0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMzdhYTI4ZDFjZTA4NDI4N2FhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIGRlbGF5LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fRkFJTFVSRSwgXHJcbiAgICBMT0dfSU5fUkVRVUVTVCwgXHJcbiAgICBMT0dfSU5fU1VDQ0VTUywgXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsIFxyXG4gICAgTE9HX09VVF9SRVFVRVNULCBcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSwgXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsIFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULCBcclxuICAgIEZPTExPV19SRVFVRVNULCBcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsIFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsIFxyXG4gICAgRk9MTE9XX1NVQ0NFU1MsIFxyXG4gICAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFLFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgIExPQURfTVlfSU5GT19GQUlMXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtgYFxyXG52YXIgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbmltcG9ydCB7IHdhcm5pbmdNc2cgfSBmcm9tIFwiLi4vdXRpbHMvc3dlZXRBbGVydFV0aWxzXCI7XHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBlbWFpbDogdXNlckVtYWlsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL21lbWJlcicsIGRhdGEse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0SWRzIDogcmVzcG9uc2UuZGF0YS5yZXN1bHQucG9zdER0b0lkcyxcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJJZCA6IHJlc3BvbnNlLmRhdGEucmVzdWx0LmlkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09IDQwMSl7XHJcbiAgICAgICAgICAgIHdhcm5pbmdNc2coXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukLlwiKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBsZXQgYmFzZTY0UGF5bG9hZCA9IHJlc3VsdC5kYXRhLmFjY2Vzc1Rva2VuLnNwbGl0KCcuJylbMV07IC8vdmFsdWUgMCAtPiBoZWFkZXIsIDEgLT4gcGF5bG9hZCwgMiAtPiBWRVJJRlkgU0lHTkFUVVJFIHZhciBwYXlsb2FkID0gQnVmZmVyLmZyb20oYmFzZTY0UGF5bG9hZCwgJ2Jhc2U2NCcpOyB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShwYXlsb2FkLnRvU3RyaW5nKCkpIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBwYXlsb2FkID0gQnVmZmVyLmZyb20oYmFzZTY0UGF5bG9hZCwgJ2Jhc2U2NCcpOyBcclxuICAgICAgICAgICAgLy8gbGV0IHBheWxvYWRSZXN1bHQgPSBKU09OLnBhcnNlKHBheWxvYWQudG9TdHJpbmcoKSk7IFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXlsb2FkUmVzdWx0KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJhY2Nlc3NUb2tlblwiLCByZXN1bHQuZGF0YS5hY2Nlc3NUb2tlbix7IHBhdGg6ICcvJyB9KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJyZWZyZXNoVG9rZW5cIiwgcmVzdWx0LmRhdGEuYWNjZXNzVG9rZW4seyBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvb2tpZXMuc2V0KFwibWVtYmVySWRcIiwgcGF5bG9hZFJlc3VsdC5zdWIsIHtwYXRoOicvJ30pO1xyXG4gICAgICAgICAgICBjb29raWVzLnNldChcInVzZXJFbWFpbFwiLCBhY3Rpb24uZGF0YS5lbWFpbCk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSA6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtwb3N0SWRzOnJlc3BvbnNlLmRhdGEucmVzdWx0LnBvc3REdG9JZHN9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdHlwZTogU0VUX0xJS0VfVU5MSUtFX0lORk9fUkVRVVNFVCxcclxuICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiBhY3Rpb24uZGF0YS5lbWFpbFxyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgd2FybmluZ01zZyhcIuuhnOq3uOyduOyXkCDsi6TtjKjtlojsirXri4jri6QhXCIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvc2lnbnVwJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gRFVQTElDQVRFKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTF9EVVBMSUNBVEUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKCdhY2Nlc3NUb2tlbicpO1xyXG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKCdyZWZyZXNoVG9rZW4nKTtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgndXNlckVtYWlsJyk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15TGlrZVVubGlrZUluZm9BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL2F1dGgvc2lnbnVwJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlMaWtlVW5saWtlSW5mbyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlMaWtlVW5saWtlSW5mb0FQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICBpZihyZXN1bHQuZGF0YS5zdGF0dXMgPT09IERVUExJQ0FURSl7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZExpa2VVbmxpa2VJbmZvKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNFVF9MSUtFX1VOTElLRV9JTkZPX1JFUVVTRVQsIGxvYWRNeUxpa2VVbmxpa2VJbmZvKTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICAvLyB5aWVsZCB0YWtlRXZlcnkoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ291dCk7IC8vIOyXrOufrOuyiCDtgbTrpq3tlbTrj4Qg6re466eM7YG8IOydkeuLteydtCDqsJBcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dvdXQpOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbiAgICAvLyB5aWVsZCB0aHJvdHRsZSgnTE9HX09VVF9SRVFVUkVTVCcsIGxvZ291dCwgMTAwMDApOyAvLyDslrzrp4jrj5nslYgg7ZWc67KI66eMIOyalOyyreydhCDrs7TrgrTrj4TroZ0g7KCc7ZWcIOqwgOuKpVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==