webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInBvc3RMZW5ndGgiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwic2lnblVwRXJyb3JSZWFzb24iLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiU0lHTl9VUF9FTkQiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX0ZBSUxfRFVQTElDQVRFIiwiU0lHTl9VUF9GQUlMIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwiRm9sbG93aW5ncyIsInB1c2giLCJpZCIsImZpbHRlciIsInYiLCJsb2dJbiIsIk5PVF9BTExPV0VEX0RVUExJQ0FURV9FTUFJTCIsIkZBSUxfU0lHTl9VUF9XSEVOX1NJR05JTkdfVVAiLCJjb25zb2xlIiwibG9nIiwiUG9zdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsbUJBQWlCLEVBQUUsS0FESztBQUNFO0FBQzFCQyxnQkFBYyxFQUFFLEtBRlE7QUFHeEJDLGlCQUFlLEVBQUUsSUFITztBQUl4QkMsZUFBYSxFQUFFLEtBSlM7QUFJRjtBQUN0QkMsWUFBVSxFQUFFLEtBTFk7QUFNeEJDLGFBQVcsRUFBRSxJQU5XO0FBT3hCQyxZQUFVLEVBQUMsSUFQYTtBQVF4QkMsaUJBQWUsRUFBRSxLQVJPO0FBUUE7QUFDeEJDLGNBQVksRUFBRSxLQVRVO0FBVXhCQyxlQUFhLEVBQUUsSUFWUztBQVd4QkMsY0FBWSxFQUFFLEtBWFU7QUFXSDtBQUNyQkMsV0FBUyxFQUFFLEtBWmE7QUFheEJDLFlBQVUsRUFBRSxJQWJZO0FBY3hCQyxlQUFhLEVBQUUsS0FkUztBQWNGO0FBQ3RCQyxZQUFVLEVBQUUs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QUFNLENBQUNHLEtBQW5DO0FBQ0E7O0FBQ0osU0FBS1gsY0FBTDtBQUNJb0IsYUFBTyxDQUFDQyxHQUFSLENBQVliLE1BQVosRUFESixDQUVJOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0osU0FBS1AsaUJBQUw7QUFDSVMsV0FBSyxDQUFDckMsRUFBTixDQUFTaUQsS0FBVCxHQUFpQlosS0FBSyxDQUFDckMsRUFBTixDQUFTaUQsS0FBVCxDQUFlUCxNQUFmLENBQXVCQyxDQUFELElBQU9BLENBQUMsQ0FBQ0YsRUFBRixLQUFTTixNQUFNLENBQUNMLElBQTdDLENBQWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSjtBQUNJO0FBdElSO0FBd0lILENBekl3RCxDQUF6RDs7QUEySWVHLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBhZWZlZjdiYjE3ZDQ1MTViMmNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgRkFJTF9TSUdOX1VQX1dIRU5fU0lHTklOR19VUCwgTk9UX0FMTE9XRURfRFVQTElDQVRFX0VNQUlMIH0gZnJvbSBcIi4uL3V0aWxzL01zZ0NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLBcclxuICAgIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICAgIGxvYWRNeUluZm9FcnJvcjogbnVsbCwgXHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjogbnVsbCwgXHJcbiAgICBwb3N0TGVuZ3RoOm51bGwsXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCwgXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCwgXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsIFxyXG4gICAgbG9nT3V0RXJyb3I6IG51bGwsIFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBFcnJvclJlYXNvbjogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICAgIG1lOiB7fSxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufSBcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTCA9ICdMT0FEX01ZX0lORk9fRkFJTCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9FTkQgPSAnU0lHTl9VUF9FTkQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFID0gJ1NJR05fVVBfRkFJTF9EVVBMSUNBVEUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMID0gJ1NJR05fVVBfRkFJTCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgLi4uZGF0YSxcclxuLy8gICAgIG5pY2tuYW1lOiAn7ISg7KSA7LChJyxcclxuLy8gICAgIGlkOiAxLFxyXG4vLyAgICAgUG9zdHM6IFt7IGlkOiAxIH0gXSxcclxuLy8gICAgIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIJyB9LCB7IG5pY2tuYW1lOiAnQ2hhbmhvIExlZScgfSwgeyBuaWNrbmFtZTogJ25ldWUgemVhbCcgfV0sXHJcbi8vICAgICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIJyB9LCB7IG5pY2tuYW1lOiAnQ2hhbmhvIExlZScgfSwgeyBuaWNrbmFtZTogJ25ldWUgemVhbCcgfV0sXHJcbi8vIH0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlIChzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBvc3RMZW5ndGggPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAvLyBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkIDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkIDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOiAgICBcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBvc3RMZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IHt9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0VORDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yUmVhc29uID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3JSZWFzb24gPSBOT1RfQUxMT1dFRF9EVVBMSUNBVEVfRU1BSUw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3JSZWFzb24gPSBGQUlMX1NJR05fVVBfV0hFTl9TSUdOSU5HX1VQO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICAgICAgICAgIC8vIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgIG1lOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIC8vICAgbWU6IHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAvLyAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9