webpackHotUpdate_N_E("pages/index",{

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
          draft.likePostDone = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwYWdlYWJsZSIsIm9mZnNldCIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInBhZ2VkIiwidW5wYWdlZCIsImlzUGFnZVNldHRpbmciLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImlzTGFzdFBhZ2UiLCJpc0ZpcnN0UGFnZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsImltYWdlVXJsIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxJS0VfUE9TVF9TRVRUSU5HX1JFUVVFU1QiLCJMSUtFX1BPU1RfU0VUVElOR19TVUNDRVNTIiwiTElLRV9QT1NUX1NFVFRJTkdfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJmaW5kIiwidiIsInBvc3RJZCIsInJlc3VsdCIsImxpa2VycyIsInB1c2giLCJlcnJvciIsImZpbHRlciIsIm1lbWJlcklkIiwiY29uY2F0IiwibGFzdCIsInVuc2hpZnQiLCJjb21tZW50TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsVUFBUSxFQUFDO0FBQ0xDLFVBQU0sRUFBRSxDQURIO0FBRUxDLGNBQVUsRUFBRSxDQUFDLENBRlI7QUFHTEMsWUFBUSxFQUFFLEVBSEw7QUFJTEMsU0FBSyxFQUFFLElB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TUFBTSxDQUFDTCxJQUE5QyxDQUFsQjtBQUNBOztBQUNKLFdBQUtKLG1CQUFMO0FBQ0lXLGFBQUssQ0FBQ3hELGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0F3RCxhQUFLLENBQUN0RCxlQUFOLEdBQXdCb0QsTUFBTSxDQUFDWSxLQUEvQjtBQUNBOztBQUNKLFdBQUsxQixtQkFBTDtBQUNJZ0IsYUFBSyxDQUFDM0QsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQTJELGFBQUssQ0FBQzFELGNBQU4sR0FBdUIsS0FBdkI7QUFDQTBELGFBQUssQ0FBQ3pELGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDSixXQUFLMEMsbUJBQUw7QUFBeUI7QUFDckIsZ0JBQU1rQixJQUFJLEdBQUdILEtBQUssQ0FBQ3pFLFNBQU4sQ0FBZ0I2RSxJQUFoQixDQUFzQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLE1BQUYsS0FBYVIsTUFBTSxDQUFDTCxJQUFQLENBQVlhLE1BQXJELENBQWI7QUFDQUgsY0FBSSxDQUFDYSxXQUFMLENBQWlCUCxJQUFqQixDQUFzQlgsTUFBTSxDQUFDTCxJQUE3QjtBQUNBTyxlQUFLLENBQUMzRCxpQkFBTixHQUEwQixLQUExQjtBQUNBMkQsZUFBSyxDQUFDMUQsY0FBTixHQUF1QixJQUF2QjtBQUNBO0FBQ0g7O0FBQ0QsV0FBSzRDLG1CQUFMO0FBQ0ljLGFBQUssQ0FBQzNELGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0EyRCxhQUFLLENBQUN6RCxlQUFOLEdBQXdCdUQsTUFBTSxDQUFDWSxLQUEvQjtBQUNBOztBQUNKO0FBQ0k7QUF4R1I7QUEwR0gsR0EzR2EsQ0FBZDtBQTRHSCxDQTdHRDs7QUErR2VkLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg1MGUyZWRlMDRjYzRlZDU1NjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2VzLCB7IHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBwYWdlYWJsZTp7XHJcbiAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgIHBhZ2VOdW1iZXI6IC0xLFxyXG4gICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICBwYWdlZDogdHJ1ZSxcclxuICAgICAgICB1bnBhZ2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBpc1BhZ2VTZXR0aW5nOiBmYWxzZSxcclxuICAgIHRvdGFsRWxlbWVudHM6IDAsXHJcbiAgICB0b3RhbFBhZ2VzOiAwLFxyXG4gICAgaXNMYXN0UGFnZTogZmFsc2UsXHJcbiAgICBpc0ZpcnN0UGFnZTogdHJ1ZSxcclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxufSBcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDpmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczogW3sgXHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TRVRUSU5HX1JFUVVFU1QgPSAnTElLRV9QT1NUX1NFVFRJTkdfUkVRVUVTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TRVRUSU5HX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NFVFRJTkdfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU0VUVElOR19GQUlMVVJFID0gJ0xJS0VfUE9TVF9TRVRUSU5HX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG4vL+ydtOyghCDsg4Htg5zrpbwgYWN0aW9u7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtCDrgrTripQg7ZWo7IiYICjrtojrs4DshLHsnYQg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlIChzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSl7IFxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIDo6IFwiLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LnBvc3RJZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uLmRhdGEucmVzdWx0IDo6IFwiLGFjdGlvbi5kYXRhLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lmxpa2Vycy5wdXNoKGFjdGlvbi5kYXRhLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc3QubGlrZXJzIGluIGFjdGlvbiA6OiBcIiwgcG9zdC5saWtlcnMpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5wb3N0SWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lmxpa2VycyA9IHBvc3QubGlrZXJzLmZpbHRlcigodikgPT4gdi5wb3N0SWQgIT09IGFjdGlvbi5kYXRhLm1lbWJlcklkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGFnZWFibGUucGFnZU51bWJlciA9IGFjdGlvbi5kYXRhLnBhZ2VhYmxlLnBhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5wYWdlYWJsZS5wYWdlU2l6ZSA9IGFjdGlvbi5kYXRhLnBhZ2VhYmxlLnBhZ2VTaXplO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGFnZWFibGUucGFnZWQgPSBhY3Rpb24uZGF0YS5wYWdlYWJsZS5wYWdlZDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBhZ2VhYmxlLm9mZnNldCA9IGFjdGlvbi5kYXRhLnBhZ2VhYmxlLm9mZnNldDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBhZ2VhYmxlLnBhZ2VkID0gYWN0aW9uLmRhdGEucGFnZWFibGUucGFnZWQ7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5wYWdlYWJsZS51bnBhZ2VkID0gYWN0aW9uLmRhdGEucGFnZWFibGUudW5wYWdlZDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnRvdGFsUGFnZXMgPSBhY3Rpb24uZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudG90YWxFbGVtZW50cyA9IGFjdGlvbi5kYXRhLnRvdGFsRWxlbWVudHM7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xhc3RQYWdlID0gYWN0aW9uLmRhdGEubGFzdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5wb3N0SWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LmNvbW1lbnRMaXN0LnB1c2goYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9