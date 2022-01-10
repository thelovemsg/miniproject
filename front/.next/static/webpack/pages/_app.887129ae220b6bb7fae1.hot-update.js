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
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  }).then(res => res.data);
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
  console.log("data :", data); // return axios.patch(`/auth/post/${data}/like`, newObj,{
  //     headers:{
  //         "Authorization": `Bearer ${accessToken}`,
  //         "Content-Type": "application/json",
  //     },
  //     withCredentials : true
  // });

  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/auth/post/${data}/like`, newObj, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    withCredentials: true
  });
}
/**
 * 그외에 좋아요 수를 보고 싶으면 수만 계산해서 가져오면 된다. 
 * 문제는 like를 클릭했는지, 안했는지 로그인 하기 전까지는 모른다는 점이다. 
 * 그러므로 로그인에 성공을 하면 게시글들을 보고 각각의 post에 대해 좋아요를 체크해줘야 한다. 
 */


function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_SUCCESS"],
      data: {
        postId: action.data,
        result: result.data
      }
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
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  });
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    console.log("after unlike post ... ", result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_SUCCESS"],
      data: {
        postId: action.data,
        result: result.data
      }
    });
  } catch (error) {
    console.log(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJuZXdPYmoiLCJkZXNjcmlwdGlvbiIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJhZGRQb3N0IiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJwb3N0SWQiLCJlcnJvciIsIkFERF9QT1NUX0ZBSUxVUkUiLCJsaWtlUG9zdEFQSSIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoQ3JlZGVudGlhbHMiLCJsaWtlUG9zdCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RBUEkiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJsb2FkUG9zdCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwid2F0Y2hMaWtlUG9zdCIsInRha2VMYXRlc3QiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIndhdGNoVW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGVhZGluZyIsIkFERF9QT1NUX1JFUVVFU1QiLCJ3YXRjaExvYWRQb3N0IiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwid2F0Y2hBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInBvc3RTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQXNCQTtBQUNBLE1BQU1BLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjs7QUFDQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN0QixRQUFNQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLGFBQVosQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFdBQVosQ0FBbEI7QUFDQSxRQUFNRSxNQUFNLEdBQUc7QUFDWEMsZUFBVyxFQUFHTCxJQURIO0FBRVhNLFNBQUssRUFBR0g7QUFGRyxHQUFmO0FBSUEsU0FBT0ksNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJKLE1BQXpCLEVBQWdDO0FBQ25DSyxXQUFPLEVBQUM7QUFDSix1QkFBa0IsVUFBU1IsV0FBWSxFQURuQztBQUVKLHNCQUFnQjtBQUZaO0FBRDJCLEdBQWhDLEVBS0pTLElBTEksQ0FLQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNYLElBTFosQ0FBUDtBQU1IOztBQUVELFVBQVVZLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCLE1BQUk7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2hCLFVBQUQsRUFBYWMsTUFBTSxDQUFDYixJQUFwQixDQUF6QjtBQUNBLFVBQU1nQiw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUMsK0RBREE7QUFFTmxCLFVBQUksRUFBRWMsTUFBTSxDQUFDZDtBQUZQLEtBQUQsQ0FB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LGVBQUQsQ0FMRSxFQU1OTSwrREFBSSxDQUFDSixlQUFELENBTkUsQ0FBRCxDQUFUO0FBUUg7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg4NzEyOWFlMjIwYjZiYjdmYWUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWxheSwgZm9yaywgYWxsLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwsIHRha2VMZWFkaW5nLCB0aHJvdHRsZSwgZGVib3VuY2UsIHRha2V9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsIFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCwgXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULCBcclxuICAgIEFERF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgQUREX1BPU1RfVE9fTUUsIFxyXG4gICAgZ2VuZXJhdGVEdW1teVBvc3QsIFxyXG4gICAgTElLRV9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsIFxyXG4gICAgTElLRV9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgTE9BRF9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgTE9BRF9QT1NUX1JFUVVFU1QsIFxyXG4gICAgTE9BRF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULCBcclxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgVU5MSUtFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgVU5MSUtFX1BPU1RfU1VDQ0VTU1xyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBkYXRhLFxyXG4gICAgICAgIGVtYWlsIDogdXNlckVtYWlsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvcG9zdCcsIG5ld09iaix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5wb3N0SWQsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIGVtYWlsIDogdXNlckVtYWlsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIDpcIiwgZGF0YSk7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MucGF0Y2goYC9hdXRoL3Bvc3QvJHtkYXRhfS9saWtlYCwgbmV3T2JqLHtcclxuICAgIC8vICAgICBoZWFkZXJzOntcclxuICAgIC8vICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgLy8gICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHdpdGhDcmVkZW50aWFscyA6IHRydWVcclxuICAgIC8vIH0pO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hdXRoL3Bvc3QvJHtkYXRhfS9saWtlYCwgbmV3T2JqLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyA6IHRydWVcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog6re47Jm47JeQIOyii+yVhOyalCDsiJjrpbwg67O06rOgIOyLtuycvOuptCDsiJjrp4wg6rOE7IKw7ZW07IScIOqwgOyguOyYpOuptCDrkJzri6QuIFxyXG4gKiDrrLjsoJzripQgbGlrZeulvCDtgbTrpq3tlojripTsp4AsIOyViO2WiOuKlOyngCDroZzqt7jsnbgg7ZWY6riwIOyghOq5jOyngOuKlCDrqqjrpbjri6TripQg7KCQ7J2064ukLiBcclxuICog6re465+s66+A66GcIOuhnOq3uOyduOyXkCDshLHqs7XsnYQg7ZWY66m0IOqyjOyLnOq4gOuTpOydhCDrs7Tqs6Ag6rCB6rCB7J2YIHBvc3Tsl5Ag64yA7ZW0IOyii+yVhOyalOulvCDssrTtgaztlbTspJjslbwg7ZWc64ukLiBcclxuICovXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0SWQgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIGVtYWlsIDogdXNlckVtYWlsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2F1dGgvcG9zdC8ke2RhdGF9L2xpa2VgLCBuZXdPYmose1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCI6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgdW5saWtlIHBvc3QgLi4uIFwiLCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgcG9zdElkIDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0cz9wYWdlPSR7ZGF0YS5wYWdlTnVtYmVyfSZzaXplPSR7ZGF0YS5wYWdlU2l6ZX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnJlc3VsdCxcclxuICAgICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IFxyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWwsXHJcbiAgICAgICAgcG9zdElkIDogZGF0YS5wb3N0SWQsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvY29tbWVudCcsIG5ld09iaiwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpOyAvLyDssqvrsojsp7jqsoPrp4wg7ZWY6rOgIOyLtuycvOuptCB0YWtlTGVhZGluZ1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpOyAvLyDssqvrsojsp7jqsoPrp4wg7ZWY6rOgIOyLtuycvOuptCB0YWtlTGVhZGluZ1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxlYWRpbmcoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksIFxyXG4gICAgXSlcclxufTsiXSwic291cmNlUm9vdCI6IiJ9