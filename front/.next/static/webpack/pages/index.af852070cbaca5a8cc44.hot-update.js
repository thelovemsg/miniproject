webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _rightComponent_UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rightComponent/UserProfile */ "./components/rightComponent/UserProfile.js");
/* harmony import */ var _middleComponent_SitesContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleComponent/SitesContent */ "./components/middleComponent/SitesContent.js");
/* harmony import */ var _components_rightComponent_LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/rightComponent/LoginForm */ "./components/rightComponent/LoginForm.js");
/* harmony import */ var _headerComponent_SearchForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./headerComponent/SearchForm */ "./components/headerComponent/SearchForm.js");
/* harmony import */ var _leftComponent_LeftSider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leftComponent/LeftSider */ "./components/leftComponent/LeftSider.js");
/* harmony import */ var _rightComponent_ChattingForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rightComponent/ChattingForm */ "./components/rightComponent/ChattingForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");


var _jsxFileName = "D:\\miniproject\\front\\components\\AppLayout.js",
    _templateObject,
    _templateObject2,
    _templateObject3,
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */



 // 필요한 컴포넌트를 가져온다


var Header = antd__WEBPACK_IMPORTED_MODULE_4__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_4__["Layout"].Content;








var contentStyle = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top:20px;\n"])));
var rightComponentStyle = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-right:20px;\n    height:100%;\n"])));
var globalStyle = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    *{\n        .ant-row {\n            margin-right: 0 !important;\n            margin-left: 0 !important;\n        }\n\n        .ant-col:first-child {\n            padding-left: 0 !important;\n        }\n\n        .ant-col:last-child {\n            padding-right: 0 !important;\n        }\n    }\n"])));

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(function (state) {
    return state.user.isLoggedIn;
  });
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["Global"], {
      style: globalStyle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(Header, {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_headerComponent_SearchForm__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(Content, {
        css: contentStyle,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          gutter: 20,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            xs: 24,
            md: 6,
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_leftComponent_LeftSider__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 28
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            xs: 24,
            md: 12,
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            xs: 24,
            md: 6,
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
              css: rightComponentStyle,
              datatype: {
                isLoggedIn: isLoggedIn
              },
              children: [isLoggedIn ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_rightComponent_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 47
              }, _this) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_rightComponent_LoginForm__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 65
              }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_rightComponent_ChattingForm__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, _this);
};

_s(AppLayout, "wwozkPYuXjHFfszlt2mcSB3o0is=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"]];
});

_c = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c;

$RefreshReg$(_c, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiQ29udGVudCIsImNvbnRlbnRTdHlsZSIsImNzcyIsInJpZ2h0Q29tcG9uZW50U3R5bGUiLCJnbG9iYWxTdHlsZSIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUM4RDs7QUFDOUQ7QUFDQSxJQUFRQSxNQUFSLEdBQTRCQywyQ0FBNUIsQ0FBUUQsTUFBUjtBQUFBLElBQWdCRSxPQUFoQixHQUE0QkQsMkNBQTVCLENBQWdCQyxPQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLFlBQVksR0FBR0MsMERBQUgsdUtBQWxCO0FBSUEsSUFBTUMsbUJBQW1CLEdBQUdELDBEQUFILDZMQUF6QjtBQUtBLElBQU1FLFdBQVcsR0FBR0YsMERBQUgsOGJBQWpCOztBQWlCQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNoQztBQUNBLE1BQU1DLFVBQVUsR0FBR0MsZ0VBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdILFVBQXRCO0FBQUEsR0FBRCxDQUE5QjtBQUNBLFNBQ0ksK0VBQUMsMkNBQUQ7QUFBQSxlQUNJLCtFQUFDLHFEQUFEO0FBQVEsV0FBSyxFQUFFSDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVJLCtFQUFDLE1BQUQ7QUFBQSxnQkFDSSwrRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBS0ksK0VBQUMsMkNBQUQ7QUFBQSxnQkFDSSwrRUFBQyxPQUFEO0FBQVMsV0FBRyxFQUFFSCxZQUFkO0FBQUEsa0JBQ0ksK0VBQUMsd0NBQUQ7QUFBSyxnQkFBTSxFQUFFLEVBQWI7QUFBQSxxQkFDSSwrRUFBQyx3Q0FBRDtBQUFLLGNBQUUsRUFBRSxFQUFUO0FBQWEsY0FBRSxFQUFFLENBQWpCO0FBQUEsc0JBQ0csK0VBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFJSSwrRUFBQyx3Q0FBRDtBQUFLLGNBQUUsRUFBRSxFQUFUO0FBQWEsY0FBRSxFQUFFLEVBQWpCO0FBQUEsc0JBQ0tLO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixFQU9JLCtFQUFDLHdDQUFEO0FBQUssY0FBRSxFQUFFLEVBQVQ7QUFBYSxjQUFFLEVBQUUsQ0FBakI7QUFBQSxzQkFDSTtBQUFLLGlCQUFHLEVBQUVILG1CQUFWO0FBQStCLHNCQUFRLEVBQUU7QUFBQ0ksMEJBQVUsRUFBVkE7QUFBRCxlQUF6QztBQUFBLHlCQUVLQSxVQUFVLEdBQUcsK0VBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBSCxHQUFxQiwrRUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZwQyxFQUdJLCtFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNEJILENBL0JEOztHQUFNRixTO1VBRWlCRyx3RDs7O0tBRmpCSCxTO0FBaUNOQSxTQUFTLENBQUNNLFNBQVYsR0FBc0I7QUFDbEJMLFVBQVEsRUFBRU0saURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURQLENBQXRCO0FBSWVULHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFmODUyMDcwY2JhY2E1YThjYzQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBHbG9iYWwsIGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IExheW91dCwgTWVudSwgSW5wdXQsIFNlbGVjdCwgUm93LCBDb2wgfSBmcm9tICdhbnRkJzsgLy8g7ZWE7JqU7ZWcIOy7tO2PrOuEjO2KuOulvCDqsIDsoLjsmKjri6RcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL3JpZ2h0Q29tcG9uZW50L1VzZXJQcm9maWxlJztcclxuaW1wb3J0IFNpdGVzQ29udGVudCBmcm9tICcuL21pZGRsZUNvbXBvbmVudC9TaXRlc0NvbnRlbnQnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmlnaHRDb21wb25lbnQvTG9naW5Gb3JtJztcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9oZWFkZXJDb21wb25lbnQvU2VhcmNoRm9ybSc7XHJcbmltcG9ydCBMZWZ0U2lkZXIgZnJvbSAnLi9sZWZ0Q29tcG9uZW50L0xlZnRTaWRlcic7XHJcbmltcG9ydCBDaGF0dGluZ0Zvcm0gZnJvbSAnLi9yaWdodENvbXBvbmVudC9DaGF0dGluZ0Zvcm0nO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5jb25zdCBjb250ZW50U3R5bGUgPSBjc3NgXHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbmA7XHJcbiAgICBcclxuY29uc3QgcmlnaHRDb21wb25lbnRTdHlsZSA9IGNzc2BcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcclxuICAgICp7XHJcbiAgICAgICAgLmFudC1yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbnQtY29sOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYW50LWNvbDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgLy8gY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5pc0xvZ2dlZEluKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEdsb2JhbCBzdHlsZT17Z2xvYmFsU3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50IGNzcz17Y29udGVudFN0eWxlfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezIwfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0U2lkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjc3M9e3JpZ2h0Q29tcG9uZW50U3R5bGV9IGRhdGF0eXBlPXt7aXNMb2dnZWRJbn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7aXNMb2dnZWRJbiA/IDxVc2VyUHJvZmlsZSBzZXRJc0xvZ2dlZEluPXtzZXRJc0xvZ2dlZElufS8+IDogPExvZ2luRm9ybSBzZXRJc0xvZ2dlZEluPXtzZXRJc0xvZ2dlZElufS8+fSAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdHRpbmdGb3JtLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==