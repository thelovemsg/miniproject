webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


 // import Axios from 'axios';
// import qs from 'query-string';




const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_3__["default"]();

function addPostAPI(data) {
  const accessToken = cookies.get("accessToken");
  const userEmail = cookies.get("userEmail");
  const newObj = {
    description: data,
    email: userEmail
  };
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/auth/post', newObj, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  });
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: result.data.postId
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_FAILURE"],
      data: error.data
    });
  }
}

function likePostAPI(data) {
  const accessToken = cookies.get("accessToken");
  const userEmail = cookies.get("userEmail");
  const newObj = {
    email: userEmail
  };
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(`/auth/post/${data}/like`, newObj, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, 1);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_SUCCESS"],
      data: result.data.result
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_FAILURE"],
      data: error.data
    });
  }
}

function unlikePostAPI(data) {
  const accessToken = cookies.get("accessToken");
  const userEmail = cookies.get("userEmail");
  const newObj = {
    email: userEmail
  };
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/auth/post/${data}/like`, newObj, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, 1);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_SUCCESS"],
      data: result.data.result
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_FAILURE"],
      data: error.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/posts?page=${data.pageNumber}&size=${data.pageSize}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_SUCCESS"],
      data: result.data.result
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_FAILURE"],
      data: error.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post', data);
}

function* removePost(action) {
  try {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_FAILURE"],
      data: error.data
    });
  }
}

function addCommentAPI(data) {
  const accessToken = cookies.get("accessToken");
  const userEmail = cookies.get("userEmail");
  const newObj = {
    description: data.description,
    email: userEmail,
    postId: data.postId
  };
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/auth/comment', newObj, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  });
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    console.log(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_FAILURE"],
      data: error.data
    });
  }
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_REQUEST"], likePost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_REQUEST"], unlikePost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLeading"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"], addPost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_REQUEST"], loadPost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_REQUEST"], removePost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_REQUEST"], addComment); // 첫번째것만 하고 싶으면 takeLeading
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJuZXdPYmoiLCJkZXNjcmlwdGlvbiIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsImFkZFBvc3QiLCJhY3Rpb24iLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwidHlwZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsInBvc3RJZCIsImVycm9yIiwiQUREX1BPU1RfRkFJTFVSRSIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RBUEkiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJsb2FkUG9zdCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImRlbGF5IiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsImFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiY29uc29sZSIsImxvZyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJ3YXRjaExpa2VQb3N0IiwidGFrZUxhdGVzdCIsIkxJS0VfUE9TVF9SRVFVRVNUIiwid2F0Y2hVbmxpa2VQb3N0IiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIndhdGNoQWRkUG9zdCIsInRha2VMZWFkaW5nIiwiQUREX1BPU1RfUkVRVUVTVCIsIndhdGNoTG9hZFBvc3QiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIndhdGNoUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwicG9zdFNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUNBO0FBc0JBO0FBQ0EsTUFBTUEsT0FBTyxHQUFHLElBQUlDLHdEQUFKLEVBQWhCOztBQUNBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLFFBQU1DLFdBQVcsR0FBR0osT0FBTyxDQUFDSyxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR04sT0FBTyxDQUFDSyxHQUFSLENBQVksV0FBWixDQUFsQjtBQUNBLFFBQU1FLE1BQU0sR0FBRztBQUNYQyxlQUFXLEVBQUdMLElBREg7QUFFWE0sU0FBSyxFQUFHSDtBQUZHLEdBQWY7QUFJQSxTQUFPSSw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QkosTUFBekIsRUFBZ0M7QUFDbkNLLFdBQU8sRUFBQztBQUNKLHVCQUFrQixVQUFTUixXQUFZLEVBRG5DO0FBRUosc0JBQWdCO0FBRlo7QUFEMkIsR0FBaEMsQ0FBUDtBQU1IOztBQUVELFVBQVVTLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCLE1BQUk7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2QsVUFBRCxFQUFhWSxNQUFNLENBQUNYLElBQXBCLENBQXpCO0FBQ0EsVUFBTWMsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVDLCtEQURBO0FBRU5oQixVQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFGUCxLQUFELENBQVQ7QUFJQSxVQUFNYyw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUUsNkRBREE7QUFFTmpCLFVBQUksRUFBRVksTUFBTSxDQUFDWixJQUFQLENBQVlrQjtBQUZaLEtBQUQsQ0FBVDtBQUlILEdBVkQsQ0FVRSxPQUFPQyxLQUFQLEVBQWM7QUFDWixVQUFNTCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUssK0RBREE7QUFFTnBCLFVBQUksRUFBRW1CLEtBQUssQ0FBQ25CO0FBRk4sS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTcUIsV0FBVCxDQUFxQnJCLElBQXJCLEVBQTJCO0FBQ3ZCLFFBQU1DLFdBQVcsR0FBR0osT0FBTyxDQUFDSyxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR04sT0FBTyxDQUFDSyxHQUFSLENBQVksV0FBWixDQUFsQjtBQUNBLFFBQU1FLE1BQU0sR0FBRztBQUNYRSxTQUFLLEVBQUdIO0FBREcsR0FBZjtBQUdBLFNBQU9JLDRDQUFLLENBQUNlLEtBQU4sQ0FBYSxjQUFhdEIsSUFBSyxPQUEvQixFQUF1Q0ksTUFBdkMsRUFBOEM7QUFDakRLLFdBQU8sRUFBQztBQUNKLHVCQUFrQixVQUFTUixXQUFZLEVBRG5DO0FBRUosc0JBQWdCLGtCQUZaO0FBR0oscUNBQStCO0FBSDNCO0FBRHlDLEdBQTlDLENBQVA7QUFPSDs7QUFFRCxVQUFVc0IsUUFBVixDQUFtQlosTUFBbkIsRUFBMkI7QUFDdkIsTUFBSTtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDUSxXQUFELEVBQWMsQ0FBZCxDQUF6QjtBQUNBLFVBQU1QLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFUyxnRUFEQTtBQUVOeEIsVUFBSSxFQUFFWSxNQUFNLENBQUNaLElBQVAsQ0FBWVk7QUFGWixLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBT08sS0FBUCxFQUFjO0FBQ1osVUFBTUwsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVVLGdFQURBO0FBRU56QixVQUFJLEVBQUVtQixLQUFLLENBQUNuQjtBQUZOLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBUzBCLGFBQVQsQ0FBdUIxQixJQUF2QixFQUE2QjtBQUN6QixRQUFNQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLGFBQVosQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFdBQVosQ0FBbEI7QUFDQSxRQUFNRSxNQUFNLEdBQUc7QUFDWEUsU0FBSyxFQUFHSDtBQURHLEdBQWY7QUFHQSxTQUFPSSw0Q0FBSyxDQUFDb0IsTUFBTixDQUFjLGNBQWEzQixJQUFLLE9BQWhDLEVBQXdDSSxNQUF4QyxFQUErQztBQUNsREssV0FBTyxFQUFDO0FBQ0osdUJBQWtCLFVBQVNSLFdBQVksRUFEbkM7QUFFSixzQkFBZ0Isa0JBRlo7QUFHSixxQ0FBK0I7QUFIM0I7QUFEMEMsR0FBL0MsQ0FBUDtBQU9IOztBQUVELFVBQVUyQixVQUFWLENBQXFCakIsTUFBckIsRUFBNkI7QUFDekIsTUFBSTtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDYSxhQUFELEVBQWdCLENBQWhCLENBQXpCO0FBQ0EsVUFBTVosOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVjLGtFQURBO0FBRU43QixVQUFJLEVBQUVZLE1BQU0sQ0FBQ1osSUFBUCxDQUFZWTtBQUZaLEtBQUQsQ0FBVDtBQUlILEdBTkQsQ0FNRSxPQUFPTyxLQUFQLEVBQWM7QUFDWixVQUFNTCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRWUsa0VBREE7QUFFTjlCLFVBQUksRUFBRW1CLEtBQUssQ0FBQ25CO0FBRk4sS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTK0IsV0FBVCxDQUFxQi9CLElBQXJCLEVBQTJCO0FBQ3ZCLFNBQU9PLDRDQUFLLENBQUNMLEdBQU4sQ0FBVyxtQkFBa0JGLElBQUksQ0FBQ2dDLFVBQVcsU0FBUWhDLElBQUksQ0FBQ2lDLFFBQVMsRUFBbkUsQ0FBUDtBQUNIOztBQUVELFVBQVVDLFFBQVYsQ0FBbUJ2QixNQUFuQixFQUEyQjtBQUN2QixNQUFJO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNrQixXQUFELEVBQWNwQixNQUFNLENBQUNYLElBQXJCLENBQXpCO0FBQ0EsVUFBTWMsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVvQixnRUFEQTtBQUVObkMsVUFBSSxFQUFFWSxNQUFNLENBQUNaLElBQVAsQ0FBWVk7QUFGWixLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBT08sS0FBUCxFQUFjO0FBQ1osVUFBTUwsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVxQixnRUFEQTtBQUVOcEMsVUFBSSxFQUFFbUIsS0FBSyxDQUFDbkI7QUFGTixLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNxQyxhQUFULENBQXVCckMsSUFBdkIsRUFBNkI7QUFDekIsU0FBT08sNENBQUssQ0FBQ0MsSUFBTixDQUFXLFdBQVgsRUFBd0JSLElBQXhCLENBQVA7QUFDSDs7QUFFRCxVQUFVc0MsVUFBVixDQUFxQjNCLE1BQXJCLEVBQTZCO0FBQ3pCLE1BQUk7QUFFQTRCLG9FQUFLLENBQUMsSUFBRCxDQUFMO0FBQ0EsVUFBTUMsRUFBRSxHQUFHQyw4Q0FBTyxDQUFDQyxRQUFSLEVBQVg7QUFDQSxVQUFNNUIsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUU0QixrRUFEQTtBQUVOM0MsVUFBSSxFQUFFVyxNQUFNLENBQUNYO0FBRlAsS0FBRCxDQUFUO0FBSUEsVUFBTWMsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUU2QixnRUFEQTtBQUVONUMsVUFBSSxFQUFFVyxNQUFNLENBQUNYO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FaRCxDQVlFLE9BQU9tQixLQUFQLEVBQWM7QUFDWixVQUFNTCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRThCLGtFQURBO0FBRU43QyxVQUFJLEVBQUVtQixLQUFLLENBQUNuQjtBQUZOLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBUzhDLGFBQVQsQ0FBdUI5QyxJQUF2QixFQUE2QjtBQUN6QixRQUFNQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLGFBQVosQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFdBQVosQ0FBbEI7QUFDQSxRQUFNRSxNQUFNLEdBQUc7QUFDWEMsZUFBVyxFQUFHTCxJQUFJLENBQUNLLFdBRFI7QUFFWEMsU0FBSyxFQUFHSCxTQUZHO0FBR1hlLFVBQU0sRUFBR2xCLElBQUksQ0FBQ2tCO0FBSEgsR0FBZjtBQUtBLFNBQU9YLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxlQUFYLEVBQTRCSixNQUE1QixFQUFvQztBQUNuQ0ssV0FBTyxFQUFDO0FBQ0osdUJBQWtCLFVBQVNSLFdBQVksRUFEbkM7QUFFSixzQkFBZ0I7QUFGWjtBQUQyQixHQUFwQyxDQUFQO0FBT0g7O0FBRUQsVUFBVThDLFVBQVYsQ0FBcUJwQyxNQUFyQixFQUE2QjtBQUN6QixNQUFJO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNpQyxhQUFELEVBQWdCbkMsTUFBTSxDQUFDWCxJQUF2QixDQUF6QjtBQUNBLFVBQU1jLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFaUMsa0VBREE7QUFFTmhELFVBQUksRUFBRVksTUFBTSxDQUFDWjtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBTkQsQ0FNRSxPQUFPbUIsS0FBUCxFQUFjO0FBQ1o4QixXQUFPLENBQUNDLEdBQVIsQ0FBWS9CLEtBQVo7QUFDQSxVQUFNTCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRW9DLGtFQURBO0FBRU5uRCxVQUFJLEVBQUVtQixLQUFLLENBQUNuQjtBQUZOLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsVUFBVW9ELGFBQVYsR0FBeUI7QUFDckIsUUFBTUMscUVBQVUsQ0FBQ0MsZ0VBQUQsRUFBb0IvQixRQUFwQixDQUFoQixDQURxQixDQUMwQjtBQUNsRDs7QUFFRCxVQUFVZ0MsZUFBVixHQUEyQjtBQUN2QixRQUFNRixxRUFBVSxDQUFDRyxrRUFBRCxFQUFzQjVCLFVBQXRCLENBQWhCLENBRHVCLENBQzRCO0FBQ3REOztBQUdELFVBQVU2QixZQUFWLEdBQXdCO0FBQ3BCLFFBQU1DLHNFQUFXLENBQUNDLCtEQUFELEVBQW1CakQsT0FBbkIsQ0FBakIsQ0FEb0IsQ0FDMEI7QUFDakQ7O0FBRUQsVUFBVWtELGFBQVYsR0FBeUI7QUFDckIsUUFBTVAscUVBQVUsQ0FBQ1EsZ0VBQUQsRUFBb0IzQixRQUFwQixDQUFoQixDQURxQixDQUMwQjtBQUNsRDs7QUFFRCxVQUFVNEIsZUFBVixHQUEyQjtBQUN2QixRQUFNVCxxRUFBVSxDQUFDVSxrRUFBRCxFQUFzQnpCLFVBQXRCLENBQWhCLENBRHVCLENBQzRCO0FBQ3REOztBQUVELFVBQVUwQixlQUFWLEdBQTJCO0FBQ3ZCLFFBQU1YLHFFQUFVLENBQUNZLGtFQUFELEVBQXNCbEIsVUFBdEIsQ0FBaEIsQ0FEdUIsQ0FDNEI7QUFDdEQ7O0FBRWMsVUFBVW1CLFFBQVYsR0FBb0I7QUFDL0IsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDaEIsYUFBRCxDQURFLEVBRU5nQiwrREFBSSxDQUFDYixlQUFELENBRkUsRUFHTmEsK0RBQUksQ0FBQ1IsYUFBRCxDQUhFLEVBSU5RLCtEQUFJLENBQUNYLFlBQUQsQ0FKRSxFQUtOVywrREFBSSxDQUFDTixlQUFELENBTEUsRUFNTk0sK0RBQUksQ0FBQ0osZUFBRCxDQU5FLENBQUQsQ0FBVDtBQVFIO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYTNjOWZjYmRhZTdmYTllYjQ0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsYXksIGZvcmssIGFsbCwgdGFrZUxhdGVzdCwgcHV0LCBjYWxsLCB0YWtlTGVhZGluZywgdGhyb3R0bGUsIGRlYm91bmNlLCB0YWtlfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLCBcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsIFxyXG4gICAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgQUREX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLCBcclxuICAgIEFERF9QT1NUX1RPX01FLCBcclxuICAgIGdlbmVyYXRlRHVtbXlQb3N0LCBcclxuICAgIExJS0VfUE9TVF9GQUlMVVJFLCBcclxuICAgIExJS0VfUE9TVF9SRVFVRVNULCBcclxuICAgIExJS0VfUE9TVF9TVUNDRVNTLCBcclxuICAgIExPQURfUE9TVF9GQUlMVVJFLCBcclxuICAgIExPQURfUE9TVF9SRVFVRVNULCBcclxuICAgIExPQURfUE9TVF9TVUNDRVNTLCBcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTLCBcclxuICAgIFVOTElLRV9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIFVOTElLRV9QT1NUX1NVQ0NFU1NcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogZGF0YSxcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL3Bvc3QnLCBuZXdPYmose1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEucG9zdElkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbFxyXG4gICAgfTtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL2F1dGgvcG9zdC8ke2RhdGF9L2xpa2VgLCBuZXdPYmose1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCAxKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEucmVzdWx0LFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbFxyXG4gICAgfTtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9hdXRoL3Bvc3QvJHtkYXRhfS9saWtlYCwgbmV3T2JqLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIDEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnJlc3VsdCxcclxuICAgICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0cz9wYWdlPSR7ZGF0YS5wYWdlTnVtYmVyfSZzaXplPSR7ZGF0YS5wYWdlU2l6ZX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnJlc3VsdCxcclxuICAgICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbCxcclxuICAgICAgICBwb3N0SWQgOiBkYXRhLnBvc3RJZCxcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9jb21tZW50JywgbmV3T2JqLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGVhZGluZyhBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSwgXHJcbiAgICBdKVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=