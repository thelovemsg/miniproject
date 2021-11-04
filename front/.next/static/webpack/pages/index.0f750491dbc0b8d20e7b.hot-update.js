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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiQ29udGVudCIsImNvbnRlbnRTdHlsZSIsImNzcyIsInJpZ2h0Q29tcG9uZW50U3R5bGUiLCJnbG9iYWxTdHlsZSIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUM4RDs7QUFDOUQ7QUFDQSxJQUFRQSxNQUFSLEdBQTRCQywyQ0FBNUIsQ0FBUUQsTUFBUjtBQUFBLElBQWdCRSxPQUFoQixHQUE0QkQsMkNBQTVCLENBQWdCQyxPQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLFlBQVksR0FBR0MsMERBQUgsdUtBQWxCO0FBSUEsSUFBTUMsbUJBQW1CLEdBQUdELDBEQUFILDZMQUF6QjtBQUtBLElBQU1FLFdBQVcsR0FBR0YsMERBQUgsOGJBQWpCOztBQWlCQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNoQztBQUNBLE1BQU1DLFVBQVUsR0FBR0MsZ0VBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdILFVBQXRCO0FBQUEsR0FBRCxDQUE5QjtBQUNBLFNBQ0ksK0VBQUMsMkNBQUQ7QUFBQSxlQUNJLCtFQUFDLHFEQUFEO0FBQVEsV0FBSyxFQUFFSDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVJLCtFQUFDLE1BQUQ7QUFBQSxnQkFDSSwrRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBS0ksK0VBQUMsMkNBQUQ7QUFBQSxnQkFDSSwrRUFBQyxPQUFEO0FBQVMsV0FBRyxFQUFFSCxZQUFkO0FBQUEsa0JBQ0ksK0VBQUMsd0NBQUQ7QUFBSyxnQkFBTSxFQUFFLEVBQWI7QUFBQSxxQkFDSSwrRUFBQyx3Q0FBRDtBQUFLLGNBQUUsRUFBRSxFQUFUO0FBQWEsY0FBRSxFQUFFLENBQWpCO0FBQUEsc0JBQ0csK0VBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFJSSwrRUFBQyx3Q0FBRDtBQUFLLGNBQUUsRUFBRSxFQUFUO0FBQWEsY0FBRSxFQUFFLEVBQWpCO0FBQUEsc0JBQ0tLO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixFQU9JLCtFQUFDLHdDQUFEO0FBQUssY0FBRSxFQUFFLEVBQVQ7QUFBYSxjQUFFLEVBQUUsQ0FBakI7QUFBQSxzQkFDSTtBQUFLLGlCQUFHLEVBQUVILG1CQUFWO0FBQUEseUJBRUtJLFVBQVUsR0FBRywrRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFILEdBQXFCLCtFQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRnBDLEVBR0ksK0VBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0QkgsQ0EvQkQ7O0dBQU1GLFM7VUFFaUJHLHdEOzs7S0FGakJILFM7QUFpQ05BLFNBQVMsQ0FBQ00sU0FBVixHQUFzQjtBQUNsQkwsVUFBUSxFQUFFTSxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBRFAsQ0FBdEI7QUFJZVQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGY3NTA0OTFkYmMwYjhkMjBlN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IEdsb2JhbCwganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTGF5b3V0LCBNZW51LCBJbnB1dCwgU2VsZWN0LCBSb3csIENvbCB9IGZyb20gJ2FudGQnOyAvLyDtlYTsmpTtlZwg7Lu07Y+s64SM7Yq466W8IOqwgOyguOyYqOuLpFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4vcmlnaHRDb21wb25lbnQvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgU2l0ZXNDb250ZW50IGZyb20gJy4vbWlkZGxlQ29tcG9uZW50L1NpdGVzQ29udGVudCc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yaWdodENvbXBvbmVudC9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL2hlYWRlckNvbXBvbmVudC9TZWFyY2hGb3JtJztcclxuaW1wb3J0IExlZnRTaWRlciBmcm9tICcuL2xlZnRDb21wb25lbnQvTGVmdFNpZGVyJztcclxuaW1wb3J0IENoYXR0aW5nRm9ybSBmcm9tICcuL3JpZ2h0Q29tcG9uZW50L0NoYXR0aW5nRm9ybSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IGNzc2BcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuYDtcclxuICAgIFxyXG5jb25zdCByaWdodENvbXBvbmVudFN0eWxlID0gY3NzYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IGdsb2JhbFN0eWxlID0gY3NzYFxyXG4gICAgKntcclxuICAgICAgICAuYW50LXJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFudC1jb2w6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbnQtY29sOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICAvLyBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmlzTG9nZ2VkSW4pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8R2xvYmFsIHN0eWxlPXtnbG9iYWxTdHlsZX0gLz5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQgY3NzPXtjb250ZW50U3R5bGV9PiBcclxuICAgICAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MjB9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRTaWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNzcz17cmlnaHRDb21wb25lbnRTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtpc0xvZ2dlZEluID8gPFVzZXJQcm9maWxlIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59Lz4gOiA8TG9naW5Gb3JtIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59Lz59ICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNMb2dnZWRJbiA/IDxVc2VyUHJvZmlsZSAvPiA6IDxMb2dpbkZvcm0gLz59IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0dGluZ0Zvcm0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9