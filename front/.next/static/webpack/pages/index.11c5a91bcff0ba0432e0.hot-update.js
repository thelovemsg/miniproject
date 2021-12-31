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
        console.log(action.data.content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwYWdlYWJsZSIsIm9mZnNldCIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInBhZ2VkIiwidW5wYWdlZCIsImlzUGFnZVNldHRpbmciLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImlzTGFzdFBhZ2UiLCJpc0ZpcnN0UGFnZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJpbWFnZVVybCIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJsYXN0IiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsInBvc3QiLCJmaW5kIiwicG9zdElkIiwiY29tbWVudExpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTyxNQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFVBQVEsRUFBQztBQUNMQyxVQUFNLEVBQUUsQ0FESDtBQUVMQyxjQUFVLEVBQUUsQ0FBQyxDQUZSO0FBR0xDLFlBQVEsRUFBRSxFQUhMO0FBSUxDLFNBQUssRUFBRSxJQUpGO0FBS0xDLFdBQU8sRUFBRTtBQUxKLEdBRGU7QUFReEJDLGVBQWEsRUFBRSxLQVJTO0FBU3hCQyxlQUFhLEVBQUUsQ0FUUztBQVV4QkMsWUFBVSxFQUFFLENBVlk7QUFXeEJDLFlBQVUsRUFBRSxLQVhZO0FBWXhCQyxhQUFXLEVBQUUsSUFaVztBQWF4QkMsV0FBUyxFQUFFLEVBYmE7QUFjeEJDLFlBQVUsRUFBRSxFQWRZO0FBZXhCQyxpQkFBZSxFQUFFLEtBZk87QUFnQnhCQyxjQUFZLEVBQUUsS0FoQlU7QUFpQnhCQyxlQUFhLEVBQUUsSUFqQlM7QUFrQnhCQyxnQkFBYyxFQUFFLEtBbEJRO0FBbUJ4QkMsYUFBVyxFQUFFLEtBbkJXO0FBb0J4QkMsY0FBWSxFQUFFLElBcEJVO0FBcUJ4QkMsbUJBQWlCLEVBQUUsS0FyQks7QUFzQnhCQyxnQkFBYyxFQUFFLEtBdEJRO0FBdUJ4QkMsaUJBQWUsRUFB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QUNBa0QsYUFBSyxDQUFDakQsY0FBTixHQUF1QixLQUF2QjtBQUNBaUQsYUFBSyxDQUFDaEQsZUFBTixHQUF3QixJQUF4QjtBQUNBOztBQUNKLFdBQUtpQyxtQkFBTDtBQUF5QjtBQUNyQixnQkFBTXdCLElBQUksR0FBR1QsS0FBSyxDQUFDMUQsU0FBTixDQUFnQm9FLElBQWhCLENBQXNCRixDQUFELElBQU9BLENBQUMsQ0FBQy9DLEVBQUYsS0FBU3FDLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZa0IsTUFBakQsQ0FBYjtBQUNBRixjQUFJLENBQUNHLFdBQUwsR0FBbUIsRUFBbkI7QUFDQVosZUFBSyxDQUFDbEQsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWtELGVBQUssQ0FBQ2pELGNBQU4sR0FBdUIsSUFBdkI7QUFDQSxnQkFMcUIsQ0FNckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUNELFdBQUttQyxtQkFBTDtBQUNJYyxhQUFLLENBQUNsRCxpQkFBTixHQUEwQixLQUExQjtBQUNBa0QsYUFBSyxDQUFDaEQsZUFBTixHQUF3QjhDLE1BQU0sQ0FBQ08sS0FBL0I7QUFDQTs7QUFDSjtBQUNJO0FBakZSO0FBbUZILEdBcEZhLENBQWQ7QUFxRkgsQ0F0RkQ7O0FBd0ZlVCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMWM1YTkxYmNmZjBiYTA0MzJlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlcywgeyBwcm9kdWNlIH0gZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcGFnZWFibGU6e1xyXG4gICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICBwYWdlTnVtYmVyOiAtMSxcclxuICAgICAgICBwYWdlU2l6ZTogMTAsXHJcbiAgICAgICAgcGFnZWQ6IHRydWUsXHJcbiAgICAgICAgdW5wYWdlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgaXNQYWdlU2V0dGluZzogZmFsc2UsXHJcbiAgICB0b3RhbEVsZW1lbnRzOiAwLFxyXG4gICAgdG90YWxQYWdlczogMCxcclxuICAgIGlzTGFzdFBhZ2U6IGZhbHNlLFxyXG4gICAgaXNGaXJzdFBhZ2U6IHRydWUsXHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6ZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6IFt7IFxyXG4gICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKSxcclxuICAgIH1dLFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbi8vIGNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgaWQ6IGRhdGEuaWQsXHJcbi8vICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmlja25hbWU6ICd0aGVsb3ZlZGFlamVvbicsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgSW1hZ2VzOiBbXSxcclxuLy8gICAgIENvbW1lbnRzOiBbXSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBjb250ZW50OiBkYXRhLFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAndGhlbG92ZWRhZWplb24nLFxyXG4vLyAgICAgfSxcclxuLy8gfSlcclxuXHJcbi8v7J207KCEIOyDge2DnOulvCBhY3Rpb27snYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJggKOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2UgKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXsgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGFnZWFibGUucGFnZU51bWJlciA9IGFjdGlvbi5kYXRhLnBhZ2VhYmxlLnBhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5wYWdlYWJsZS5wYWdlU2l6ZSA9IGFjdGlvbi5kYXRhLnBhZ2VhYmxlLnBhZ2VTaXplO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGFnZWFibGUucGFnZWQgPSBhY3Rpb24uZGF0YS5wYWdlYWJsZS5wYWdlZDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBhZ2VhYmxlLm9mZnNldCA9IGFjdGlvbi5kYXRhLnBhZ2VhYmxlLm9mZnNldDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBhZ2VhYmxlLnBhZ2VkID0gYWN0aW9uLmRhdGEucGFnZWFibGUucGFnZWQ7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5wYWdlYWJsZS51bnBhZ2VkID0gYWN0aW9uLmRhdGEucGFnZWFibGUudW5wYWdlZDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnRvdGFsUGFnZXMgPSBhY3Rpb24uZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudG90YWxFbGVtZW50cyA9IGFjdGlvbi5kYXRhLnRvdGFsRWxlbWVudHM7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xhc3RQYWdlID0gYWN0aW9uLmRhdGEubGFzdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuY29tbWVudExpc3QgPSB7fTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==