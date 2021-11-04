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
          }, _this), isLoggedIn]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiQ29udGVudCIsImNvbnRlbnRTdHlsZSIsImNzcyIsInJpZ2h0Q29tcG9uZW50U3R5bGUiLCJnbG9iYWxTdHlsZSIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUM4RDs7QUFDOUQ7QUFDQSxJQUFRQSxNQUFSLEdBQTRCQywyQ0FBNUIsQ0FBUUQsTUFBUjtBQUFBLElBQWdCRSxPQUFoQixHQUE0QkQsMkNBQTVCLENBQWdCQyxPQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLFlBQVksR0FBR0MsMERBQUgsdUtBQWxCO0FBSUEsSUFBTUMsbUJBQW1CLEdBQUdELDBEQUFILDZMQUF6QjtBQUtBLElBQU1FLFdBQVcsR0FBR0YsMERBQUgsOGJBQWpCOztBQWlCQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNoQztBQUNBLE1BQU1DLFVBQVUsR0FBR0MsZ0VBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdILFVBQXRCO0FBQUEsR0FBRCxDQUE5QjtBQUNBLFNBQ0ksK0VBQUMsMkNBQUQ7QUFBQSxlQUNJLCtFQUFDLHFEQUFEO0FBQVEsV0FBSyxFQUFFSDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVJLCtFQUFDLE1BQUQ7QUFBQSxnQkFDSSwrRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBS0ksK0VBQUMsMkNBQUQ7QUFBQSxnQkFDSSwrRUFBQyxPQUFEO0FBQVMsV0FBRyxFQUFFSCxZQUFkO0FBQUEsa0JBQ0ksK0VBQUMsd0NBQUQ7QUFBSyxnQkFBTSxFQUFFLEVBQWI7QUFBQSxxQkFDSSwrRUFBQyx3Q0FBRDtBQUFLLGNBQUUsRUFBRSxFQUFUO0FBQWEsY0FBRSxFQUFFLENBQWpCO0FBQUEsc0JBQ0csK0VBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFJSSwrRUFBQyx3Q0FBRDtBQUFLLGNBQUUsRUFBRSxFQUFUO0FBQWEsY0FBRSxFQUFFLEVBQWpCO0FBQUEsc0JBQ0tLO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixFQU9JLCtFQUFDLHdDQUFEO0FBQUssY0FBRSxFQUFFLEVBQVQ7QUFBYSxjQUFFLEVBQUUsQ0FBakI7QUFBQSxzQkFDSTtBQUFLLGlCQUFHLEVBQUVILG1CQUFWO0FBQUEseUJBRUtJLFVBQVUsR0FBRywrRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFILEdBQXFCLCtFQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRnBDLEVBR0ksK0VBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLEVBY2FBLFVBZGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRCSCxDQS9CRDs7R0FBTUYsUztVQUVpQkcsd0Q7OztLQUZqQkgsUztBQWlDTkEsU0FBUyxDQUFDTSxTQUFWLEdBQXNCO0FBQ2xCTCxVQUFRLEVBQUVNLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEUCxDQUF0QjtBQUllVCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYTcwNzNjNmQ0ZWU3N2ZmMjc2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgR2xvYmFsLCBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUsIElucHV0LCBTZWxlY3QsIFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7IC8vIO2VhOyalO2VnCDsu7Ttj6zrhIztirjrpbwg6rCA7KC47Jio64ukXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9yaWdodENvbXBvbmVudC9Vc2VyUHJvZmlsZSc7XHJcbmltcG9ydCBTaXRlc0NvbnRlbnQgZnJvbSAnLi9taWRkbGVDb21wb25lbnQvU2l0ZXNDb250ZW50JztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3JpZ2h0Q29tcG9uZW50L0xvZ2luRm9ybSc7XHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vaGVhZGVyQ29tcG9uZW50L1NlYXJjaEZvcm0nO1xyXG5pbXBvcnQgTGVmdFNpZGVyIGZyb20gJy4vbGVmdENvbXBvbmVudC9MZWZ0U2lkZXInO1xyXG5pbXBvcnQgQ2hhdHRpbmdGb3JtIGZyb20gJy4vcmlnaHRDb21wb25lbnQvQ2hhdHRpbmdGb3JtJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuY29uc3QgY29udGVudFN0eWxlID0gY3NzYFxyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG5gO1xyXG4gICAgXHJcbmNvbnN0IHJpZ2h0Q29tcG9uZW50U3R5bGUgPSBjc3NgXHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuICAgIGhlaWdodDoxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgZ2xvYmFsU3R5bGUgPSBjc3NgXHJcbiAgICAqe1xyXG4gICAgICAgIC5hbnQtcm93IHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYW50LWNvbDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFudC1jb2w6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIC8vIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuaXNMb2dnZWRJbik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxHbG9iYWwgc3R5bGU9e2dsb2JhbFN0eWxlfSAvPlxyXG4gICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudCBjc3M9e2NvbnRlbnRTdHlsZX0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdFNpZGVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtyaWdodENvbXBvbmVudFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2lzTG9nZ2VkSW4gPyA8VXNlclByb2ZpbGUgc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn0vPiA6IDxMb2dpbkZvcm0gc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn0vPn0gICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0xvZ2dlZEluID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2luRm9ybSAvPn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYXR0aW5nRm9ybS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9nZ2VkSW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=