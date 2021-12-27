webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_middleComponent_Post_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/middleComponent/Post/PostCard */ "./components/middleComponent/Post/PostCard.js");
/* harmony import */ var _components_middleComponent_Post_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/middleComponent/Post/PostForm */ "./components/middleComponent/Post/PostForm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\miniproject\\front\\pages\\index.js",
    _s = $RefreshSig$();










const Home = () => {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePost,
    loadPostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("useEffect in index.js");
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_MY_INFO_REQUEST"]
    }); // dispatch({
    //     type: LOAD_POST_REQUEST,
    // });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POST_REQUEST"]
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  console.log(mainPosts);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_middleComponent_Post_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 20
    }, undefined), mainPosts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_middleComponent_Post_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      post: post
    }, post.id, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 38
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, undefined);
};

_s(Home, "ODgf6fy0otDsblXoC51F3Yt4QWI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdExvYWRpbmciLCJwb3N0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxJQUFsQixDQUExQjtBQUNBLFFBQU07QUFBRUMsYUFBRjtBQUFhQyxlQUFiO0FBQTBCQztBQUExQixNQUE4Q0wsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNLLElBQWxCLENBQS9EO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBWixZQUFRLENBQUM7QUFDTGEsVUFBSSxFQUFFQyxtRUFBb0JBO0FBRHJCLEtBQUQsQ0FBUixDQUZZLENBS1o7QUFDQTtBQUNBO0FBQ0gsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBSix5REFBUyxDQUFDLE1BQU07QUFDWixhQUFTSyxRQUFULEdBQW9CO0FBQ2hCLFVBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUExQyxHQUF5REYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUF6QixHQUF5QyxHQUF0RyxFQUEwRztBQUN0RyxZQUFJZCxXQUFXLElBQUksQ0FBQ0MsZUFBcEIsRUFBcUM7QUFDakNSLGtCQUFRLENBQUM7QUFDTGEsZ0JBQUksRUFBRVMsZ0VBQWlCQTtBQURsQixXQUFELENBQVI7QUFHSDtBQUNKO0FBQ0o7O0FBQ0ROLFVBQU0sQ0FBQ08sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NSLFFBQWxDO0FBQ0EsV0FBTyxNQUFNO0FBQ1RDLFlBQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNULFFBQXJDO0FBQ0gsS0FGRDtBQUdILEdBZFEsRUFjTixFQWRNLENBQVQ7QUFlQUosU0FBTyxDQUFDQyxHQUFSLENBQVlOLFNBQVo7QUFDQSxzQkFDSSxxRUFBQyw2REFBRDtBQUFBLGVBQ0tKLEVBQUUsaUJBQUkscUVBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWCxFQUVLSSxTQUFTLENBQUNtQixHQUFWLENBQWVoQixJQUFELGlCQUFVLHFFQUFDLGlGQUFEO0FBQXdCLFVBQUksRUFBRUE7QUFBOUIsT0FBZUEsSUFBSSxDQUFDaUIsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBeEIsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU1ILENBckNEOztHQUFNM0IsSTtVQUNlRSx1RCxFQUNGRSx1RCxFQUNxQ0EsdUQ7OztLQUhsREosSTtBQXVDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjUyZWQ1NTM1NjFhNjc3NjI4ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL21pZGRsZUNvbXBvbmVudC9Qb3N0L1Bvc3RDYXJkXCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9taWRkbGVDb21wb25lbnQvUG9zdC9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZUVmZmVjdCBpbiBpbmRleC5qc1wiKVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1RcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBkaXNwYXRjaCh7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gIDMwMCl7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0TG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zb2xlLmxvZyhtYWluUG9zdHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPil9XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyAiXSwic291cmNlUm9vdCI6IiJ9