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
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'thelovedaejeon'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'thelovedaejeon'
  }
}); //이전 상태를 action을 통해 다음 상태로 만들어 내는 함수 (불변성을 지키면서)


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
        draft.hasMorePost = draft.mainPosts.length < 50;
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
        draft.mainPosts.unshift(dummyPost(action.data));
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
          post.Comments.unshift(dummyComment(action.data.content));
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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_END, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_FAIL_DUPLICATE, SIGN_UP_FAIL, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var _sagas_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sagas/user */ "./sagas/user.js");
/* harmony import */ var _utils_MsgConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/MsgConstants */ "./utils/MsgConstants.js");
/* harmony import */ var _utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sweetAlertUtils */ "./utils/sweetAlertUtils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {
  followLoading: false,
  // 로그인 시도중
  followDone: false,
  followError: null,
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
  me: null,
  signUpData: {},
  loginData: {}
};
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
};

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: '선준찡',
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: '부기초'
  }, {
    nickname: 'Chanho Lee'
  }, {
    nickname: 'neue zeal'
  }],
  Followers: [{
    nickname: '부기초'
  }, {
    nickname: 'Chanho Lee'
  }, {
    nickname: 'neue zeal'
  }]
});

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
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
      console.log("action.data :: ", action.data);
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
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
      draft.signUpErrorReason = _utils_MsgConstants__WEBPACK_IMPORTED_MODULE_2__["NOT_ALLOWED_DUPLICATE_EMAIL"];
      break;

    case SIGN_UP_FAIL:
      draft.signUpLoading = false;
      draft.signUpError = true;
      draft.signUpErrorReason = _utils_MsgConstants__WEBPACK_IMPORTED_MODULE_2__["FAIL_SIGN_UP_WHEN_SIGNING_UP"];
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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000); // const result = yield call(addPostAPI, action.data);

    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: error.data
    });
  }
}

function loadPostAPI(data) {
  return axios.get('/api/posts', data);
}

function* loadPost(action) {
  try {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10)
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      data: error.data
    });
  }
}

function removePostAPI(data) {
  return axios.post('/api/post', data);
}

function* removePost(action) {
  try {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(addPostAPI, action.data);

    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: error.data
    });
  }
}

function addCommentAPI(data) {
  return axios.post('/api/post', data);
}

function* addComment(action) {
  try {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(addPostAPI, action.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: error.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment); // 첫번째것만 하고 싶으면 takeLeading
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
/*! exports provided: FAIL, SUCCESS, DUPLICATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAIL", function() { return FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE", function() { return DUPLICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sweetAlertUtils */ "./utils/sweetAlertUtils.js");




const FAIL = "FAIL";
const SUCCESS = "SUCCESS";
const DUPLICATE = "DUPLICATE";

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* login(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    console.log(result);

    if (result.data.statusCode != 200) {
      Object(_utils_sweetAlertUtils__WEBPACK_IMPORTED_MODULE_3__["warningMsg"])(result.data.responseMessage);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
        data: result.data
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: error.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* logout() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: error.data
    });
  }
}

function signUpAPI(data) {
  let test = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/member', data);
  return test;
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 

    if (result.data === SUCCESS) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
      });
    } else if (result.data === DUPLICATE) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAIL_DUPLICATE"]
      });
    } else if (result.data === FAIL) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: SIGN_UP_FAIL
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: error.data
    });
  }
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogOut() {
  // yield takeEvery('LOG_OUT_REQUEST', logout); // 여러번 클릭해도 그만큼 응답이 감
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logout); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
  // yield throttle('LOG_OUT_REQUREST', logout, 10000); // 얼마동안 한번만 요청을 보내도록 제한 가능
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL01zZ0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zd2VldEFsZXJ0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImNoYW5nZU5pY2tuYW1lIiwiZGF0YSIsInR5cGUiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiaW1hZ2VVcmwiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImFkZFBvc3QiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJmaW5kIiwicG9zdElkIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJzaWduVXBFcnJvclJlYXNvbiIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJTSUdOX1VQX0VORCIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfRkFJTF9EVVBMSUNBVEUiLCJTSUdOX1VQX0ZBSUwiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJOT1RfQUxMT1dFRF9EVVBMSUNBVEVfRU1BSUwiLCJGQUlMX1NJR05fVVBfV0hFTl9TSUdOSU5HX1VQIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJyb290c2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsImRlbGF5IiwicHV0IiwibG9hZFBvc3RBUEkiLCJnZXQiLCJsb2FkUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwiRkFJTCIsIlNVQ0NFU1MiLCJEVVBMSUNBVEUiLCJsb2dJbkFQSSIsImxvZ2luIiwicmVzdWx0IiwiY2FsbCIsInN0YXR1c0NvZGUiLCJ3YXJuaW5nTXNnIiwicmVzcG9uc2VNZXNzYWdlIiwibG9nT3V0QVBJIiwibG9nb3V0Iiwic2lnblVwQVBJIiwidGVzdCIsInNpZ25VcCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuRm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhV2l0aE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInRleHQiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsImNvbmZpcm1CdXR0b25UZXh0Iiwic3VjY2Vzc01zZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDM0Isc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQU0sZUFBTyxF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anMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TWluaVByb2plY3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz4gXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiAgICBcclxuQXBwLnByb3BUeXBlcyA9e1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbi8vYXN5bmMgYWN0aW9uIGNyZWF0b3JcclxuXHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZXMsIHsgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IHsgQ29uc29sZVNxbE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6ZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6IFt7IFxyXG4gICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKSxcclxuICAgIH1dLFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICd0aGVsb3ZlZGFlamVvbicsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAndGhlbG92ZWRhZWplb24nLFxyXG4gICAgfSxcclxufSlcclxuXHJcbi8v7J207KCEIOyDge2DnOulvCBhY3Rpb27snYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJggKOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2UgKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXsgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9ZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IERVUExJQ0FURSwgU1VDQ0VTUyB9IGZyb20gXCIuLi9zYWdhcy91c2VyXCI7XHJcbmltcG9ydCB7IEZBSUxfU0lHTl9VUF9XSEVOX1NJR05JTkdfVVAsIE5PVF9BTExPV0VEX0RVUExJQ0FURV9FTUFJTCB9IGZyb20gXCIuLi91dGlscy9Nc2dDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgd2FybmluZ01zZyB9IGZyb20gXCIuLi91dGlscy9zd2VldEFsZXJ0VXRpbHNcIjtcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLCBcclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLCBcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLCBcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSwgXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCwgXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcEVycm9yUmVhc29uOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9FTkQgPSAnU0lHTl9VUF9FTkQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxfRFVQTElDQVRFID0gJ1NJR05fVVBfRkFJTF9EVVBMSUNBVEUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMID0gJ1NJR05fVVBfRkFJTCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIG5pY2tuYW1lOiAn7ISg7KSA7LChJyxcclxuICAgIGlkOiAxLFxyXG4gICAgUG9zdHM6IFt7IGlkOiAxIH0gXSxcclxuICAgIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIJyB9LCB7IG5pY2tuYW1lOiAnQ2hhbmhvIExlZScgfSwgeyBuaWNrbmFtZTogJ25ldWUgemVhbCcgfV0sXHJcbiAgICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIJyB9LCB7IG5pY2tuYW1lOiAnQ2hhbmhvIExlZScgfSwgeyBuaWNrbmFtZTogJ25ldWUgemVhbCcgfV0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlIChzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZCA6IGFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24uZGF0YSA6OiBcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRU5EOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3JSZWFzb24gPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTF9EVVBMSUNBVEU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvclJlYXNvbiA9IE5PVF9BTExPV0VEX0RVUExJQ0FURV9FTUFJTDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUw6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvclJlYXNvbiA9IEZBSUxfU0lHTl9VUF9XSEVOX1NJR05JTkdfVVA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIC8vICAgbWU6IHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLy8gICBtZToge1xyXG4gICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsIi8vc2FnYeydmCBlZmZlY3Rz66GcIGFsbCwgZm9yaywgY2FsbCwgcHV07J20IOyeiOuLpC4gXHJcbi8vZm9yaywgY2FsbCAtIGdlbmVyYXRl7ZWo7IiY66W8IOyLpO2Wie2VnOuLpC4gY2FsbOydgCDrj5nquLDtlajsiJgsIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpxcclxuLy95aWVsZCAtIOq3uOqzs+yXkOyEnCDrqYjstpjri6QuIFxyXG4vL3B1dCAtIGRpc3BhdGNo65286rOgIOyDneqwge2VmOuptCDtjrjtlZjri6QuIFxyXG5pbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RzYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSwgLy8gZm9ya+uMgOyLoOyXkCBjYWxs66GcIOyCrOyaqeuPhCDqsIDriqUuIOyhsOq4iCDssKjsnbTqsIAg7J6I64ukLiBcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgZGVsYXksIGZvcmssIGFsbCwgdGFrZUxhdGVzdCwgcHV0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULCBcclxuICAgIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBBRERfUE9TVF9GQUlMVVJFLCBcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsIFxyXG4gICAgQUREX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBBRERfUE9TVF9UT19NRSwgXHJcbiAgICBnZW5lcmF0ZUR1bW15UG9zdCwgXHJcbiAgICBMT0FEX1BPU1RfRkFJTFVSRSwgXHJcbiAgICBMT0FEX1BPU1RfUkVRVUVTVCwgXHJcbiAgICBMT0FEX1BPU1RfU1VDQ0VTUywgXHJcbiAgICBSRU1PVkVfUE9TVF9GQUlMVVJFLCBcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFxyXG4gICAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyBcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRlbGF5KDIwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7IC8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLCBcclxuICAgIF0pXHJcbn07IiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIGRlbGF5LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9GQUlMVVJFLCBcclxuICAgIExPR19JTl9SRVFVRVNULCBcclxuICAgIExPR19JTl9TVUNDRVNTLCBcclxuICAgIExPR19PVVRfRkFJTFVSRSwgXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsIFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLCBcclxuICAgIFNJR05fVVBfU1VDQ0VTUywgXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsIFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsIFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCwgXHJcbiAgICBGT0xMT1dfRkFJTFVSRSwgXHJcbiAgICBGT0xMT1dfU1VDQ0VTUywgXHJcbiAgICBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfRkFJTF9EVVBMSUNBVEVcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyB3YXJuaW5nTXNnIH0gZnJvbSBcIi4uL3V0aWxzL3N3ZWV0QWxlcnRVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZBSUwgPSBcIkZBSUxcIjtcclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1MgPSBcIlNVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IERVUExJQ0FURSA9IFwiRFVQTElDQVRFXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1c0NvZGUgIT0gMjAwKXtcclxuICAgICAgICAgICAgd2FybmluZ01zZyhyZXN1bHQuZGF0YS5yZXNwb25zZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgbGV0IHRlc3QgPSBheGlvcy5wb3N0KCcvYXBpL21lbWJlcicsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzsnpDrpqzrtoDthLDripQg7ZWo7IiY7J2YIOunpOqwnOuzgOyImOqwgCDsmKjri6QuIFxyXG4gICAgICAgIGlmKHJlc3VsdC5kYXRhID09PSBTVUNDRVNTKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHJlc3VsdC5kYXRhID09PSBEVVBMSUNBVEUpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMX0RVUExJQ0FURSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHJlc3VsdC5kYXRhID09PSBGQUlMKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOyekOumrOu2gO2EsOuKlCDtlajsiJjsnZgg66ek6rCc67OA7IiY6rCAIOyYqOuLpC4gXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuRm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyDssqvrsojsp7gg7J6Q66as6rCAIO2VqOyImOqzoCDqt7gg64uk7J2M7J6Q66as67aA7YSw64qUIO2VqOyImOydmCDrp6TqsJzrs4DsiJjqsIAg7Jio64ukLiBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTsgLy8gTE9HX0lO7J20652864qUIGFjdGlvbuydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg66eQXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTsgLy8gTE9HX0lO7J20652864qUIGFjdGlvbuydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg66eQXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dpbik7IC8vIExPR19JTuydtOudvOuKlCBhY3Rpb27snbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOunkFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIC8vIHlpZWxkIHRha2VFdmVyeSgnTE9HX09VVF9SRVFVRVNUJywgbG9nb3V0KTsgLy8g7Jes65+s67KIIO2BtOumre2VtOuPhCDqt7jrp4ztgbwg7J2R64u17J20IOqwkFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ291dCk7IC8v64+Z7Iuc7JeQIOyalOyyreydtCDsl6zrn6zrsogg65Ok7Ja07JqU66m0IOuniOyngOunieq6vOunjCDsi6TtlontlZzri6QuIOydkeuLteydhCDst6jshoztlZjsp4Ag7JqU7LKt7J2AIOy3qOyGjO2VmOyngCDslYrsnYxcclxuICAgIC8vIHlpZWxkIHRocm90dGxlKCdMT0dfT1VUX1JFUVVSRVNUJywgbG9nb3V0LCAxMDAwMCk7IC8vIOyWvOuniOuPmeyViCDtlZzrsojrp4wg7JqU7LKt7J2EIOuztOuCtOuPhOuhnSDsoJztlZwg6rCA64qlXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7IC8v64+Z7Iuc7JeQIOyalOyyreydtCDsl6zrn6zrsogg65Ok7Ja07JqU66m0IOuniOyngOunieq6vOunjCDsi6TtlontlZzri6QuIOydkeuLteydhCDst6jshoztlZjsp4Ag7JqU7LKt7J2AIOy3qOyGjO2VmOyngCDslYrsnYxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYVdpdGhNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FXaXRoTWlkZGxld2FyZSgpO1xyXG4gICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwgeyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCd9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwiZXhwb3J0IGNvbnN0IE5PVF9BTExPV0VEX0RVUExJQ0FURV9FTUFJTCA9IFwi7KSR67O165CcIOydtOuplOydvOydgCDsgqzsmqntlaAg7IiYIOyXhuyKteuLiOuLpC5cIjtcclxuZXhwb3J0IGNvbnN0IEZBSUxfU0lHTl9VUF9XSEVOX1NJR05JTkdfVVAgPSBcIu2ajOybkOqwgOyeheykkSDsmKTrpZjqsIAg67Cc7IOd7ZaI7Iq164uI64ukLiDri6Tsi5wg7Iuc64+E7ZW07KO87IS47JqUXCI7IiwiLy8gRVM2IE1vZHVsZXMgb3IgVHlwZVNjcmlwdFxyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5leHBvcnQgY29uc3Qgd2FybmluZ01zZyA9IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6ICdFcnJvciEnLFxyXG4gICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09rJyxcclxuICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NNc2cgPSBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiAnU3VjY2VzcyEnLFxyXG4gICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2snXHJcbiAgICB9KVxyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=