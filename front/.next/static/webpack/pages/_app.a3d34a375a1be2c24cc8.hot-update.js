webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAIL, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SET_LIKE_UNLIKE_INFO_REQUSET, SET_LIKE_UNLIKE_INFO_SUCCESS, SET_LIKE_UNLIKE_INFO_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_FAIL_DUPLICATE, SIGN_UP_FAIL, SIGN_UP_END, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAIL", function() { return LOAD_MY_INFO_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LIKE_UNLIKE_INFO_REQUSET", function() { return SET_LIKE_UNLIKE_INFO_REQUSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LIKE_UNLIKE_INFO_SUCCESS", function() { return SET_LIKE_UNLIKE_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LIKE_UNLIKE_INFO_FAILURE", function() { return SET_LIKE_UNLIKE_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAIL_DUPLICATE", function() { return SIGN_UP_FAIL_DUPLICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAIL", function() { return SIGN_UP_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_END", function() { return SIGN_UP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _utils_MsgConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/MsgConstants */ "./utils/MsgConstants.js");


const initialState = {
  loadMyPostLikeUnlikeLoading: false,
  loadMyPostLikeUnlikeDone: false,
  loadMyPostLikeUnlikeError: false,
  loadMyInfoLoading: false,
  // 유저 정보 가져오기
  loadMyInfoDone: false,
  loadMyInfoError: null,
  followLoading: false,
  // 로그인 시도중
  followDone: false,
  followError: null,
  postLength: null,
  unfollowLoading: false,
  // 로그인 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  signUpErrorReason: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: {},
  signUpData: {},
  loginData: {}
};
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAIL = 'LOAD_MY_INFO_FAIL';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const SET_LIKE_UNLIKE_INFO_REQUSET = 'SET_LIKE_UNLIKE_INFO_REQUSET';
const SET_LIKE_UNLIKE_INFO_SUCCESS = 'SET_LIKE_UNLIKE_INFO_SUCCESS';
const SET_LIKE_UNLIKE_INFO_FAILURE = 'SET_LIKE_UNLIKE_INFO_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const SIGN_UP_FAIL_DUPLICATE = 'SIGN_UP_FAIL_DUPLICATE';
const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
const SIGN_UP_END = 'SIGN_UP_END';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = data => {
  return {
    type: LOG_OUT_REQUEST
  };
}; // const dummyUser = (data) => ({
//     ...data,
//     nickname: '선준찡',
//     id: 1,
//     Posts: [{ id: 1 } ],
//     Followings: [{ nickname: '부기초' }, { nickname: 'Chanho Lee' }, { nickname: 'neue zeal' }],
//     Followers: [{ nickname: '부기초' }, { nickname: 'Chanho Lee' }, { nickname: 'neue zeal' }],
// });

const reducer = (state = initialState, action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case SET_LIKE_UNLIKE_INFO_REQUSET:
      draft.loadMyPostLikeUnlikeLoading = true;
      draft.loadMyPostLikeUnlikeError = null;
      draft.loadMyPostLikeUnlikeDone = false;
      break;

    case SET_LIKE_UNLIKE_INFO_SUCCESS:
      draft.loadMyPostLikeUnlikeLoading = false;
      draft.loadMyPostLikeUnlikeError = null;
      draft.loadMyPostLikeUnlikeDone = true; // draft.me.postLength = action.data.postIds;
      // draft.me.id = action.data.memberId;
      // draft.me.Followings.push({id : action.data});
      // draft.loadMyInfoDone = true;

      break;

    case SET_LIKE_UNLIKE_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me.postLength = action.data.postIds;
      draft.me.id = action.data.memberId; // draft.me.Followings.push({id : action.data});

      draft.loadMyInfoDone = true;
      break;

    case LOAD_MY_INFO_FAIL:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data
      });
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
      draft.unfollowDone = true;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me.postLength = 0;
      draft.logInDone = true;
      draft.loadMyInfoDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.data;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.loadMyInfoDone = false;
      draft.me = {};
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_END:
      draft.signUpDone = false;
      draft.signUpError = null;
      draft.signUpErrorReason = null;
      break;

    case SIGN_UP_FAIL_DUPLICATE:
      draft.signUpLoading = false;
      draft.signUpError = true;
      draft.signUpErrorReason = _utils_MsgConstants__WEBPACK_IMPORTED_MODULE_1__["NOT_ALLOWED_DUPLICATE_EMAIL"];
      break;

    case SIGN_UP_FAIL:
      draft.signUpLoading = false;
      draft.signUpError = true;
      draft.signUpErrorReason = _utils_MsgConstants__WEBPACK_IMPORTED_MODULE_1__["FAIL_SIGN_UP_WHEN_SIGNING_UP"];
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      console.log(action); // draft.me.Posts.unshift({ id: action.data });

      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: [{ id: action.data }, ...state.me.Posts],
    //   },
    // };

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //   },
    // };

    default:
      break;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlQb3N0TGlrZVVubGlrZUxvYWRpbmciLCJsb2FkTXlQb3N0TGlrZVVubGlrZURvbmUiLCJsb2FkTXlQb3N0TGlrZVVubGlrZUVycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJwb3N0TGVuZ3RoIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsInNpZ25VcEVycm9yUmVhc29uIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIlNFVF9MSUtFX1VOTElLRV9JTkZPX1JFUVVTRVQiLCJTRVRfTElLRV9VTkxJS0VfSU5GT19TVUNDRVNTIiwiU0VUX0xJS0VfVU5MSUtFX0lORk9fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfRkFJTF9EVVBMSUNBVEUiLCJTSUdOX1VQX0ZBSUwiLCJTSUdOX1VQX0VORCIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsInBvc3RJZHMiLCJpZCIsIm1lbWJlcklkIiwiRm9sbG93aW5ncyIsInB1c2giLCJmaWx0ZXIiLCJ2IiwiTk9UX0FMTE9XRURfRFVQTElDQVRFX0VNQUlMIiwiRkFJTF9TSUdOX1VQX1dIRU5fU0lHTklOR19VUCIsImNvbnNvbGUiLCJsb2ciLCJQb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyw2QkFBMkIsRUFBRSxLQURMO0FBRXhCQywwQkFBd0IsRUFBRSxLQUZGO0FBR3hCQywyQkFBeUIsRUFBRSxLQUhIO0FBSXhCQyxtQkFBaUIsRUFBRSxLQUpLO0FBSUU7QUFDMUJDLGdCQUFjLEVBQUUsS0FMUTtBQU14QkMsaUJBQWUsRUFBRSxJQU5PO0FB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Q0FBWWQsTUFBWixFQURKLENBRUk7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSixTQUFLUCxpQkFBTDtBQUNJUyxXQUFLLENBQUN4QyxFQUFOLENBQVNxRCxLQUFULEdBQWlCYixLQUFLLENBQUN4QyxFQUFOLENBQVNxRCxLQUFULENBQWVOLE1BQWYsQ0FBdUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDTCxFQUFGLEtBQVNMLE1BQU0sQ0FBQ0wsSUFBN0MsQ0FBakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNKO0FBQ0k7QUF4SlI7QUEwSkgsQ0EzSndELENBQXpEOztBQTZKZUcsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hM2QzNGEzNzVhMWJlMmMyNGNjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IEZBSUxfU0lHTl9VUF9XSEVOX1NJR05JTkdfVVAsIE5PVF9BTExPV0VEX0RVUExJQ0FURV9FTUFJTCB9IGZyb20gXCIuLi91dGlscy9Nc2dDb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkTXlQb3N0TGlrZVVubGlrZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZE15UG9zdExpa2VVbmxpa2VEb25lOiBmYWxzZSxcclxuICAgIGxvYWRNeVBvc3RMaWtlVW5saWtlRXJyb3I6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sFxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLCBcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLCBcclxuICAgIHBvc3RMZW5ndGg6bnVsbCxcclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLCBcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLCBcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSwgXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCwgXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcEVycm9yUmVhc29uOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgbWU6IHt9LFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMID0gJ0xPQURfTVlfSU5GT19GQUlMJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX0xJS0VfVU5MSUtFX0lORk9fUkVRVVNFVCA9ICdTRVRfTElLRV9VTkxJS0VfSU5GT19SRVFVU0VUJztcclxuZXhwb3J0IGNvbnN0IFNFVF9MSUtFX1VOTElLRV9JTkZPX1NVQ0NFU1MgPSAnU0VUX0xJS0VfVU5MSUtFX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTRVRfTElLRV9VTkxJS0VfSU5GT19GQUlMVVJFID0gJ1NFVF9MSUtFX1VOTElLRV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFID0gJ1NJR05fVVBfRkFJTF9EVVBMSUNBVEUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMID0gJ1NJR05fVVBfRkFJTCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0VORCA9ICdTSUdOX1VQX0VORCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgLi4uZGF0YSxcclxuLy8gICAgIG5pY2tuYW1lOiAn7ISg7KSA7LChJyxcclxuLy8gICAgIGlkOiAxLFxyXG4vLyAgICAgUG9zdHM6IFt7IGlkOiAxIH0gXSxcclxuLy8gICAgIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIJyB9LCB7IG5pY2tuYW1lOiAnQ2hhbmhvIExlZScgfSwgeyBuaWNrbmFtZTogJ25ldWUgemVhbCcgfV0sXHJcbi8vICAgICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIJyB9LCB7IG5pY2tuYW1lOiAnQ2hhbmhvIExlZScgfSwgeyBuaWNrbmFtZTogJ25ldWUgemVhbCcgfV0sXHJcbi8vIH0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlIChzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFNFVF9MSUtFX1VOTElLRV9JTkZPX1JFUVVTRVQ6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeVBvc3RMaWtlVW5saWtlTG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15UG9zdExpa2VVbmxpa2VFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15UG9zdExpa2VVbmxpa2VEb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTRVRfTElLRV9VTkxJS0VfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlQb3N0TGlrZVVubGlrZUxvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlQb3N0TGlrZVVubGlrZUVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlQb3N0TGlrZVVubGlrZURvbmU9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGRyYWZ0Lm1lLnBvc3RMZW5ndGggPSBhY3Rpb24uZGF0YS5wb3N0SWRzO1xyXG4gICAgICAgICAgICAvLyBkcmFmdC5tZS5pZCA9IGFjdGlvbi5kYXRhLm1lbWJlcklkO1xyXG4gICAgICAgICAgICAvLyBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkIDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgLy8gZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNFVF9MSUtFX1VOTElLRV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5wb3N0TGVuZ3RoID0gYWN0aW9uLmRhdGEucG9zdElkcztcclxuICAgICAgICAgICAgZHJhZnQubWUuaWQgPSBhY3Rpb24uZGF0YS5tZW1iZXJJZDtcclxuICAgICAgICAgICAgLy8gZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZCA6IGFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZCA6IGFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzogICAgXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5wb3N0TGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSB7fTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9FTkQ6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvclJlYXNvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMX0RVUExJQ0FURTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yUmVhc29uID0gTk9UX0FMTE9XRURfRFVQTElDQVRFX0VNQUlMO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yUmVhc29uID0gRkFJTF9TSUdOX1VQX1dIRU5fU0lHTklOR19VUDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgICAgICAgICAvLyBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLy8gICBtZToge1xyXG4gICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgIC8vICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgIG1lOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==