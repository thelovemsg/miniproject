webpackHotUpdate_N_E("pages/index",{

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
  loadMyInfoLoading: false,
  // ?????? ?????? ????????????
  loadMyInfoDone: false,
  loadMyInfoError: null,
  followLoading: false,
  // ????????? ?????????
  followDone: false,
  followError: null,
  postLength: null,
  unfollowLoading: false,
  // ????????? ?????????
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // ????????? ?????????
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // ???????????? ?????????
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // ???????????? ?????????
  signUpDone: false,
  signUpError: null,
  signUpErrorReason: null,
  changeNicknameLoading: false,
  // ????????? ?????? ?????????
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
};

const reducer = (state = initialState, action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
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
      draft.me.id = action.data.memberId;
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
      draft.me.postLength.push(action.data);
      break;
    // case ADD_POST_TO_ME:
    //     console.log(action);
    //     // draft.me.Posts.unshift({ id: action.data });
    //     break;
    //     // return {
    //     //   ...state,
    //     //   me: {
    //     //     ...state.me,
    //     //     Posts: [{ id: action.data }, ...state.me.Posts],
    //     //   },
    //     // };
    // case REMOVE_POST_OF_ME:
    //     draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
    //     break;
    //     // return {
    //     //   ...state,
    //     //   me: {
    //     //     ...state.me,
    //     //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //     //   },
    //     // };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInBvc3RMZW5ndGgiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwic2lnblVwRXJyb3JSZWFzb24iLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiU0VUX0xJS0VfVU5MSUtFX0lORk9fUkVRVVNFVCIsIlNFVF9MSUtFX1VOTElLRV9JTkZPX1NVQ0NFU1MiLCJTRVRfTElLRV9VTkxJS0VfSU5GT19GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9VUF9GQUlMX0RVUExJQ0FURSIsIlNJR05fVVBfRkFJTCIsIlNJR05fVVBfRU5EIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInBvc3RJZHMiLCJpZCIsIm1lbWJlcklkIiwiZXJyb3IiLCJGb2xsb3dpbmdzIiwicHVzaCIsImZpbHRlciIsInYiLCJOT1RfQUxMT1dFRF9EVVBMSUNBVEVfRU1BSUwiLCJGQUlMX1NJR05fVVBfV0hFTl9TSUdOSU5HX1VQIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUc7QUFDeEJDLG1CQUFpQixFQUFFLEtBREs7QUFDRTtBQUMxQkMsZ0JBQWMsRUFBRSxLQUZRO0FBR3hCQyxpQkFBZSxFQUFFLElBSE87QUFJeEJDLGVBQWEsRUFBRSxLQUpTO0FBSUY7QUFDdEJDLFlBQVUsRUFBRSxLQUxZO0FBTXhCQyxhQUFXLEVBQUUsSUFOVztBQU94QkMsWUFBVSxFQUFDLElBUGE7QUFReEJDLGlCQUFlLEVBQUUsS0FSTztBQVFBO0FBQ3hCQyxjQUFZLEVBQUUsS0FUVTtBQVV4QkMsZUFBYSxFQUFFLElBVlM7QUFXeEJDLGNBQVksRUFBRSxL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LElBQTlCO0FBQ0EyQyxXQUFLLENBQUN6QyxtQkFBTixHQUE0QixJQUE1QjtBQUNBeUMsV0FBSyxDQUFDMUMsa0JBQU4sR0FBMkIsS0FBM0I7QUFDQTs7QUFDSixTQUFLd0IsdUJBQUw7QUFDSWtCLFdBQUssQ0FBQzNDLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0EyQyxXQUFLLENBQUMxQyxrQkFBTixHQUEyQixJQUEzQjtBQUNBOztBQUNKLFNBQUt5Qix1QkFBTDtBQUNJaUIsV0FBSyxDQUFDM0MscUJBQU4sR0FBOEIsS0FBOUI7QUFDQTJDLFdBQUssQ0FBQ3pDLG1CQUFOLEdBQTRCdUMsTUFBTSxDQUFDTSxLQUFuQztBQUNBOztBQUNKLFNBQUtkLGNBQUw7QUFDSVUsV0FBSyxDQUFDeEMsRUFBTixDQUFTakIsVUFBVCxDQUFvQitELElBQXBCLENBQXlCUixNQUFNLENBQUNMLElBQWhDO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDSTtBQTFJUjtBQTRJSCxDQTdJd0QsQ0FBekQ7O0FBK0llRyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNGI0ZTUyNTMxNGNkOTg2YmI4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IEZBSUxfU0lHTl9VUF9XSEVOX1NJR05JTkdfVVAsIE5PVF9BTExPV0VEX0RVUExJQ0FURV9FTUFJTCB9IGZyb20gXCIuLi91dGlscy9Nc2dDb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwXHJcbiAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsIFxyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsIFxyXG4gICAgcG9zdExlbmd0aDpudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsIFxyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsIFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLCBcclxuICAgIGxvZ091dEVycm9yOiBudWxsLCBcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwRXJyb3JSZWFzb246IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICBtZToge30sXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUwgPSAnTE9BRF9NWV9JTkZPX0ZBSUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTElLRV9VTkxJS0VfSU5GT19SRVFVU0VUID0gJ1NFVF9MSUtFX1VOTElLRV9JTkZPX1JFUVVTRVQnO1xyXG5leHBvcnQgY29uc3QgU0VUX0xJS0VfVU5MSUtFX0lORk9fU1VDQ0VTUyA9ICdTRVRfTElLRV9VTkxJS0VfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFVF9MSUtFX1VOTElLRV9JTkZPX0ZBSUxVUkUgPSAnU0VUX0xJS0VfVU5MSUtFX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTF9EVVBMSUNBVEUgPSAnU0lHTl9VUF9GQUlMX0RVUExJQ0FURSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUwgPSAnU0lHTl9VUF9GQUlMJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRU5EID0gJ1NJR05fVVBfRU5EJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlIChzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBvc3RMZW5ndGggPSBhY3Rpb24uZGF0YS5wb3N0SWRzO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5pZCA9IGFjdGlvbi5kYXRhLm1lbWJlcklkO1xyXG4gICAgICAgICAgICAvLyBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkIDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkIDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOiAgICBcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBvc3RMZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5pZCA9IGFjdGlvbi5kYXRhLm1lbWJlcklkO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IHt9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0VORDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yUmVhc29uID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3JSZWFzb24gPSBOT1RfQUxMT1dFRF9EVVBMSUNBVEVfRU1BSUw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3JSZWFzb24gPSBGQUlMX1NJR05fVVBfV0hFTl9TSUdOSU5HX1VQO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBvc3RMZW5ndGgucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICAgICAgLy8gICAgIC8vIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgLy8gICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgICAvLyAgIG1lOiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAvLyAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAgIC8vICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gICAgIC8vIH07XHJcbiAgICAgICAgLy8gY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAvLyAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAvLyAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gICAgIC8vICAgbWU6IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgIC8vICAgICAvLyAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIC8vICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gICAgIC8vIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9