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
      data: {
        id: result.data.postId,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: result.data.postId
    });
  } catch (error) {
    console.log(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_FAILURE"],
      data: error.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/posts');
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI);
    console.log(result);
    console.log("result.data :: ", result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_SUCCESS"],
      data: result.data.result
    });
  } catch (error) {
    console.log(error);
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
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post/${data.postId}/comment', data);
}

function* addComment(action) {
  try {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(addPostAPI, action.data);

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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"], addPost); // 첫번째것만 하고 싶으면 takeLeading
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJuZXdPYmoiLCJkZXNjcmlwdGlvbiIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsImFkZFBvc3QiLCJhY3Rpb24iLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwidHlwZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJpZCIsInBvc3RJZCIsImNvbnRlbnQiLCJBRERfUE9TVF9UT19NRSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJsb2FkUG9zdEFQSSIsImxvYWRQb3N0IiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiZGVsYXkiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsImFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwid2F0Y2hMb2FkUG9zdCIsIkxPQURfUE9TVF9SRVFVRVNUIiwid2F0Y2hSZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIndhdGNoQWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJwb3N0U2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBO0FBQ0E7QUFn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Q0FEdUIsQ0FDNEI7QUFDdEQ7O0FBRUQsVUFBVWtCLGVBQVYsR0FBMkI7QUFDdkIsUUFBTU4scUVBQVUsQ0FBQ08sa0VBQUQsRUFBc0JYLFVBQXRCLENBQWhCLENBRHVCLENBQzRCO0FBQ3REOztBQUVjLFVBQVVZLFFBQVYsR0FBb0I7QUFDL0IsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDUixhQUFELENBREUsRUFFTlEsK0RBQUksQ0FBQ1gsWUFBRCxDQUZFLEVBR05XLCtEQUFJLENBQUNOLGVBQUQsQ0FIRSxFQUlOTSwrREFBSSxDQUFDSixlQUFELENBSkUsQ0FBRCxDQUFUO0FBTUg7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZjODRhYjFkZDg4M2Y2OWY2NjIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWxheSwgZm9yaywgYWxsLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGx9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsIFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCwgXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULCBcclxuICAgIEFERF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgQUREX1BPU1RfVE9fTUUsIFxyXG4gICAgZ2VuZXJhdGVEdW1teVBvc3QsIFxyXG4gICAgTE9BRF9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgTE9BRF9QT1NUX1JFUVVFU1QsIFxyXG4gICAgTE9BRF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULCBcclxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MgXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGRhdGEsXHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWxcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9wb3N0JywgbmV3T2JqLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogcmVzdWx0LmRhdGEucG9zdElkLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnBvc3RJZCxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9hcGkvcG9zdHMnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0LmRhdGEgOjogXCIsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEucmVzdWx0LFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IFxyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnQnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLCBcclxuICAgIF0pXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==