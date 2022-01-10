webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LIKE_POST_SETTING_REQUEST, LIKE_POST_SETTING_SUCCESS, LIKE_POST_SETTING_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SETTING_REQUEST", function() { return LIKE_POST_SETTING_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SETTING_SUCCESS", function() { return LIKE_POST_SETTING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SETTING_FAILURE", function() { return LIKE_POST_SETTING_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  pageable: {
    offset: 0,
    pageNumber: -1,
    pageSize: 10,
    paged: true,
    unpaged: false
  },
  isPageSetting: false,
  totalElements: 0,
  totalPages: 0,
  isLastPage: false,
  isFirstPage: true,
  mainPosts: [],
  imagePaths: [],
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null
};
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.imageUrl()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));
const LIKE_POST_SETTING_REQUEST = 'LIKE_POST_SETTING_REQUES';
const LIKE_POST_SETTING_SUCCESS = 'LIKE_POST_SETTING_SUCCESS';
const LIKE_POST_SETTING_FAILURE = 'LIKE_POST_SETTING_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); //이전 상태를 action을 통해 다음 상태로 만들어 내는 함수 (불변성을 지키면서)

const reducer = (state = initialState, action) => {
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draft => {
    switch (action.type) {
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          console.log("action :: ", action);
          const post = draft.mainPosts.find(v => v.postId === action.data.postId);
          console.log("action.data.result :: ", action.data.result);
          post.likers.push(action.data.result);
          console.log("post.likers in action :: ", post.likers);
          draft.likePostLoading = false;
          draft.likePostDone = true; // draft.mainPosts.unshift(action.data);

          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.postId === action.data.postId);
          post.likers = post.likers.filter(v => v.postId !== action.data.memberId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          draft.mainPosts.unshift(action.data);
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data.content);
        draft.pageable.pageNumber = action.data.pageable.pageNumber;
        draft.pageable.pageSize = action.data.pageable.pageSize;
        draft.pageable.paged = action.data.pageable.paged;
        draft.pageable.offset = action.data.pageable.offset;
        draft.pageable.paged = action.data.pageable.paged;
        draft.pageable.unpaged = action.data.pageable.unpaged;
        draft.totalPages = action.data.totalPages;
        draft.totalElements = action.data.totalElements;
        draft.isLastPage = action.data.last;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.postId === action.data.postId);
          post.commentList.push(action.data);
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwYWdlYWJsZSIsIm9mZnNldCIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInBhZ2VkIiwidW5wYWdlZCIsImlzUGFnZVNldHRpbmciLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImlzTGFzdFBhZ2UiLCJpc0ZpcnN0UGFnZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsImltYWdlVXJsIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxJS0VfUE9TVF9TRVRUSU5HX1JFUVVFU1QiLCJMSUtFX1BPU1RfU0VUVElOR19TVUNDRVNTIiwiTElLRV9QT1NUX1NFVFRJTkdfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJmaW5kIiwidiIsInBvc3RJZCIsInJlc3VsdCIsImxpa2VycyIsInB1c2giLCJlcnJvciIsImZpbHRlciIsIm1lbWJlcklkIiwidW5zaGlmdCIsImNvbmNhdCIsImxhc3QiLCJjb21tZW50TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsVUFBUSxFQUFDO0FBQ0xDLFVBQU0sRUFBRSxDQURIO0FBRUxDLGNBQVUsRUFBRSxDQUFDLENBRlI7QUFHTEMsWUFBUSxFQUFFLEVBSEw7QUFJTEMsU0FBSyxFQUFFLElB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RSxLQUFLLENBQUN6RSxTQUFOLENBQWdCb0YsTUFBaEIsQ0FBd0JOLENBQUQsSUFBT0EsQ0FBQyxDQUFDckQsRUFBRixLQUFTOEMsTUFBTSxDQUFDTCxJQUE5QyxDQUFsQjtBQUNBOztBQUNKLFdBQUtKLG1CQUFMO0FBQ0lXLGFBQUssQ0FBQ3hELGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0F3RCxhQUFLLENBQUN0RCxlQUFOLEdBQXdCb0QsTUFBTSxDQUFDWSxLQUEvQjtBQUNBOztBQUNKLFdBQUsxQixtQkFBTDtBQUNJZ0IsYUFBSyxDQUFDM0QsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQTJELGFBQUssQ0FBQzFELGNBQU4sR0FBdUIsS0FBdkI7QUFDQTBELGFBQUssQ0FBQ3pELGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDSixXQUFLMEMsbUJBQUw7QUFBeUI7QUFDckIsZ0JBQU1rQixJQUFJLEdBQUdILEtBQUssQ0FBQ3pFLFNBQU4sQ0FBZ0I2RSxJQUFoQixDQUFzQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLE1BQUYsS0FBYVIsTUFBTSxDQUFDTCxJQUFQLENBQVlhLE1BQXJELENBQWI7QUFDQUgsY0FBSSxDQUFDYSxXQUFMLENBQWlCUCxJQUFqQixDQUFzQlgsTUFBTSxDQUFDTCxJQUE3QjtBQUNBTyxlQUFLLENBQUMzRCxpQkFBTixHQUEwQixLQUExQjtBQUNBMkQsZUFBSyxDQUFDMUQsY0FBTixHQUF1QixJQUF2QjtBQUNBO0FBQ0g7O0FBQ0QsV0FBSzRDLG1CQUFMO0FBQ0ljLGFBQUssQ0FBQzNELGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0EyRCxhQUFLLENBQUN6RCxlQUFOLEdBQXdCdUQsTUFBTSxDQUFDWSxLQUEvQjtBQUNBOztBQUNKO0FBQ0k7QUExR1I7QUE0R0gsR0E3R2EsQ0FBZDtBQThHSCxDQS9HRDs7QUFpSGVkLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2NhM2JkODI5NTExYzhjYmIyZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZXMsIHsgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHBhZ2VhYmxlOntcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgcGFnZU51bWJlcjogLTEsXHJcbiAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgIHBhZ2VkOiB0cnVlLFxyXG4gICAgICAgIHVucGFnZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGlzUGFnZVNldHRpbmc6IGZhbHNlLFxyXG4gICAgdG90YWxFbGVtZW50czogMCxcclxuICAgIHRvdGFsUGFnZXM6IDAsXHJcbiAgICBpc0xhc3RQYWdlOiBmYWxzZSxcclxuICAgIGlzRmlyc3RQYWdlOiB0cnVlLFxyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OmZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOiBbeyBcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlVXJsKCksXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NFVFRJTkdfUkVRVUVTVCA9ICdMSUtFX1BPU1RfU0VUVElOR19SRVFVRVMnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NFVFRJTkdfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU0VUVElOR19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TRVRUSU5HX0ZBSUxVUkUgPSAnTElLRV9QT1NUX1NFVFRJTkdfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbi8v7J207KCEIOyDge2DnOulvCBhY3Rpb27snYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJggKOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2UgKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXsgXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24gOjogXCIsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYucG9zdElkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24uZGF0YS5yZXN1bHQgOjogXCIsYWN0aW9uLmRhdGEucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHBvc3QubGlrZXJzLnB1c2goYWN0aW9uLmRhdGEucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdC5saWtlcnMgaW4gYWN0aW9uIDo6IFwiLCBwb3N0Lmxpa2Vycyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LnBvc3RJZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QubGlrZXJzID0gcG9zdC5saWtlcnMuZmlsdGVyKCh2KSA9PiB2LnBvc3RJZCAhPT0gYWN0aW9uLmRhdGEubWVtYmVySWQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEuY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5wYWdlYWJsZS5wYWdlTnVtYmVyID0gYWN0aW9uLmRhdGEucGFnZWFibGUucGFnZU51bWJlcjtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBhZ2VhYmxlLnBhZ2VTaXplID0gYWN0aW9uLmRhdGEucGFnZWFibGUucGFnZVNpemU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5wYWdlYWJsZS5wYWdlZCA9IGFjdGlvbi5kYXRhLnBhZ2VhYmxlLnBhZ2VkO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGFnZWFibGUub2Zmc2V0ID0gYWN0aW9uLmRhdGEucGFnZWFibGUub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGFnZWFibGUucGFnZWQgPSBhY3Rpb24uZGF0YS5wYWdlYWJsZS5wYWdlZDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBhZ2VhYmxlLnVucGFnZWQgPSBhY3Rpb24uZGF0YS5wYWdlYWJsZS51bnBhZ2VkO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudG90YWxQYWdlcyA9IGFjdGlvbi5kYXRhLnRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC50b3RhbEVsZW1lbnRzID0gYWN0aW9uLmRhdGEudG90YWxFbGVtZW50cztcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTGFzdFBhZ2UgPSBhY3Rpb24uZGF0YS5sYXN0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LnBvc3RJZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuY29tbWVudExpc3QucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=