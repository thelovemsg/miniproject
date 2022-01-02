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
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJuZXdPYmoiLCJkZXNjcmlwdGlvbiIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsImFkZFBvc3QiLCJhY3Rpb24iLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwidHlwZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsInBvc3RJZCIsImVycm9yIiwiQUREX1BPU1RfRkFJTFVSRSIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RBUEkiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJsb2FkUG9zdCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImRlbGF5IiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsImFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiY29uc29sZSIsImxvZyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJ3YXRjaExpa2VQb3N0IiwidGFrZUxhdGVzdCIsIkxJS0VfUE9TVF9SRVFVRVNUIiwid2F0Y2hVbmxpa2VQb3N0IiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIndhdGNoQWRkUG9zdCIsInRha2VMZWFkaW5nIiwiQUREX1BPU1RfUkVRVUVTVCIsIndhdGNoTG9hZFBvc3QiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIndhdGNoUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwicG9zdFNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUNBO0FBc0JBO0FBQ0EsTUFBTUEsT0FBTyxHQUFHLElBQUlDLHdEQUFKLEVBQWhCOztBQUNBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLFFBQU1DLFdBQVcsR0FBR0osT0FBTyxDQUFDSyxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR04sT0FBTyxDQUFDSyxHQUFSLENBQVksV0FBWixDQUFsQjtBQUNBLFFBQU1FLE1BQU0sR0FBRztBQUNYQyxlQUFXLEVBQUdMLElBREg7QUFFWE0sU0FBSyxFQUFHSDtBQUZHLEdBQWY7QUFJQSxTQUFPSSw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QkosTUFBekIsRUFBZ0M7QUFDbkNLLFdBQU8sRUFBQztBQUNKLHVCQUFrQixVQUFTUixXQUFZLEVBRG5DO0FBRUosc0JBQWdCO0FBRlo7QUFEMkIsR0FBaEMsQ0FBUDtBQU1IOztBQUVELFVBQVVTLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCLE1BQUk7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2QsVUFBRCxFQUFhWSxNQUFNLENBQUNYLElBQXBCLENBQXpCO0FBQ0EsVUFBTWMsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVDLCtEQURBO0FBRU5oQixVQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFGUCxLQUFELENBQVQ7QUFJQSxVQUFNYyw4REFBRyxDQUFDO0FBQ05DLFVBQUks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Q0FBaEIsQ0FEdUIsQ0FDNEI7QUFDdEQ7O0FBR0QsVUFBVTZCLFlBQVYsR0FBd0I7QUFDcEIsUUFBTUMsc0VBQVcsQ0FBQ0MsK0RBQUQsRUFBbUJqRCxPQUFuQixDQUFqQixDQURvQixDQUMwQjtBQUNqRDs7QUFFRCxVQUFVa0QsYUFBVixHQUF5QjtBQUNyQixRQUFNUCxxRUFBVSxDQUFDUSxnRUFBRCxFQUFvQjNCLFFBQXBCLENBQWhCLENBRHFCLENBQzBCO0FBQ2xEOztBQUVELFVBQVU0QixlQUFWLEdBQTJCO0FBQ3ZCLFFBQU1ULHFFQUFVLENBQUNVLGtFQUFELEVBQXNCekIsVUFBdEIsQ0FBaEIsQ0FEdUIsQ0FDNEI7QUFDdEQ7O0FBRUQsVUFBVTBCLGVBQVYsR0FBMkI7QUFDdkIsUUFBTVgscUVBQVUsQ0FBQ1ksa0VBQUQsRUFBc0JsQixVQUF0QixDQUFoQixDQUR1QixDQUM0QjtBQUN0RDs7QUFFYyxVQUFVbUIsUUFBVixHQUFvQjtBQUMvQixRQUFNQyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNoQixhQUFELENBREUsRUFFTmdCLCtEQUFJLENBQUNiLGVBQUQsQ0FGRSxFQUdOYSwrREFBSSxDQUFDUixhQUFELENBSEUsRUFJTlEsK0RBQUksQ0FBQ1gsWUFBRCxDQUpFLEVBS05XLCtEQUFJLENBQUNOLGVBQUQsQ0FMRSxFQU1OTSwrREFBSSxDQUFDSixlQUFELENBTkUsQ0FBRCxDQUFUO0FBUUg7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhlNWVkNDA0NTVkZmFkNzgxNzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWxheSwgZm9yaywgYWxsLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwsIHRha2VMZWFkaW5nLCB0aHJvdHRsZSwgZGVib3VuY2UsIHRha2V9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsIFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCwgXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULCBcclxuICAgIEFERF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgQUREX1BPU1RfVE9fTUUsIFxyXG4gICAgZ2VuZXJhdGVEdW1teVBvc3QsIFxyXG4gICAgTElLRV9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsIFxyXG4gICAgTElLRV9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgTE9BRF9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgTE9BRF9QT1NUX1JFUVVFU1QsIFxyXG4gICAgTE9BRF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULCBcclxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgVU5MSUtFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgVU5MSUtFX1BPU1RfU1VDQ0VTU1xyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBkYXRhLFxyXG4gICAgICAgIGVtYWlsIDogdXNlckVtYWlsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvcG9zdCcsIG5ld09iaix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5wb3N0SWQsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIGVtYWlsIDogdXNlckVtYWlsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvYXV0aC9wb3N0LyR7ZGF0YX0vbGlrZWAsIG5ld09iaix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCAxKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEucmVzdWx0LFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbFxyXG4gICAgfTtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9hdXRoL3Bvc3QvJHtkYXRhfS9saWtlYCwgbmV3T2JqLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIDEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnJlc3VsdCxcclxuICAgICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0cz9wYWdlPSR7ZGF0YS5wYWdlTnVtYmVyfSZzaXplPSR7ZGF0YS5wYWdlU2l6ZX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnJlc3VsdCxcclxuICAgICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbCxcclxuICAgICAgICBwb3N0SWQgOiBkYXRhLnBvc3RJZCxcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9jb21tZW50JywgbmV3T2JqLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGVhZGluZyhBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSwgXHJcbiAgICBdKVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=