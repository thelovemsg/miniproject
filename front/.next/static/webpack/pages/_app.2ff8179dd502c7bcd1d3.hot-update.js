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
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_SUCCESS"],
      data: {
        postId: action.data,
        result: result.data
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJuZXdPYmoiLCJkZXNjcmlwdGlvbiIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJhZGRQb3N0IiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJwb3N0SWQiLCJlcnJvciIsIkFERF9QT1NUX0ZBSUxVUkUiLCJsaWtlUG9zdEFQSSIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoQ3JlZGVudGlhbHMiLCJsaWtlUG9zdCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RBUEkiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJsb2FkUG9zdCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwid2F0Y2hMaWtlUG9zdCIsInRha2VMYXRlc3QiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIndhdGNoVW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGVhZGluZyIsIkFERF9QT1NUX1JFUVVFU1QiLCJ3YXRjaExvYWRQb3N0IiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwid2F0Y2hBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInBvc3RTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQXNCQTtBQUNBLE1BQU1BLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjs7QUFDQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN0QixRQUFNQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLGFBQVosQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFdBQVosQ0FBbEI7QUFDQSxRQUFNRSxNQUFNLEdBQUc7QUFDWEMsZUFBVyxFQUFHTCxJQURIO0FBRVhNLFNBQUssRUFBR0g7QUFGRyxHQUFmO0FBSUEsU0FBT0ksNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJKLE1BQXpCLEVBQWdDO0FBQ25DSyxXQUFPLEVBQUM7QUFDSix1QkFBa0IsVUFBU1IsV0FBWSxFQURuQztBQUVKLHNCQUFnQjtBQUZaO0FBRDJCLEdBQWhDLEVBS0pTLElBTEksQ0FLQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNYLElBTFosQ0FBUDtBQU1IOztBQUVELFVBQVVZLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCLE1BQUk7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2hCLFVBQUQsRUFBYWMsTUFBTSxDQUFDYixJQUFwQixDQUF6QjtBQUNBLFVBQU1nQiw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUMsK0RBREE7QUFFTmxCLFVBQUksRUFBRWMsTUFBTSxDQUFDZDtBQUZQLEtBQUQsQ0FB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cHAuMmZmODE3OWRkNTAyYzdiY2QxZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlbGF5LCBmb3JrLCBhbGwsIHRha2VMYXRlc3QsIHB1dCwgY2FsbCwgdGFrZUxlYWRpbmcsIHRocm90dGxlLCBkZWJvdW5jZSwgdGFrZX0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcbmltcG9ydCB7IFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULCBcclxuICAgIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBBRERfUE9TVF9GQUlMVVJFLCBcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsIFxyXG4gICAgQUREX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBBRERfUE9TVF9UT19NRSwgXHJcbiAgICBnZW5lcmF0ZUR1bW15UG9zdCwgXHJcbiAgICBMSUtFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBMSUtFX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBMT0FEX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBMT0FEX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBMT0FEX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBSRU1PVkVfUE9TVF9GQUlMVVJFLCBcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFxyXG4gICAgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBVTkxJS0VfUE9TVF9GQUlMVVJFLCBcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBVTkxJS0VfUE9TVF9TVUNDRVNTXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGRhdGEsXHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWxcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9wb3N0JywgbmV3T2JqLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnBvc3RJZCxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgOlwiLCBkYXRhKTtcclxuICAgIC8vIHJldHVybiBheGlvcy5wYXRjaChgL2F1dGgvcG9zdC8ke2RhdGF9L2xpa2VgLCBuZXdPYmose1xyXG4gICAgLy8gICAgIGhlYWRlcnM6e1xyXG4gICAgLy8gICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAvLyAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZVxyXG4gICAgLy8gfSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL2F1dGgvcG9zdC8ke2RhdGF9L2xpa2VgLCBuZXdPYmose1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDqt7jsmbjsl5Ag7KKL7JWE7JqUIOyImOulvCDrs7Tqs6Ag7Iu27Jy866m0IOyImOunjCDqs4TsgrDtlbTshJwg6rCA7KC47Jik66m0IOuQnOuLpC4gXHJcbiAqIOusuOygnOuKlCBsaWtl66W8IO2BtOumre2WiOuKlOyngCwg7JWI7ZaI64qU7KeAIOuhnOq3uOyduCDtlZjquLAg7KCE6rmM7KeA64qUIOuqqOuluOuLpOuKlCDsoJDsnbTri6QuIFxyXG4gKiDqt7jrn6zrr4DroZwg66Gc6re47J247JeQIOyEseqzteydhCDtlZjrqbQg6rKM7Iuc6riA65Ok7J2EIOuztOqzoCDqsIHqsIHsnZggcG9zdOyXkCDrjIDtlbQg7KKL7JWE7JqU66W8IOyytO2BrO2VtOykmOyVvCDtlZzri6QuIFxyXG4gKi9cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHBvc3RJZCA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0IDogcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWxcclxuICAgIH07XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXV0aC9wb3N0LyR7ZGF0YX0vbGlrZWAsIG5ld09iaix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgcG9zdElkIDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3RzP3BhZ2U9JHtkYXRhLnBhZ2VOdW1iZXJ9JnNpemU9JHtkYXRhLnBhZ2VTaXplfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEucmVzdWx0LFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbCxcclxuICAgICAgICBwb3N0SWQgOiBkYXRhLnBvc3RJZCxcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9jb21tZW50JywgbmV3T2JqLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGVhZGluZyhBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSwgXHJcbiAgICBdKVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=