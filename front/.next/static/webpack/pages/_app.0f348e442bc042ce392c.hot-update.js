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
  }).then(res => res.data);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_SUCCESS"],
      data: result.data.result
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
    console.log("after load post... ", result);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJuZXdPYmoiLCJkZXNjcmlwdGlvbiIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJhZGRQb3N0IiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJwb3N0SWQiLCJlcnJvciIsIkFERF9QT1NUX0ZBSUxVUkUiLCJsaWtlUG9zdEFQSSIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoQ3JlZGVudGlhbHMiLCJsaWtlUG9zdCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RBUEkiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJsb2FkUG9zdCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwid2F0Y2hMaWtlUG9zdCIsInRha2VMYXRlc3QiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIndhdGNoVW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGVhZGluZyIsIkFERF9QT1NUX1JFUVVFU1QiLCJ3YXRjaExvYWRQb3N0IiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwid2F0Y2hBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInBvc3RTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQXNCQTtBQUNBLE1BQU1BLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjs7QUFDQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN0QixRQUFNQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLGFBQVosQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFdBQVosQ0FBbEI7QUFDQSxRQUFNRSxNQUFNLEdBQUc7QUFDWEMsZUFBVyxFQUFHTCxJQURIO0FBRVhNLFNBQUssRUFBR0g7QUFGRyxHQUFmO0FBSUEsU0FBT0ksNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJKLE1BQXpCLEVBQWdDO0FBQ25DSyxXQUFPLEVBQUM7QUFDSix1QkFBa0IsVUFBU1IsV0FBWSxFQURuQztBQUVKLHNCQUFnQjtBQUZaO0FBRDJCLEdBQWhDLEVBS0pTLElBTEksQ0FLQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNYLElBTFosQ0FBUDtBQU1IOztBQUVELFVBQVVZLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCLE1BQUk7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2hCLFVBQUQsRUFBYWMsTUFBTSxDQUFDYixJQUFwQixDQUF6QjtBQUNBLFVBQU1nQiw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUMsK0RBREE7QUFFTmxCLFVBQUksRUFBRWMsTUFBTSxDQUFDZDtBQUZQLEtBQUQsQ0FB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TU5NLCtEQUFJLENBQUNKLGVBQUQsQ0FORSxDQUFELENBQVQ7QUFRSDtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGYzNDhlNDQyYmMwNDJjZTM5MmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlbGF5LCBmb3JrLCBhbGwsIHRha2VMYXRlc3QsIHB1dCwgY2FsbCwgdGFrZUxlYWRpbmcsIHRocm90dGxlLCBkZWJvdW5jZSwgdGFrZX0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcbmltcG9ydCB7IFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULCBcclxuICAgIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBBRERfUE9TVF9GQUlMVVJFLCBcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsIFxyXG4gICAgQUREX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBBRERfUE9TVF9UT19NRSwgXHJcbiAgICBnZW5lcmF0ZUR1bW15UG9zdCwgXHJcbiAgICBMSUtFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBMSUtFX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBMT0FEX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBMT0FEX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBMT0FEX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBSRU1PVkVfUE9TVF9GQUlMVVJFLCBcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFxyXG4gICAgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBVTkxJS0VfUE9TVF9GQUlMVVJFLCBcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBVTkxJS0VfUE9TVF9TVUNDRVNTXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGRhdGEsXHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWxcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9wb3N0JywgbmV3T2JqLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnBvc3RJZCxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgOlwiLCBkYXRhKTtcclxuICAgIC8vIHJldHVybiBheGlvcy5wYXRjaChgL2F1dGgvcG9zdC8ke2RhdGF9L2xpa2VgLCBuZXdPYmose1xyXG4gICAgLy8gICAgIGhlYWRlcnM6e1xyXG4gICAgLy8gICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAvLyAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZVxyXG4gICAgLy8gfSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL2F1dGgvcG9zdC8ke2RhdGF9L2xpa2VgLCBuZXdPYmose1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDqt7jsmbjsl5Ag7KKL7JWE7JqUIOyImOulvCDrs7Tqs6Ag7Iu27Jy866m0IOyImOunjCDqs4TsgrDtlbTshJwg6rCA7KC47Jik66m0IOuQnOuLpC4gXHJcbiAqIOusuOygnOuKlCBsaWtl66W8IO2BtOumre2WiOuKlOyngCwg7JWI7ZaI64qU7KeAIOuhnOq3uOyduCDtlZjquLAg7KCE6rmM7KeA64qUIOuqqOuluOuLpOuKlCDsoJDsnbTri6QuIFxyXG4gKiDqt7jrn6zrr4DroZwg66Gc6re47J247JeQIOyEseqzteydhCDtlZjrqbQg6rKM7Iuc6riA65Ok7J2EIOuztOqzoCDqsIHqsIHsnZggcG9zdOyXkCDrjIDtlbQg7KKL7JWE7JqU66W8IOyytO2BrO2VtOykmOyVvCDtlZzri6QuIFxyXG4gKi9cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHBvc3RJZCA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0IDogcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWxcclxuICAgIH07XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXV0aC9wb3N0LyR7ZGF0YX0vbGlrZWAsIG5ld09iaix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnJlc3VsdCxcclxuICAgICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9hcGkvcG9zdHM/cGFnZT0ke2RhdGEucGFnZU51bWJlcn0mc2l6ZT0ke2RhdGEucGFnZVNpemV9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgbG9hZCBwb3N0Li4uIFwiLCByZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5yZXN1bHQsXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoeyBcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGVtYWlsIDogdXNlckVtYWlsLFxyXG4gICAgICAgIHBvc3RJZCA6IGRhdGEucG9zdElkLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL2NvbW1lbnQnLCBuZXdPYmosIHtcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMZWFkaW5nKEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpOyAvLyDssqvrsojsp7jqsoPrp4wg7ZWY6rOgIOyLtuycvOuptCB0YWtlTGVhZGluZ1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpOyAvLyDssqvrsojsp7jqsoPrp4wg7ZWY6rOgIOyLtuycvOuptCB0YWtlTGVhZGluZ1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpOyAvLyDssqvrsojsp7jqsoPrp4wg7ZWY6rOgIOyLtuycvOuptCB0YWtlTGVhZGluZ1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpOyAvLyDssqvrsojsp7jqsoPrp4wg7ZWY6rOgIOyLtuycvOuptCB0YWtlTGVhZGluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLCBcclxuICAgIF0pXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==