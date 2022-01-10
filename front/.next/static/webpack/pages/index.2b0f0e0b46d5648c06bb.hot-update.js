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
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
var _jsxFileName = "D:\\miniproject\\front\\components\\middleComponent\\Post\\PostCard.js",
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */
















const PostCard = ({
  post
}) => {
  _s();

  const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_12__["default"]();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    removePostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.post);
  const {
    0: commentFormOpend,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    console.log("testing onLike");
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_POST_REQUEST"],
      data: post.postId
    });
  }, []);
  const onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    console.log("testing unLike");
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_POST_REQUEST"],
      data: post.postId
    });
  }, []);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const memberId = cookies.get("memberId");
  console.log("post in postCard.js :: ", post);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); // optional chaining

  console.log("사용자 id : ", id); // const id = me && me.id;

  const liked = post.likers.find(v => {
    console.log("v :: ", v);
    if (v.memberId === id) return true;
  }) || false;
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      cover: post.imageList[0] && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        images: post.imageList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 45
      }, undefined),
      actions: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, undefined), liked ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 27
      }, undefined) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 27
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        content: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
          children: id && post.memberId === id ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 33
            }, undefined)]
          }, void 0, true) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, undefined),
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, undefined)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, undefined)] // extra={ id && <FollowButton post={post} />}
      ,
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
        avatar: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          children: post.writer[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }, undefined),
        title: post.writer,
        description: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 30
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, undefined)
    }, post.postId, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 12
    }, undefined), commentFormOpend && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
        header: `${post.commentList.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.commentList,
        renderItem: item => Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("li", {
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
            author: item.writer,
            avatar: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
              children: item.writer[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 45
            }, undefined),
            content: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 8
  }, undefined);
};

_s(PostCard, "kWmKonF19LOGlKi0IphIUah3DNI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taWRkbGVDb21wb25lbnQvUG9zdC9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJjb29raWVzIiwiQ29va2llcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb21tZW50Rm9ybU9wZW5kIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJ1c2VTdGF0ZSIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJwb3N0SWQiLCJvblVubGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2IiwibWVtYmVySWQiLCJnZXQiLCJpZCIsInVzZXIiLCJtZSIsImxpa2VkIiwibGlrZXJzIiwiZmluZCIsInYiLCJvblJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiaW1hZ2VMaXN0Iiwid3JpdGVyIiwiZGVzY3JpcHRpb24iLCJjb21tZW50TGlzdCIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIlVzZXIiLCJvYmplY3QiLCJjb250ZW50Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiQ29tbWVudHMiLCJhcnJheU9mIiwiSW1hZ2VzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUFBOztBQUMzQixRQUFNQyxPQUFPLEdBQUcsSUFBSUMseURBQUosRUFBaEI7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QUE1QjtBQU5VLEdBQWhCLEVBT0hPO0FBUmMsQ0FBckI7QUFXZXJELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiMGYwZTBiNDZkNTY0OGMwNmJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgeyBFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgUmV0d2VldE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBBdmF0YXIsIExpc3QsIENvbW1lbnQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2FudGQvbGliL2J1dHRvbi9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgICBcclxuICAgIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3Rpbmcgb25MaWtlXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QucG9zdElkXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvblVubGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RpbmcgdW5MaWtlXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5wb3N0SWRcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbWVtYmVySWQgPSBjb29raWVzLmdldChcIm1lbWJlcklkXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJwb3N0IGluIHBvc3RDYXJkLmpzIDo6IFwiLCBwb3N0KTtcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7IC8vIG9wdGlvbmFsIGNoYWluaW5nXHJcbiAgICBjb25zb2xlLmxvZyhcIuyCrOyaqeyekCBpZCA6IFwiLCBpZCk7XHJcbiAgICAvLyBjb25zdCBpZCA9IG1lICYmIG1lLmlkO1xyXG4gICAgY29uc3QgbGlrZWQgPSBwb3N0Lmxpa2Vycy5maW5kKCh2KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2IDo6IFwiLCB2KTtcclxuICAgICAgICBpZih2Lm1lbWJlcklkID09PSBpZCkgcmV0dXJuIHRydWVcclxuICAgIH0pIHx8IGZhbHNlO1xyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPGRpdj5cclxuICAgICAgICAgICA8Q2FyZCBrZXk9e3Bvc3QucG9zdElkfVxyXG4gICAgICAgICAgICAgICAgY292ZXI9e3Bvc3QuaW1hZ2VMaXN0WzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5pbWFnZUxpc3R9IC8+fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiLz4sIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblVubGlrZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uTGlrZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5tZW1iZXJJZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8vIGV4dHJhPXsgaWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3Qud3JpdGVyWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LndyaXRlcn0gXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5kZXNjcmlwdGlvbn0gLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog7Ja065akIOqyjOyLnOq4gOyXkCDrjJPquIDsnYQg64us7KeAIOygleuztOqwgCDtlYTsmpQgLSDqsozsi5zquIAgaWQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LmNvbW1lbnRMaXN0Lmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LmNvbW1lbnRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS53cml0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS53cml0ZXJbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgIHsvKiA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgICA8Q29tbWVudHMgLz4gKi99XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgfSkuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==