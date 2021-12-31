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
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(addPostAPI, action.data);

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
    console.log("result :: ", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_FAILURE"],
      data: error.data
    });
  }
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJuZXdPYmoiLCJkZXNjcmlwdGlvbiIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsImFkZFBvc3QiLCJhY3Rpb24iLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwidHlwZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsInBvc3RJZCIsImVycm9yIiwiQUREX1BPU1RfRkFJTFVSRSIsImxvYWRQb3N0QVBJIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwibG9hZFBvc3QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJkZWxheSIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX09GX01FIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZENvbW1lbnRBUEkiLCJhZGRDb21tZW50IiwiY29uc29sZSIsImxvZyIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxlYWRpbmciLCJBRERfUE9TVF9SRVFVRVNUIiwid2F0Y2hMb2FkUG9zdCIsInRha2VMYXRlc3QiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIndhdGNoUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwicG9zdFNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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O0FBQ0o7O0FBRUQsVUFBVTBDLFlBQVYsR0FBd0I7QUFDcEIsUUFBTUMsc0VBQVcsQ0FBQ0MsK0RBQUQsRUFBbUJsQyxPQUFuQixDQUFqQixDQURvQixDQUMwQjtBQUNqRDs7QUFFRCxVQUFVbUMsYUFBVixHQUF5QjtBQUNyQixRQUFNQyxxRUFBVSxDQUFDQyxnRUFBRCxFQUFvQnZCLFFBQXBCLENBQWhCLENBRHFCLENBQzBCO0FBQ2xEOztBQUVELFVBQVV3QixlQUFWLEdBQTJCO0FBQ3ZCLFFBQU1GLHFFQUFVLENBQUNHLGtFQUFELEVBQXNCckIsVUFBdEIsQ0FBaEIsQ0FEdUIsQ0FDNEI7QUFDdEQ7O0FBRUQsVUFBVXNCLGVBQVYsR0FBMkI7QUFDdkIsUUFBTUoscUVBQVUsQ0FBQ0ssa0VBQUQsRUFBc0JkLFVBQXRCLENBQWhCLENBRHVCLENBQzRCO0FBQ3REOztBQUVjLFVBQVVlLFFBQVYsR0FBb0I7QUFDL0IsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDVCxhQUFELENBREUsRUFFTlMsK0RBQUksQ0FBQ1osWUFBRCxDQUZFLEVBR05ZLCtEQUFJLENBQUNOLGVBQUQsQ0FIRSxFQUlOTSwrREFBSSxDQUFDSixlQUFELENBSkUsQ0FBRCxDQUFUO0FBTUg7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjEwNTE4ODI0YTIzMzk3M2JjMjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWxheSwgZm9yaywgYWxsLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwsIHRha2VMZWFkaW5nLCB0aHJvdHRsZSwgZGVib3VuY2UsIHRha2V9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsIFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCwgXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULCBcclxuICAgIEFERF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgQUREX1BPU1RfVE9fTUUsIFxyXG4gICAgZ2VuZXJhdGVEdW1teVBvc3QsIFxyXG4gICAgTE9BRF9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgTE9BRF9QT1NUX1JFUVVFU1QsIFxyXG4gICAgTE9BRF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULCBcclxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MgXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGRhdGEsXHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWxcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9wb3N0JywgbmV3T2JqLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnBvc3RJZCxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0cz9wYWdlPSR7ZGF0YS5wYWdlTnVtYmVyfSZzaXplPSR7ZGF0YS5wYWdlU2l6ZX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnJlc3VsdCxcclxuICAgICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuXHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWwsXHJcbiAgICAgICAgcG9zdElkIDogZGF0YS5wb3N0SWQsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvY29tbWVudCcsIG5ld09iaiwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IDo6IFwiLCByZXN1bHQpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxlYWRpbmcoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLCBcclxuICAgIF0pXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==