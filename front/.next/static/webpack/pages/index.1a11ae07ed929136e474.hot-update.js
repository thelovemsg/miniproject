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
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POST_REQUEST"]
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdExvYWRpbmciLCJwb3N0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfUE9TVF9SRVFVRVNUIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxJQUFsQixDQUExQjtBQUNBLFFBQU07QUFBRUMsYUFBRjtBQUFhQyxlQUFiO0FBQTBCQztBQUExQixNQUE4Q0wsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNLLElBQWxCLENBQS9EO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBWixZQUFRLENBQUM7QUFDTGEsVUFBSSxFQUFFQyxtRUFBb0JBO0FBRHJCLEtBQUQsQ0FBUjtBQUdBZCxZQUFRLENBQUM7QUFDTGEsVUFBSSxFQUFFRSxnRUFBaUJBO0FBRGxCLEtBQUQsQ0FBUjtBQUdILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQUwseURBQVMsQ0FBQyxNQUFNO0FBQ1osYUFBU00sUUFBVCxHQUFvQjtBQUNoQixVQUFJQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBMUMsR0FBeURGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBeUMsR0FBdEcsRUFBMEc7QUFDdEcsWUFBSWYsV0FBVyxJQUFJLENBQUNDLGVBQXBCLEVBQXFDO0FBQ2pDUixrQkFBUSxDQUFDO0FBQ0xhLGdCQUFJLEVBQUVFLGdFQUFpQkE7QUFEbEIsV0FBRCxDQUFSO0FBR0g7QUFDSjtBQUNKOztBQUNERSxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUCxRQUFsQztBQUNBLFdBQU8sTUFBTTtBQUNUQyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUixRQUFyQztBQUNILEtBRkQ7QUFHSCxHQWRRLEVBY04sRUFkTSxDQUFUO0FBZUFMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaO0FBQ0Esc0JBQ0kscUVBQUMsNkRBQUQ7QUFBQSxlQUNLSixFQUFFLGlCQUFJLHFFQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFgsRUFFS0ksU0FBUyxDQUFDbUIsR0FBVixDQUFlaEIsSUFBRCxpQkFBVSxxRUFBQyxpRkFBRDtBQUF3QixVQUFJLEVBQUVBO0FBQTlCLE9BQWVBLElBQUksQ0FBQ2lCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXhCLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFNSCxDQXJDRDs7R0FBTTNCLEk7VUFDZUUsdUQsRUFDRkUsdUQsRUFDcUNBLHVEOzs7S0FIbERKLEk7QUF1Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFhMTFhZTA3ZWQ5MjkxMzZlNDc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9taWRkbGVDb21wb25lbnQvUG9zdC9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWlkZGxlQ29tcG9uZW50L1Bvc3QvUG9zdEZvcm1cIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VFZmZlY3QgaW4gaW5kZXguanNcIilcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNUXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtICAzMDApe1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc01vcmVQb3N0ICYmICFsb2FkUG9zdExvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc29sZS5sb2cobWFpblBvc3RzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==