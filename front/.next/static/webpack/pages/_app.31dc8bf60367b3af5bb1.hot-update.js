webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAIL, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_END, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_FAIL_DUPLICATE, SIGN_UP_FAIL, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_END", function() { return SIGN_UP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAIL_DUPLICATE", function() { return SIGN_UP_FAIL_DUPLICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAIL", function() { return SIGN_UP_FAIL; });
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
const SIGN_UP_END = 'SIGN_UP_END';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const SIGN_UP_FAIL_DUPLICATE = 'SIGN_UP_FAIL_DUPLICATE';
const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
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
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me.postLength = action.data; // draft.me.Followings.push({id : action.data});

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
      draft.logIn;
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
      console.log(action);
      draft.me.Posts.unshift({
        id: action.data
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInBvc3RMZW5ndGgiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwic2lnblVwRXJyb3JSZWFzb24iLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiU0lHTl9VUF9FTkQiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX0ZBSUxfRFVQTElDQVRFIiwiU0lHTl9VUF9GQUlMIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwiRm9sbG93aW5ncyIsInB1c2giLCJpZCIsImZpbHRlciIsInYiLCJsb2dJbiIsIk5PVF9BTExPV0VEX0RVUExJQ0FURV9FTUFJTCIsIkZBSUxfU0lHTl9VUF9XSEVOX1NJR05JTkdfVVAiLCJjb25zb2xlIiwibG9nIiwiUG9zdHMiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUc7QUFDeEJDLG1CQUFpQixFQUFFLEtBREs7QUFDRTtBQUMxQkMsZ0JBQWMsRUFBRSxLQUZRO0FBR3hCQyxpQkFBZSxFQUFFLElBSE87QUFJeEJDLGVBQWEsRUFBRSxLQUpTO0FBSUY7QUFDdEJDLFlBQVUsRUFBRSxLQUxZO0FBTXhCQyxhQUFXLEVBQUUsSUFOVztBQU94QkMsWUFBVSxFQUFDLElBUGE7QUFReEJDLGlCQUFlLEVBQUUsS0FSTztBQVFBO0FBQ3hCQyxjQUFZLEVBQUUsS0FUVTtBQVV4QkMsZUFBYSxFQUFFLElBVlM7QUFXeEJDLGNBQVksRUFBRSxLQVhVO0FBV0g7QUFDckJDLFdBQVMsRUFBRSxLQVphO0FBYXhCQyxZQUFVLEVBQUUsSUFiWTtBQWN4QkMsZUFBYSxFQUFFLEtBZFM7QUFjRjtBQUN0QkMs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LEdBQTRCb0MsTUFBTSxDQUFDRyxLQUFuQztBQUNBOztBQUNKLFNBQUtYLGNBQUw7QUFDSW9CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFaO0FBQ0FFLFdBQUssQ0FBQ3JDLEVBQU4sQ0FBU2lELEtBQVQsQ0FBZUMsT0FBZixDQUF1QjtBQUFFVCxVQUFFLEVBQUVOLE1BQU0sQ0FBQ0w7QUFBYixPQUF2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0osU0FBS0YsaUJBQUw7QUFDSVMsV0FBSyxDQUFDckMsRUFBTixDQUFTaUQsS0FBVCxHQUFpQlosS0FBSyxDQUFDckMsRUFBTixDQUFTaUQsS0FBVCxDQUFlUCxNQUFmLENBQXVCQyxDQUFELElBQU9BLENBQUMsQ0FBQ0YsRUFBRixLQUFTTixNQUFNLENBQUNMLElBQTdDLENBQWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSjtBQUNJO0FBdElSO0FBd0lILENBekl3RCxDQUF6RDs7QUEySWVHLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzFkYzhiZjYwMzY3YjNhZjViYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBGQUlMX1NJR05fVVBfV0hFTl9TSUdOSU5HX1VQLCBOT1RfQUxMT1dFRF9EVVBMSUNBVEVfRU1BSUwgfSBmcm9tIFwiLi4vdXRpbHMvTXNnQ29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sFxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLCBcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLCBcclxuICAgIHBvc3RMZW5ndGg6bnVsbCxcclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLCBcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLCBcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSwgXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCwgXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcEVycm9yUmVhc29uOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgbWU6IHt9LFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMID0gJ0xPQURfTVlfSU5GT19GQUlMJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0VORCA9ICdTSUdOX1VQX0VORCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTF9EVVBMSUNBVEUgPSAnU0lHTl9VUF9GQUlMX0RVUExJQ0FURSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUwgPSAnU0lHTl9VUF9GQUlMJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICAuLi5kYXRhLFxyXG4vLyAgICAgbmlja25hbWU6ICfshKDspIDssKEnLFxyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBQb3N0czogW3sgaWQ6IDEgfSBdLFxyXG4vLyAgICAgRm9sbG93aW5nczogW3sgbmlja25hbWU6ICfrtoDquLDstIgnIH0sIHsgbmlja25hbWU6ICdDaGFuaG8gTGVlJyB9LCB7IG5pY2tuYW1lOiAnbmV1ZSB6ZWFsJyB9XSxcclxuLy8gICAgIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICfrtoDquLDstIgnIH0sIHsgbmlja25hbWU6ICdDaGFuaG8gTGVlJyB9LCB7IG5pY2tuYW1lOiAnbmV1ZSB6ZWFsJyB9XSxcclxuLy8gfSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2UgKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUucG9zdExlbmd0aCA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIC8vIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQgOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUw6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQgOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6ICAgIFxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUucG9zdExlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0ge307XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRU5EOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3JSZWFzb24gPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTF9EVVBMSUNBVEU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvclJlYXNvbiA9IE5PVF9BTExPV0VEX0RVUExJQ0FURV9FTUFJTDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUw6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvclJlYXNvbiA9IEZBSUxfU0lHTl9VUF9XSEVOX1NJR05JTkdfVVA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIC8vICAgbWU6IHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLy8gICBtZToge1xyXG4gICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=