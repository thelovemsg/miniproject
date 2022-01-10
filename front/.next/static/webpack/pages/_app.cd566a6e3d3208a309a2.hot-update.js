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
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_SUCCESS"],
      data: {
        postId: action.data,
        result: result.data.result
      }
    });
  } catch (error) {
    console.log(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_FAILURE"],
      data: error.data
    });
  }
}

function unlikePostAPI(data) {
  console.log("data in unlikPostAPI", data);
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
    console.log("action before unlike :: ", action.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJ1c2VyRW1haWwiLCJuZXdPYmoiLCJkZXNjcmlwdGlvbiIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJhZGRQb3N0IiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJwb3N0SWQiLCJlcnJvciIsIkFERF9QT1NUX0ZBSUxVUkUiLCJsaWtlUG9zdEFQSSIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoQ3JlZGVudGlhbHMiLCJsaWtlUG9zdCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RBUEkiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJsb2FkUG9zdCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwid2F0Y2hMaWtlUG9zdCIsInRha2VMYXRlc3QiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIndhdGNoVW5saWtlUG9zdCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGVhZGluZyIsIkFERF9QT1NUX1JFUVVFU1QiLCJ3YXRjaExvYWRQb3N0IiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwid2F0Y2hBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInBvc3RTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQXNCQTtBQUNBLE1BQU1BLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjs7QUFDQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN0QixRQUFNQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLGFBQVosQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFdBQVosQ0FBbEI7QUFDQSxRQUFNRSxNQUFNLEdBQUc7QUFDWEMsZUFBVyxFQUFHTCxJQURIO0FBRVhNLFNBQUssRUFBR0g7QUFGRyxHQUFmO0FBSUEsU0FBT0ksNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJKLE1BQXpCLEVBQWdDO0FBQ25DSyxXQUFPLEVBQUM7QUFDSix1QkFBa0IsVUFBU1IsV0FBWSxFQURuQztBQUVKLHNCQUFnQjtBQUZaO0FBRDJCLEdBQWhDLEVBS0pTLElBTEksQ0FLQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNYLElBTFosQ0FBUDtBQU1IOztBQUVELFVBQVVZLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCLE1BQUk7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2hCLFVBQUQsRUFBYWMsTUFBTSxDQUFDYixJQUFwQixDQUF6QjtBQUNBLFVBQU1nQiw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUMsK0RBREE7QUFFTmxCLFVBQUksRUFBRWMsTUFBTSxDQUFDZDtBQUZQLEtBQUQsQ0FBVDtBQUlBLFVBQU1nQiw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUUsNkRBREE7QUFFTm5CLFVBQUksRUFBRWMsTUFBTSxDQUFDZCxJQUFQLENBQVlvQjtBQUZaLEtBQUQsQ0FBVDtBQUlILEdBVkQsQ0FVRSxPQUFPQyxLQUFQLEVBQWM7QUFDWixVQUFNTCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUssK0RBREE7QUFFTnRCLFVBQUksRUFBRXFCLEtBQUssQ0FBQ3JCO0FBRk4sS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTdUIsV0FBVCxDQUFxQnZCLElBQXJCLEVBQTJCO0FBQ3ZCLFFBQU1DLFdBQVcsR0FBR0osT0FBTyxDQUFDSyxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR04sT0FBTyxDQUFDSyxHQUFSLENBQVksV0FBWixDQUFsQjtBQUNBLFFBQU1FLE1BQU0sR0FBRztBQUNYRSxTQUFLLEVBQUdIO0FBREcsR0FBZjtBQUdBcUIsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQnpCLElBQXRCLEVBTnVCLENBT3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQU9PLDRDQUFLLENBQUNDLElBQU4sQ0FBWSxjQUFhUixJQUFLLE9BQTlCLEVBQXNDSSxNQUF0QyxFQUE2QztBQUNoREssV0FBTyxFQUFDO0FBQ0osdUJBQWtCLFVBQVNSLFdBQVksRUFEbkM7QUFFSixzQkFBZ0I7QUFGWixLQUR3QztBQUtoRHlCLG1CQUFlLEVBQUc7QUFMOEIsR0FBN0MsQ0FBUDtBQU9IO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBVUMsUUFBVixDQUFtQmQsTUFBbkIsRUFBMkI7QUFDdkIsTUFBSTtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDUSxXQUFELEVBQWNWLE1BQU0sQ0FBQ2IsSUFBckIsQ0FBekI7QUFDQXdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFaO0FBQ0EsVUFBTUUsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVXLGdFQURBO0FBRU41QixVQUFJLEVBQUU7QUFDRm9CLGNBQU0sRUFBR1AsTUFBTSxDQUFDYixJQURkO0FBRUZjLGNBQU0sRUFBR0EsTUFBTSxDQUFDZCxJQUFQLENBQVljO0FBRm5CO0FBRkEsS0FBRCxDQUFUO0FBT0gsR0FWRCxDQVVFLE9BQU9PLEtBQVAsRUFBYztBQUNaRyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUNBLFVBQU1MLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFWSxnRUFEQTtBQUVON0IsVUFBSSxFQUFFcUIsS0FBSyxDQUFDckI7QUFGTixLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVM4QixhQUFULENBQXVCOUIsSUFBdkIsRUFBNkI7QUFDekJ3QixTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ3pCLElBQXBDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHSixPQUFPLENBQUNLLEdBQVIsQ0FBWSxhQUFaLENBQXBCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHTixPQUFPLENBQUNLLEdBQVIsQ0FBWSxXQUFaLENBQWxCO0FBQ0EsUUFBTUUsTUFBTSxHQUFHO0FBQ1hFLFNBQUssRUFBR0g7QUFERyxHQUFmO0FBR0EsU0FBT0ksNENBQUssQ0FBQ3dCLE1BQU4sQ0FBYyxjQUFhL0IsSUFBSyxPQUFoQyxFQUF3Q0ksTUFBeEMsRUFBK0M7QUFDbERLLFdBQU8sRUFBQztBQUNKLHVCQUFrQixVQUFTUixXQUFZLEVBRG5DO0FBRUosc0JBQWdCLGtCQUZaO0FBR0osMENBQW9DO0FBSGhDO0FBRDBDLEdBQS9DLEVBTUpTLElBTkksQ0FNQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNYLElBTlosQ0FBUDtBQU9IOztBQUVELFVBQVVnQyxVQUFWLENBQXFCbkIsTUFBckIsRUFBNkI7QUFDekIsTUFBSTtBQUNBVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q1osTUFBTSxDQUFDYixJQUEvQztBQUNBLFVBQU1jLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDZSxhQUFELEVBQWdCakIsTUFBTSxDQUFDYixJQUF2QixDQUF6QjtBQUNBLFVBQU1nQiw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRWdCLGtFQURBO0FBRU5qQyxVQUFJLEVBQUVjLE1BQU0sQ0FBQ2QsSUFBUCxDQUFZYztBQUZaLEtBQUQsQ0FBVDtBQUlILEdBUEQsQ0FPRSxPQUFPTyxLQUFQLEVBQWM7QUFDWkcsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFDQSxVQUFNTCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRWlCLGtFQURBO0FBRU5sQyxVQUFJLEVBQUVxQixLQUFLLENBQUNyQjtBQUZOLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBU21DLFdBQVQsQ0FBcUJuQyxJQUFyQixFQUEyQjtBQUN2QixTQUFPTyw0Q0FBSyxDQUFDTCxHQUFOLENBQVcsbUJBQWtCRixJQUFJLENBQUNvQyxVQUFXLFNBQVFwQyxJQUFJLENBQUNxQyxRQUFTLEVBQW5FLENBQVA7QUFDSDs7QUFFRCxVQUFVQyxRQUFWLENBQW1CekIsTUFBbkIsRUFBMkI7QUFDdkIsTUFBSTtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDb0IsV0FBRCxFQUFjdEIsTUFBTSxDQUFDYixJQUFyQixDQUF6QjtBQUNBd0IsV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNYLE1BQW5DO0FBQ0EsVUFBTUUsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVzQixnRUFEQTtBQUVOdkMsVUFBSSxFQUFFYyxNQUFNLENBQUNkLElBQVAsQ0FBWWM7QUFGWixLQUFELENBQVQ7QUFJSCxHQVBELENBT0UsT0FBT08sS0FBUCxFQUFjO0FBQ1pHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0EsVUFBTUwsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUV1QixnRUFEQTtBQUVOeEMsVUFBSSxFQUFFcUIsS0FBSyxDQUFDckI7QUFGTixLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVN5QyxhQUFULENBQXVCekMsSUFBdkIsRUFBNkI7QUFDekIsU0FBT08sNENBQUssQ0FBQ0MsSUFBTixDQUFXLFdBQVgsRUFBd0JSLElBQXhCLENBQVA7QUFDSDs7QUFFRCxVQUFVMEMsVUFBVixDQUFxQjdCLE1BQXJCLEVBQTZCO0FBQ3pCLE1BQUk7QUFFQSxVQUFNRyw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRTBCLGtFQURBO0FBRU4zQyxVQUFJLEVBQUVhLE1BQU0sQ0FBQ2I7QUFGUCxLQUFELENBQVQ7QUFJQSxVQUFNZ0IsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUUyQixnRUFEQTtBQUVONUMsVUFBSSxFQUFFYSxNQUFNLENBQUNiO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FWRCxDQVVFLE9BQU9xQixLQUFQLEVBQWM7QUFDWixVQUFNTCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRTRCLGtFQURBO0FBRU43QyxVQUFJLEVBQUVxQixLQUFLLENBQUNyQjtBQUZOLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBUzhDLGFBQVQsQ0FBdUI5QyxJQUF2QixFQUE2QjtBQUN6QixRQUFNQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLGFBQVosQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFdBQVosQ0FBbEI7QUFDQSxRQUFNRSxNQUFNLEdBQUc7QUFDWEMsZUFBVyxFQUFHTCxJQUFJLENBQUNLLFdBRFI7QUFFWEMsU0FBSyxFQUFHSCxTQUZHO0FBR1hpQixVQUFNLEVBQUdwQixJQUFJLENBQUNvQjtBQUhILEdBQWY7QUFLQSxTQUFPYiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsZUFBWCxFQUE0QkosTUFBNUIsRUFBb0M7QUFDbkNLLFdBQU8sRUFBQztBQUNKLHVCQUFrQixVQUFTUixXQUFZLEVBRG5DO0FBRUosc0JBQWdCO0FBRlo7QUFEMkIsR0FBcEMsQ0FBUDtBQU9IOztBQUVELFVBQVU4QyxVQUFWLENBQXFCbEMsTUFBckIsRUFBNkI7QUFDekIsTUFBSTtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDK0IsYUFBRCxFQUFnQmpDLE1BQU0sQ0FBQ2IsSUFBdkIsQ0FBekI7QUFDQSxVQUFNZ0IsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUUrQixrRUFEQTtBQUVOaEQsVUFBSSxFQUFFYyxNQUFNLENBQUNkO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU9xQixLQUFQLEVBQWM7QUFDWkcsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFDQSxVQUFNTCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRWdDLGtFQURBO0FBRU5qRCxVQUFJLEVBQUVxQixLQUFLLENBQUNyQjtBQUZOLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsVUFBVWtELGFBQVYsR0FBeUI7QUFDckIsUUFBTUMscUVBQVUsQ0FBQ0MsZ0VBQUQsRUFBb0J6QixRQUFwQixDQUFoQixDQURxQixDQUMwQjtBQUNsRDs7QUFFRCxVQUFVMEIsZUFBVixHQUEyQjtBQUN2QixRQUFNRixxRUFBVSxDQUFDRyxrRUFBRCxFQUFzQnRCLFVBQXRCLENBQWhCLENBRHVCLENBQzRCO0FBQ3REOztBQUdELFVBQVV1QixZQUFWLEdBQXdCO0FBQ3BCLFFBQU1DLHNFQUFXLENBQUNDLCtEQUFELEVBQW1CN0MsT0FBbkIsQ0FBakIsQ0FEb0IsQ0FDMEI7QUFDakQ7O0FBRUQsVUFBVThDLGFBQVYsR0FBeUI7QUFDckIsUUFBTVAscUVBQVUsQ0FBQ1EsZ0VBQUQsRUFBb0JyQixRQUFwQixDQUFoQixDQURxQixDQUMwQjtBQUNsRDs7QUFFRCxVQUFVc0IsZUFBVixHQUEyQjtBQUN2QixRQUFNVCxxRUFBVSxDQUFDVSxrRUFBRCxFQUFzQm5CLFVBQXRCLENBQWhCLENBRHVCLENBQzRCO0FBQ3REOztBQUVELFVBQVVvQixlQUFWLEdBQTJCO0FBQ3ZCLFFBQU1YLHFFQUFVLENBQUNZLGtFQUFELEVBQXNCaEIsVUFBdEIsQ0FBaEIsQ0FEdUIsQ0FDNEI7QUFDdEQ7O0FBRWMsVUFBVWlCLFFBQVYsR0FBb0I7QUFDL0IsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDaEIsYUFBRCxDQURFLEVBRU5nQiwrREFBSSxDQUFDYixlQUFELENBRkUsRUFHTmEsK0RBQUksQ0FBQ1IsYUFBRCxDQUhFLEVBSU5RLCtEQUFJLENBQUNYLFlBQUQsQ0FKRSxFQUtOVywrREFBSSxDQUFDTixlQUFELENBTEUsRUFNTk0sK0RBQUksQ0FBQ0osZUFBRCxDQU5FLENBQUQsQ0FBVDtBQVFIO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZDU2NmE2ZTNkMzIwOGEzMDlhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsYXksIGZvcmssIGFsbCwgdGFrZUxhdGVzdCwgcHV0LCBjYWxsLCB0YWtlTGVhZGluZywgdGhyb3R0bGUsIGRlYm91bmNlLCB0YWtlfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLCBcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsIFxyXG4gICAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgQUREX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLCBcclxuICAgIEFERF9QT1NUX1RPX01FLCBcclxuICAgIGdlbmVyYXRlRHVtbXlQb3N0LCBcclxuICAgIExJS0VfUE9TVF9GQUlMVVJFLCBcclxuICAgIExJS0VfUE9TVF9SRVFVRVNULCBcclxuICAgIExJS0VfUE9TVF9TVUNDRVNTLCBcclxuICAgIExPQURfUE9TVF9GQUlMVVJFLCBcclxuICAgIExPQURfUE9TVF9SRVFVRVNULCBcclxuICAgIExPQURfUE9TVF9TVUNDRVNTLCBcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTLCBcclxuICAgIFVOTElLRV9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIFVOTElLRV9QT1NUX1NVQ0NFU1NcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogZGF0YSxcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL3Bvc3QnLCBuZXdPYmose1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEucG9zdElkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBjb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IG5ld09iaiA9IHtcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSA6XCIsIGRhdGEpO1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLnBhdGNoKGAvYXV0aC9wb3N0LyR7ZGF0YX0vbGlrZWAsIG5ld09iaix7XHJcbiAgICAvLyAgICAgaGVhZGVyczp7XHJcbiAgICAvLyAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgIC8vICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlXHJcbiAgICAvLyB9KTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvYXV0aC9wb3N0LyR7ZGF0YX0vbGlrZWAsIG5ld09iaix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOq3uOyZuOyXkCDsoovslYTsmpQg7IiY66W8IOuztOqzoCDsi7bsnLzrqbQg7IiY66eMIOqzhOyCsO2VtOyEnCDqsIDsoLjsmKTrqbQg65Cc64ukLiBcclxuICog66y47KCc64qUIGxpa2Xrpbwg7YG066at7ZaI64qU7KeALCDslYjtlojripTsp4Ag66Gc6re47J24IO2VmOq4sCDsoITquYzsp4DripQg66qo66W464uk64qUIOygkOydtOuLpC4gXHJcbiAqIOq3uOufrOuvgOuhnCDroZzqt7jsnbjsl5Ag7ISx6rO17J2EIO2VmOuptCDqsozsi5zquIDrk6TsnYQg67O06rOgIOqwgeqwgeydmCBwb3N07JeQIOuMgO2VtCDsoovslYTsmpTrpbwg7LK07YGs7ZW07KSY7JW8IO2VnOuLpC4gXHJcbiAqL1xyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0SWQgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA6IHJlc3VsdC5kYXRhLnJlc3VsdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgaW4gdW5saWtQb3N0QVBJXCIsIGRhdGEpO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgZW1haWwgOiB1c2VyRW1haWxcclxuICAgIH07XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXV0aC9wb3N0LyR7ZGF0YX0vbGlrZWAsIG5ld09iaix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIGJlZm9yZSB1bmxpa2UgOjogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5yZXN1bHQsXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3RzP3BhZ2U9JHtkYXRhLnBhZ2VOdW1iZXJ9JnNpemU9JHtkYXRhLnBhZ2VTaXplfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIGxvYWQgcG9zdC4uLiBcIiwgcmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEucmVzdWx0LFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbCxcclxuICAgICAgICBwb3N0SWQgOiBkYXRhLnBvc3RJZCxcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9jb21tZW50JywgbmV3T2JqLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGVhZGluZyhBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTsgLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSwgXHJcbiAgICBdKVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=