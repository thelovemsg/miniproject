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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJqd3QiLCJyZXF1aXJlIiwiY29va2llcyIsIkNvb2tpZXMiLCJsb2FkTXlJbmZvQVBJIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJkYXRhIiwiZW1haWwiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwibG9hZE15SW5mbyIsImFjdGlvbiIsInJlc3BvbnNlIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJ0eXBlIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJwb3N0SWRzIiwicmVzdWx0IiwicG9zdER0b0lkcyIsIm1lbWJlcklkIiwiaWQiLCJlcnJvciIsIkxPQURfTVlfSU5GT19GQUlMIiwibG9nSW5BUEkiLCJsb2dpbiIsInN0YXR1cyIsIndhcm5pbmdNc2ciLCJMT0dfSU5fRkFJTFVSRSIsImJhc2U2NFBheWxvYWQiLCJzcGxpdCIsInBheWxvYWQiLCJCdWZmZXIiLCJmcm9tIiwicGF5bG9hZFJlc3VsdCIsIkpTT04iLCJwYXJzZSIsInRvU3RyaW5nIiwic2V0IiwicGF0aCIsIkxPR19JTl9TVUNDRVNTIiwic3ViIiwibG9nb3V0IiwicmVtb3ZlIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwic2lnblVwIiwiRFVQTElDQVRFIiwiU0lHTl9VUF9GQUlMX0RVUExJQ0FURSIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvd0FQSSIsImZvbGxvdyIsImRlbGF5IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuRm9sbG93QVBJIiwidW5mb2xsb3ciLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIndhdGNoTG9hZE15SW5mbyIsInRha2VMYXRlc3QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIndhdGNoRm9sbG93IiwiRk9MTE9XX1JFUVVFU1QiLCJ3YXRjaFVuZm9sbG93IiwiVU5GT0xMT1dfUkVRVUVTVCIsIndhdGNoTG9nSW4iLCJMT0dfSU5fUkVRVUVTVCIsIndhdGNoTG9nT3V0IiwiTE9HX09VVF9SRVFVRVNUIiwid2F0Y2hTaWduVXAiLCJTSUdOX1VQX1JFUVVFU1QiLCJ1c2VyU2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFvQjJCLEVBQUQ7O0FBQzFCLElBQUlBLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUFqQjs7QUFDQTtBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjs7QUFFQSxTQUFTQyxhQUFULEdBQXlCO0FBQ3JCLFFBQU1DLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0wsT0FBTyxDQUFDSSxHQUFSLENBQVksV0FBWixDQUFsQjtBQUNBLFFBQU1FLElBQUksR0FBRztBQUNUQyxTQUFLLEVBQUVGO0FBREUsR0FBYjtBQUlBLFNBQU9HLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxjQUFYLEVBQTJCSCxJQUEzQixFQUFnQztBQUNuQ0ksV0FBTyxFQUFDO0FBQ0osdUJBQWtCLFVBQVNQLFdBQVksRUFEbkM7QUFFSixzQkFBZ0I7QUFGWjtBQUQyQixHQUFoQyxDQUFQO0FBTUg7O0FBRUQsVUFBVVEsVUFBVixDQUFxQkMsTUFBckIsRUFBNkI7QUFDekIsTUFBSTtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDWixhQUFELENBQTNCO0FBQ0FhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJILFFBQTVCOztBQUNBLFFBQUdBLFFBQVEsQ0FBQ1AsSUFBVCxJQUFpQixFQUFwQixFQUF1QjtBQUNuQixZQUFNVyw4REFBRyxDQUFDO0FBQ05DLFlBQUksRUFBRUMsbUVBREE7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QUFVd0QsV0FBVixHQUF1QjtBQUNuQixRQUFNRixxRUFBVSxDQUFDRyw2REFBRCxFQUFpQlosTUFBakIsQ0FBaEIsQ0FEbUIsQ0FDdUI7QUFDN0M7O0FBRUQsVUFBVWEsYUFBVixHQUF5QjtBQUNyQixRQUFNSixxRUFBVSxDQUFDSywrREFBRCxFQUFtQlQsUUFBbkIsQ0FBaEIsQ0FEcUIsQ0FDeUI7QUFDakQ7O0FBRUQsVUFBVVUsVUFBVixHQUFzQjtBQUNsQixRQUFNTixxRUFBVSxDQUFDTyw2REFBRCxFQUFpQjVDLEtBQWpCLENBQWhCLENBRGtCLENBQ3VCO0FBQzVDOztBQUVELFVBQVU2QyxXQUFWLEdBQXVCO0FBQ25CO0FBQ0EsUUFBTVIscUVBQVUsQ0FBQ1MsOERBQUQsRUFBa0I3QixNQUFsQixDQUFoQixDQUZtQixDQUV3QjtBQUMzQztBQUNIOztBQUVELFVBQVU4QixXQUFWLEdBQXVCO0FBQ25CLFFBQU1WLHFFQUFVLENBQUNXLDhEQUFELEVBQWtCMUIsTUFBbEIsQ0FBaEIsQ0FEbUIsQ0FDd0I7QUFDOUM7O0FBRWMsVUFBVTJCLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDZixlQUFELENBREUsRUFFTmUsK0RBQUksQ0FBQ2YsZUFBRCxDQUZFLEVBR05lLCtEQUFJLENBQUNaLFdBQUQsQ0FIRSxFQUlOWSwrREFBSSxDQUFDVixhQUFELENBSkUsRUFLTlUsK0RBQUksQ0FBQ1IsVUFBRCxDQUxFLEVBTU5RLCtEQUFJLENBQUNOLFdBQUQsQ0FORSxFQU9OTSwrREFBSSxDQUFDSixXQUFELENBUEUsQ0FBRCxDQUFUO0FBU0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lZDQ5MjdkMWUxMGE5ZmU4N2EyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIGRlbGF5LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fRkFJTFVSRSwgXHJcbiAgICBMT0dfSU5fUkVRVUVTVCwgXHJcbiAgICBMT0dfSU5fU1VDQ0VTUywgXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsIFxyXG4gICAgTE9HX09VVF9SRVFVRVNULCBcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSwgXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsIFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULCBcclxuICAgIEZPTExPV19SRVFVRVNULCBcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsIFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsIFxyXG4gICAgRk9MTE9XX1NVQ0NFU1MsIFxyXG4gICAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFLFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgIExPQURfTVlfSU5GT19GQUlMXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtgYFxyXG52YXIgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbmltcG9ydCB7IHdhcm5pbmdNc2cgfSBmcm9tIFwiLi4vdXRpbHMvc3dlZXRBbGVydFV0aWxzXCI7XHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBlbWFpbDogdXNlckVtYWlsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL21lbWJlcicsIGRhdGEse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgOjogXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdElkcyA6IHJlc3BvbnNlLmRhdGEucmVzdWx0LnBvc3REdG9JZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVySWQgOiByZXNwb25zZS5kYXRhLnJlc3VsdC5pZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTCxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSA0MDEpe1xyXG4gICAgICAgICAgICB3YXJuaW5nTXNnKFwi66Gc6re47J247JeQIOyLpO2MqO2WiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGJhc2U2NFBheWxvYWQgPSByZXN1bHQuZGF0YS5hY2Nlc3NUb2tlbi5zcGxpdCgnLicpWzFdOyAvL3ZhbHVlIDAgLT4gaGVhZGVyLCAxIC0+IHBheWxvYWQsIDIgLT4gVkVSSUZZIFNJR05BVFVSRSB2YXIgcGF5bG9hZCA9IEJ1ZmZlci5mcm9tKGJhc2U2NFBheWxvYWQsICdiYXNlNjQnKTsgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UocGF5bG9hZC50b1N0cmluZygpKSBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBsZXQgcGF5bG9hZCA9IEJ1ZmZlci5mcm9tKGJhc2U2NFBheWxvYWQsICdiYXNlNjQnKTsgXHJcbiAgICAgICAgICAgIGxldCBwYXlsb2FkUmVzdWx0ID0gSlNPTi5wYXJzZShwYXlsb2FkLnRvU3RyaW5nKCkpOyBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF5bG9hZFJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNvb2tpZXMuc2V0KFwiYWNjZXNzVG9rZW5cIiwgcmVzdWx0LmRhdGEuYWNjZXNzVG9rZW4seyBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgICAgIGNvb2tpZXMuc2V0KFwicmVmcmVzaFRva2VuXCIsIHJlc3VsdC5kYXRhLmFjY2Vzc1Rva2VuLHsgcGF0aDogJy8nIH0pO1xyXG4gICAgICAgICAgICAvLyBjb29raWVzLnNldChcIm1lbWJlcklkXCIsIHBheWxvYWRSZXN1bHQuc3ViLCB7cGF0aDonLyd9KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJ1c2VyRW1haWxcIiwgYWN0aW9uLmRhdGEuZW1haWwpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7bWVtYmVySWQgOiBwYXlsb2FkUmVzdWx0LnN1Yn0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7cG9zdElkczpyZXNwb25zZS5kYXRhLnJlc3VsdC5wb3N0RHRvSWRzfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHdhcm5pbmdNc2coXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukIVwiKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIGxvZ291dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3JlZnJlc2hUb2tlbicpO1xyXG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKCd1c2VyRW1haWwnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL3NpZ251cCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICBpZihyZXN1bHQuZGF0YS5zdGF0dXMgPT09IERVUExJQ0FURSl7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7IC8v64+Z7Iuc7JeQIOyalOyyreydtCDsl6zrn6zrsogg65Ok7Ja07JqU66m0IOuniOyngOunieq6vOunjCDsi6TtlontlZzri6QuIOydkeuLteydhCDst6jshoztlZjsp4Ag7JqU7LKt7J2AIOy3qOyGjO2VmOyngCDslYrsnYxcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ2luKTsgLy8gTE9HX0lO7J20652864qUIGFjdGlvbuydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg66eQXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpe1xyXG4gICAgLy8geWllbGQgdGFrZUV2ZXJ5KCdMT0dfT1VUX1JFUVVFU1QnLCBsb2dvdXQpOyAvLyDsl6zrn6zrsogg7YG066at7ZW064+EIOq3uOunjO2BvCDsnZHri7XsnbQg6rCQXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nb3V0KTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG4gICAgLy8geWllbGQgdGhyb3R0bGUoJ0xPR19PVVRfUkVRVVJFU1QnLCBsb2dvdXQsIDEwMDAwKTsgLy8g7Ja866eI64+Z7JWIIO2VnOuyiOunjCDsmpTssq3snYQg67O064K064+E66GdIOygnO2VnCDqsIDriqVcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=