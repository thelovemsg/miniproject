webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
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
}); // const dummyPost = (data) => ({
//     id: data.id,
//     content: data.content,
//     User: {
//         id: 1,
//         nickname: 'thelovedaejeon',
//     },
//     Images: [],
//     Comments: [],
// });
// const dummyComment = (data) => ({
//     id: shortId.generate(),
//     content: data,
//     User: {
//         id: 1,
//         nickname: 'thelovedaejeon',
//     },
// })
//이전 상태를 action을 통해 다음 상태로 만들어 내는 함수 (불변성을 지키면서)

const reducer = (state = initialState, action) => {
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draft => {
    switch (action.type) {
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
          const post = draft.mainPosts.find(v => v.id === action.data.postId);
          post.commentList = {};
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break; // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
          // const post = { ...state.mainPosts[postIndex] };
          // post.Comments = [dummyComment(action.data.content), ...post.Comments];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = post;
          // return {
          //   ...state,
          //   mainPosts,
          //   addCommentLoading: false,
          //   addCommentDone: true,
          // };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwYWdlYWJsZSIsIm9mZnNldCIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInBhZ2VkIiwidW5wYWdlZCIsImlzUGFnZVNldHRpbmciLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImlzTGFzdFBhZ2UiLCJpc0ZpcnN0UGFnZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJpbWFnZVVybCIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxhc3QiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwicG9zdCIsImZpbmQiLCJwb3N0SWQiLCJjb21tZW50TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsVUFBUSxFQUFDO0FBQ0xDLFVBQU0sRUFBRSxDQURIO0FBRUxDLGNBQVUsRUFBRSxDQUFDLENBRlI7QUFHTEMsWUFBUSxFQUFFLEVBSEw7QUFJTEMsU0FBSyxFQUFFLElBSkY7QUFLTEMsV0FBTyxFQUFFO0FBTEosR0FEZTtBQVF4QkMsZUFBYSxFQUFFLEtBUlM7QUFTeEJDLGVBQWEsRUFBRSxDQVRTO0FBVXhCQyxZQUFVLEVBQUUsQ0FWWTtBQVd4QkMsWUFBVSxFQUFFLEtBWFk7QUFZeEJDLGFBQVcsRUFBRSxJQVpXO0FBYXhCQyxXQUFTLEVBQUUsRUFiYTtBQWN4QkMsWUFBVSxFQUFFLEVBZFk7QUFleEJDLGlCQUFlLEVBQUUsS0FmTztBQWdCeEJDLGNBQVksRUFBRSxLQWhCVTtBQWlCeEJDLGVBQWEsRUFBRSxJQWpCUztBQWtCeEJDLGdCQUFjLEVBQUUsS0FsQlE7QUFtQnhCQyxhQUFXLEVBQUUsS0FuQlc7QUFvQnhCQyxjQUFZLEVBQUUsSUFwQlU7QUFxQnhCQyxtQkFBaUIsRUFBRSxLQXJCSztBQXNCeEJDLGdCQUFjLEVBQUUsS0F0QlE7QUF1QnhCQyxpQkFBZSxFQUFFLElBdkJPO0FBd0J4QkMs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QTs7QUFDSixXQUFLaUMsbUJBQUw7QUFBeUI7QUFDckIsZ0JBQU1zQixJQUFJLEdBQUdQLEtBQUssQ0FBQzFELFNBQU4sQ0FBZ0JrRSxJQUFoQixDQUFzQkYsQ0FBRCxJQUFPQSxDQUFDLENBQUM3QyxFQUFGLEtBQVNxQyxNQUFNLENBQUNMLElBQVAsQ0FBWWdCLE1BQWpELENBQWI7QUFDQUYsY0FBSSxDQUFDRyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0FWLGVBQUssQ0FBQ2xELGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FrRCxlQUFLLENBQUNqRCxjQUFOLEdBQXVCLElBQXZCO0FBQ0EsZ0JBTHFCLENBTXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFDRCxXQUFLbUMsbUJBQUw7QUFDSWMsYUFBSyxDQUFDbEQsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWtELGFBQUssQ0FBQ2hELGVBQU4sR0FBd0I4QyxNQUFNLENBQUNLLEtBQS9CO0FBQ0E7O0FBQ0o7QUFDSTtBQWhGUjtBQWtGSCxHQW5GYSxDQUFkO0FBb0ZILENBckZEOztBQXVGZVAsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjJjMzEzOGJkNDJiMDc5ZGU5MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZXMsIHsgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHBhZ2VhYmxlOntcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgcGFnZU51bWJlcjogLTEsXHJcbiAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgIHBhZ2VkOiB0cnVlLFxyXG4gICAgICAgIHVucGFnZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGlzUGFnZVNldHRpbmc6IGZhbHNlLFxyXG4gICAgdG90YWxFbGVtZW50czogMCxcclxuICAgIHRvdGFsUGFnZXM6IDAsXHJcbiAgICBpc0xhc3RQYWdlOiBmYWxzZSxcclxuICAgIGlzRmlyc3RQYWdlOiB0cnVlLFxyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OmZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOiBbeyBcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlVXJsKCksXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAndGhlbG92ZWRhZWplb24nLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIEltYWdlczogW10sXHJcbi8vICAgICBDb21tZW50czogW10sXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgY29udGVudDogZGF0YSxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogJ3RoZWxvdmVkYWVqZW9uJyxcclxuLy8gICAgIH0sXHJcbi8vIH0pXHJcblxyXG4vL+ydtOyghCDsg4Htg5zrpbwgYWN0aW9u7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtCDrgrTripQg7ZWo7IiYICjrtojrs4DshLHsnYQg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlIChzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSl7IFxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEuY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5wYWdlYWJsZS5wYWdlTnVtYmVyID0gYWN0aW9uLmRhdGEucGFnZWFibGUucGFnZU51bWJlcjtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBhZ2VhYmxlLnBhZ2VTaXplID0gYWN0aW9uLmRhdGEucGFnZWFibGUucGFnZVNpemU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5wYWdlYWJsZS5wYWdlZCA9IGFjdGlvbi5kYXRhLnBhZ2VhYmxlLnBhZ2VkO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGFnZWFibGUub2Zmc2V0ID0gYWN0aW9uLmRhdGEucGFnZWFibGUub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGFnZWFibGUucGFnZWQgPSBhY3Rpb24uZGF0YS5wYWdlYWJsZS5wYWdlZDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBhZ2VhYmxlLnVucGFnZWQgPSBhY3Rpb24uZGF0YS5wYWdlYWJsZS51bnBhZ2VkO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudG90YWxQYWdlcyA9IGFjdGlvbi5kYXRhLnRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC50b3RhbEVsZW1lbnRzID0gYWN0aW9uLmRhdGEudG90YWxFbGVtZW50cztcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTGFzdFBhZ2UgPSBhY3Rpb24uZGF0YS5sYXN0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5jb21tZW50TGlzdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgICAgICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICBtYWluUG9zdHMsXHJcbiAgICAgICAgICAgICAgICAvLyAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9