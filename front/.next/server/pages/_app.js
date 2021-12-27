module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\miniproject\\front\\pages\\_app.js";







const App = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("title", {
        children: "MiniProject"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //async action creator
// action creator

const changeNickname = data => {
  return {
    type: 'CHANGE_NICKNAME',
    data
  };
};

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);




const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
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
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePost = false;
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
        draft.mainPosts.unshift(action);
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

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAIL, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_END, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_FAIL_DUPLICATE, SIGN_UP_FAIL, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootsaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
//saga의 effects로 all, fork, call, put이 있다. 
//fork, call - generate함수를 실행한다. call은 동기함수, fork는 비동기 함수 호출
//yield - 그곳에서 멈춘다. 
//put - dispatch라고 생각하면 편하다. 




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:8080';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootsaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), // fork대신에 call로 사용도 가능. 조금 차이가 있다. 
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


 // import Axios from 'axios';
// import qs from 'query-string';




const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_3___default.a();

function addPostAPI(data) {
  const accessToken = cookies.get("accessToken");
  const userEmail = cookies.get("userEmail");
  const newObj = {
    description: data,
    email: userEmail
  };
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/auth/post', newObj, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  });
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    console.log("result in addPost :: ", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: result.data.postId
    });
  } catch (error) {
    console.log(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_FAILURE"],
      data: error.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/posts');
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI);
    console.log(result);
    console.log("result.data :: ", result.data);
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
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(addPostAPI, action.data);

    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
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
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post/${data.postId}/comment', data);
}

function* addComment(action) {
  try {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(addPostAPI, action.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_FAILURE"],
      data: error.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"], addPost); // 첫번째것만 하고 싶으면 takeLeading
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}
;

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/sweetAlertUtils */ "./utils/sweetAlertUtils.js");





const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_2___default.a();

function loadMyInfoAPI() {
  const accessToken = cookies.get("accessToken");
  const userEmail = cookies.get("userEmail"); // return axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const data = {
    email: userEmail
  };
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/member', data, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  });
}

function* loadMyInfo(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);

    if (response.data != "") {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
        data: response.data.result.postDtoIds
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_FAIL"],
      error: error.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/login', data);
}

function* login(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);

    if (result.status == 401) {
      Object(_utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_4__["warningMsg"])("로그인에 실패했습니다.");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"]
      });
    } else {
      cookies.set("accessToken", result.data.accessToken, {
        path: '/'
      });
      cookies.set("refreshToken", result.data.accessToken, {
        path: '/'
      });
      cookies.set("userEmail", action.data.email);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"]
      });
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);

      if (response.data != "") {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
          data: response.data.result.postDtoIds
        });
      }
    }
  } catch (error) {
    Object(_utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_4__["warningMsg"])("로그인에 실패했습니다!");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
      error: error.data
    });
  }
}

function* logout() {
  try {
    cookies.remove('accessToken');
    cookies.remove('refreshToken');
    cookies.remove('userEmail');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
      error: error.data
    });
  }
}

function signUpAPI(data) {
  let test = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/signup', data);
  return test;
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 

    if (result.data.status === DUPLICATE) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAIL_DUPLICATE"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
      error: error.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(logInAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
      error: error.data
    });
  }
}

function unFollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(logInAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
      error: error.data
    });
  }
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"], loadMyInfo); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], login); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogOut() {
  // yield takeEvery('LOG_OUT_REQUEST', logout); // 여러번 클릭해도 그만큼 응답이 감
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logout); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
  // yield throttle('LOG_OUT_REQUREST', logout, 10000); // 얼마동안 한번만 요청을 보내도록 제한 가능
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./utils/MsgConstants.js":
/*!*******************************!*\
  !*** ./utils/MsgConstants.js ***!
  \*******************************/
/*! exports provided: NOT_ALLOWED_DUPLICATE_EMAIL, FAIL_SIGN_UP_WHEN_SIGNING_UP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_ALLOWED_DUPLICATE_EMAIL", function() { return NOT_ALLOWED_DUPLICATE_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAIL_SIGN_UP_WHEN_SIGNING_UP", function() { return FAIL_SIGN_UP_WHEN_SIGNING_UP; });
const NOT_ALLOWED_DUPLICATE_EMAIL = "중복된 이메일은 사용할 수 없습니다.";
const FAIL_SIGN_UP_WHEN_SIGNING_UP = "회원가입중 오류가 발생했습니다. 다시 시도해주세요";

/***/ }),

/***/ "./utils/sweetAlertUtils.js":
/*!**********************************!*\
  !*** ./utils/sweetAlertUtils.js ***!
  \**********************************/
/*! exports provided: warningMsg, successMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningMsg", function() { return warningMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successMsg", function() { return successMsg; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
// ES6 Modules or TypeScript

const warningMsg = function (text) {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    title: 'Error!',
    text: text,
    icon: 'error',
    confirmButtonText: 'Ok'
  });
};
const successMsg = function (text) {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    title: 'Success!',
    text: text,
    icon: 'success',
    confirmButtonText: 'Ok'
  });
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL01zZ0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zd2VldEFsZXJ0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjaGFuZ2VOaWNrbmFtZSIsImRhdGEiLCJ0eXBlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdCIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsImltYWdlVXJsIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJhZGRQb3N0IiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiZmluZCIsInBvc3RJZCIsImNvbW1lbnRMaXN0IiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJwb3N0TGVuZ3RoIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsInNpZ25VcEVycm9yUmVhc29uIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIlNJR05fVVBfRU5EIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9VUF9GQUlMX0RVUExJQ0FURSIsIlNJR05fVVBfRkFJTCIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJGb2xsb3dpbmdzIiwicHVzaCIsImxvZ0luIiwiTk9UX0FMTE9XRURfRFVQTElDQVRFX0VNQUlMIiwiRkFJTF9TSUdOX1VQX1dIRU5fU0lHTklOR19VUCIsImNvbnNvbGUiLCJsb2ciLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdHNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImNvb2tpZXMiLCJDb29raWVzIiwiYWRkUG9zdEFQSSIsImFjY2Vzc1Rva2VuIiwiZ2V0IiwidXNlckVtYWlsIiwibmV3T2JqIiwiZGVzY3JpcHRpb24iLCJlbWFpbCIsImhlYWRlcnMiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwibG9hZFBvc3RBUEkiLCJsb2FkUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiZGVsYXkiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsInJlc3BvbnNlIiwicG9zdER0b0lkcyIsImxvZ0luQVBJIiwibG9naW4iLCJzdGF0dXMiLCJ3YXJuaW5nTXNnIiwic2V0IiwicGF0aCIsImxvZ291dCIsInJlbW92ZSIsInNpZ25VcEFQSSIsInRlc3QiLCJzaWduVXAiLCJEVVBMSUNBVEUiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bkZvbGxvd0FQSSIsInVuZm9sbG93Iiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYVdpdGhNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJ0ZXh0IiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJjb25maXJtQnV0dG9uVGV4dCIsInN1Y2Nlc3NNc2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk1pbmlQcm9qZWN0PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+IFxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gICAgXHJcbkFwcC5wcm9wVHlwZXMgPXtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vL2FzeW5jIGFjdGlvbiBjcmVhdG9yXHJcblxyXG4vLyBhY3Rpb24gY3JlYXRvclxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2VzLCB7IHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmltcG9ydCB7IENvbnNvbGVTcWxPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGhhc01vcmVQb3N0OiB0cnVlLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OmZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOiBbeyBcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlVXJsKCksXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAndGhlbG92ZWRhZWplb24nLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIEltYWdlczogW10sXHJcbi8vICAgICBDb21tZW50czogW10sXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgY29udGVudDogZGF0YSxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogJ3RoZWxvdmVkYWVqZW9uJyxcclxuLy8gICAgIH0sXHJcbi8vIH0pXHJcblxyXG4vL+ydtOyghCDsg4Htg5zrpbwgYWN0aW9u7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtCDrgrTripQg7ZWo7IiYICjrtojrs4DshLHsnYQg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlIChzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSl7IFxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LmNvbW1lbnRMaXN0ID0ge307XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgICAgICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgICAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBGQUlMX1NJR05fVVBfV0hFTl9TSUdOSU5HX1VQLCBOT1RfQUxMT1dFRF9EVVBMSUNBVEVfRU1BSUwgfSBmcm9tIFwiLi4vdXRpbHMvTXNnQ29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sFxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLCBcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLCBcclxuICAgIHBvc3RMZW5ndGg6bnVsbCxcclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLCBcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLCBcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSwgXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCwgXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcEVycm9yUmVhc29uOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgbWU6IHt9LFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMID0gJ0xPQURfTVlfSU5GT19GQUlMJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0VORCA9ICdTSUdOX1VQX0VORCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTF9EVVBMSUNBVEUgPSAnU0lHTl9VUF9GQUlMX0RVUExJQ0FURSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUwgPSAnU0lHTl9VUF9GQUlMJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICAuLi5kYXRhLFxyXG4vLyAgICAgbmlja25hbWU6ICfshKDspIDssKEnLFxyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBQb3N0czogW3sgaWQ6IDEgfSBdLFxyXG4vLyAgICAgRm9sbG93aW5nczogW3sgbmlja25hbWU6ICfrtoDquLDstIgnIH0sIHsgbmlja25hbWU6ICdDaGFuaG8gTGVlJyB9LCB7IG5pY2tuYW1lOiAnbmV1ZSB6ZWFsJyB9XSxcclxuLy8gICAgIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICfrtoDquLDstIgnIH0sIHsgbmlja25hbWU6ICdDaGFuaG8gTGVlJyB9LCB7IG5pY2tuYW1lOiAnbmV1ZSB6ZWFsJyB9XSxcclxuLy8gfSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2UgKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUucG9zdExlbmd0aCA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIC8vIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQgOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUw6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQgOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6ICAgIFxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUucG9zdExlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0ge307XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRU5EOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3JSZWFzb24gPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTF9EVVBMSUNBVEU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvclJlYXNvbiA9IE5PVF9BTExPV0VEX0RVUExJQ0FURV9FTUFJTDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUw6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvclJlYXNvbiA9IEZBSUxfU0lHTl9VUF9XSEVOX1NJR05JTkdfVVA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgICAgICAgICAgLy8gZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIC8vICAgbWU6IHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLy8gICBtZToge1xyXG4gICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsIi8vc2FnYeydmCBlZmZlY3Rz66GcIGFsbCwgZm9yaywgY2FsbCwgcHV07J20IOyeiOuLpC4gXHJcbi8vZm9yaywgY2FsbCAtIGdlbmVyYXRl7ZWo7IiY66W8IOyLpO2Wie2VnOuLpC4gY2FsbOydgCDrj5nquLDtlajsiJgsIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpxcclxuLy95aWVsZCAtIOq3uOqzs+yXkOyEnCDrqYjstpjri6QuIFxyXG4vL3B1dCAtIGRpc3BhdGNo65286rOgIOyDneqwge2VmOuptCDtjrjtlZjri6QuIFxyXG5pbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RzYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSwgLy8gZm9ya+uMgOyLoOyXkCBjYWxs66GcIOyCrOyaqeuPhCDqsIDriqUuIOyhsOq4iCDssKjsnbTqsIAg7J6I64ukLiBcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgZGVsYXksIGZvcmssIGFsbCwgdGFrZUxhdGVzdCwgcHV0LCBjYWxsfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLCBcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsIFxyXG4gICAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgQUREX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLCBcclxuICAgIEFERF9QT1NUX1RPX01FLCBcclxuICAgIGdlbmVyYXRlRHVtbXlQb3N0LCBcclxuICAgIExPQURfUE9TVF9GQUlMVVJFLCBcclxuICAgIExPQURfUE9TVF9SRVFVRVNULCBcclxuICAgIExPQURfUE9TVF9TVUNDRVNTLCBcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTIFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBkYXRhLFxyXG4gICAgICAgIGVtYWlsIDogdXNlckVtYWlsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvcG9zdCcsIG5ld09iaix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBpbiBhZGRQb3N0IDo6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnBvc3RJZCxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9hcGkvcG9zdHMnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0LmRhdGEgOjogXCIsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEucmVzdWx0LFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IFxyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnQnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLCBcclxuICAgIF0pXHJcbn07IiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIGRlbGF5LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fRkFJTFVSRSwgXHJcbiAgICBMT0dfSU5fUkVRVUVTVCwgXHJcbiAgICBMT0dfSU5fU1VDQ0VTUywgXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsIFxyXG4gICAgTE9HX09VVF9SRVFVRVNULCBcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSwgXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsIFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULCBcclxuICAgIEZPTExPV19SRVFVRVNULCBcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsIFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsIFxyXG4gICAgRk9MTE9XX1NVQ0NFU1MsIFxyXG4gICAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFLFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgIExPQURfTVlfSU5GT19GQUlMXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgd2FybmluZ01zZyB9IGZyb20gXCIuLi91dGlscy9zd2VldEFsZXJ0VXRpbHNcIjtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gY29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBlbWFpbDogdXNlckVtYWlsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL21lbWJlcicsIGRhdGEse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEucmVzdWx0LnBvc3REdG9JZHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTCxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSA0MDEpe1xyXG4gICAgICAgICAgICB3YXJuaW5nTXNnKFwi66Gc6re47J247JeQIOyLpO2MqO2WiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJhY2Nlc3NUb2tlblwiLCByZXN1bHQuZGF0YS5hY2Nlc3NUb2tlbix7IHBhdGg6ICcvJyB9KTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoXCJyZWZyZXNoVG9rZW5cIiwgcmVzdWx0LmRhdGEuYWNjZXNzVG9rZW4seyBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgICAgIGNvb2tpZXMuc2V0KFwidXNlckVtYWlsXCIsIGFjdGlvbi5kYXRhLmVtYWlsKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLnJlc3VsdC5wb3N0RHRvSWRzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgd2FybmluZ01zZyhcIuuhnOq3uOyduOyXkCDsi6TtjKjtlojsirXri4jri6QhXCIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogbG9nb3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgnYWNjZXNzVG9rZW4nKTtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgncmVmcmVzaFRva2VuJyk7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3VzZXJFbWFpbCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICBsZXQgdGVzdCA9IGF4aW9zLnBvc3QoJy9hdXRoL3NpZ251cCcsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gRFVQTElDQVRFKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTF9EVVBMSUNBVEUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bkZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOyekOumrOu2gO2EsOuKlCDtlajsiJjsnZgg66ek6rCc67OA7IiY6rCAIOyYqOuLpC4gXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTsgLy/rj5nsi5zsl5Ag7JqU7LKt7J20IOyXrOufrOuyiCDrk6TslrTsmpTrqbQg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VnOuLpC4g7J2R64u17J2EIOy3qOyGjO2VmOyngCDsmpTssq3snYAg7Leo7IaM7ZWY7KeAIOyViuydjFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pOyAvLyBMT0dfSU7snbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoCDrlYwg6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrp5BcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICAvLyB5aWVsZCB0YWtlRXZlcnkoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ291dCk7IC8vIOyXrOufrOuyiCDtgbTrpq3tlbTrj4Qg6re466eM7YG8IOydkeuLteydtCDqsJBcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dvdXQpOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbiAgICAvLyB5aWVsZCB0aHJvdHRsZSgnTE9HX09VVF9SRVFVUkVTVCcsIGxvZ291dCwgMTAwMDApOyAvLyDslrzrp4jrj5nslYgg7ZWc67KI66eMIOyalOyyreydhCDrs7TrgrTrj4TroZ0g7KCc7ZWcIOqwgOuKpVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApOyAvL+uPmeyLnOyXkCDsmpTssq3snbQg7Jes65+s67KIIOuTpOyWtOyalOuptCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWc64ukLiDsnZHri7XsnYQg7Leo7IaM7ZWY7KeAIOyalOyyreydgCDst6jshoztlZjsp4Ag7JWK7J2MXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhV2l0aE1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYVdpdGhNaWRkbGV3YXJlKCk7XHJcbiAgICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJleHBvcnQgY29uc3QgTk9UX0FMTE9XRURfRFVQTElDQVRFX0VNQUlMID0gXCLspJHrs7XrkJwg7J2066mU7J287J2AIOyCrOyaqe2VoCDsiJgg7JeG7Iq164uI64ukLlwiO1xyXG5leHBvcnQgY29uc3QgRkFJTF9TSUdOX1VQX1dIRU5fU0lHTklOR19VUCA9IFwi7ZqM7JuQ6rCA7J6F7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpRcIjsiLCIvLyBFUzYgTW9kdWxlcyBvciBUeXBlU2NyaXB0XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmV4cG9ydCBjb25zdCB3YXJuaW5nTXNnID0gZnVuY3Rpb24odGV4dCkge1xyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogJ0Vycm9yIScsXHJcbiAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2snLFxyXG4gICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3VjY2Vzc01zZyA9IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6ICdTdWNjZXNzIScsXHJcbiAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPaydcclxuICAgIH0pXHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9