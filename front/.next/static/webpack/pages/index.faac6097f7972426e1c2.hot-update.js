webpackHotUpdate_N_E("pages/index",{

/***/ "./components/middleComponent/Post/PostCard.js":
/*!*****************************************************!*\
  !*** ./components/middleComponent/Post/PostCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/button-group */ "./node_modules/antd/lib/button/button-group.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostImages */ "./components/middleComponent/Post/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ "./components/middleComponent/Post/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostCardContent */ "./components/middleComponent/Post/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FollowButton */ "./components/middleComponent/Post/FollowButton.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
var _jsxFileName = "D:\\miniproject\\front\\components\\middleComponent\\Post\\PostCard.js",
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */















const PostCard = ({
  post
}) => {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    removePostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.post);
  const {
    0: liked,
    1: setLiked
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: commentFormOpend,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    setLiked(prev => !prev);
  }, []);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); // optional chaining
  // const id = me && me.id;

  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      cover: post.imageList[0] && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        images: post.imageList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 45
      }, undefined),
      actions: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, undefined), liked ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 27
      }, undefined) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 27
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        content: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
          children: id && post.User.id === id ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 33
            }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 33
            }, undefined)]
          }, void 0, true) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, undefined),
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, undefined)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }, undefined)],
      extra: id && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 31
      }, undefined),
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
        avatar: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          children: "asdasdasd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }, undefined),
        title: post.writer,
        description: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 30
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, undefined)
    }, post.postId, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 12
    }, undefined), commentFormOpend && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
        header: `${post.commentList.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.commentList,
        renderItem: item => Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
            author: item.commentWriter,
            avatar: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
              children: item.commentWriter[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 45
            }, undefined),
            content: item.commentDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 8
  }, undefined);
};

_s(PostCard, "re5ll9267Y+A8VinLRJCBMedNOk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taWRkbGVDb21wb25lbnQvUG9zdC9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicmVtb3ZlUG9zdExvYWRpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsInVzZVN0YXRlIiwiY29tbWVudEZvcm1PcGVuZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50IiwiaWQiLCJ1c2VyIiwibWUiLCJvblJlbW92ZVBvc3QiLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJpbWFnZUxpc3QiLCJVc2VyIiwid3JpdGVyIiwiZGVzY3JpcHRpb24iLCJwb3N0SWQiLCJjb21tZW50TGlzdCIsImxlbmd0aCIsIml0ZW0iLCJjb21tZW50V3JpdGVyIiwiY29tbWVudERlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJjb250ZW50Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiQ29tbWVudHMiLCJhcnJheU9mIiwiSW1hZ2VzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUFBOztBQUMzQixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQXdCQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0wsSUFBbEIsQ0FBekM7QUFDQSxRQUFN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aUMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNsQm5CLE1BQUUsRUFBRWtCLGlEQUFTLENBQUNFLE1BREk7QUFFbEJaLFFBQUksRUFBRVUsaURBQVMsQ0FBQ0csTUFGRTtBQUdsQkMsV0FBTyxFQUFFSixpREFBUyxDQUFDSyxNQUhEO0FBSWxCQyxhQUFTLEVBQUVOLGlEQUFTLENBQUNHLE1BSkg7QUFLbEJJLFlBQVEsRUFBRVAsaURBQVMsQ0FBQ1EsT0FBVixDQUFrQlIsaURBQVMsQ0FBQ0csTUFBNUIsQ0FMUTtBQU1sQk0sVUFBTSxFQUFFVCxpREFBUyxDQUFDUSxPQUFWLENBQWtCUixpREFBUyxDQUFDRyxNQUE1QjtBQU5VLEdBQWhCLEVBT0hPO0FBUmMsQ0FBckI7QUFXZTVDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhYWM2MDk3Zjc5NzI0MjZlMWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgeyBFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgUmV0d2VldE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBBdmF0YXIsIExpc3QsIENvbW1lbnQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2FudGQvbGliL2J1dHRvbi9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uLy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gJy4vRm9sbG93QnV0dG9uJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRMaWtlZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpOyAvLyBvcHRpb25hbCBjaGFpbmluZ1xyXG4gICAgLy8gY29uc3QgaWQgPSBtZSAmJiBtZS5pZDtcclxuXHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxDYXJkIGtleT17cG9zdC5wb3N0SWR9XHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5pbWFnZUxpc3RbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LmltYWdlTGlzdH0gLz59XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIvPiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30gb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgZXh0cmE9eyBpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj5hc2Rhc2Rhc2Q8L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC53cml0ZXJ9IFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuZGVzY3JpcHRpb259IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5kICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOyWtOuWpCDqsozsi5zquIDsl5Ag64yT6riA7J2EIOuLrOyngCDsoJXrs7TqsIAg7ZWE7JqUIC0g6rKM7Iuc6riAIGlkICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5jb21tZW50TGlzdC5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5jb21tZW50TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uY29tbWVudFdyaXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLmNvbW1lbnRXcml0ZXJbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbW1lbnREZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICB7LyogPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgICAgICAgPENvbW1lbnRzIC8+ICovfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=