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
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_POST_REQUEST"],
      data: post.postId
    });
  }, []);
  const onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_POST_REQUEST"],
      data: post.postId
    });
  }, []);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); // optional chaining

  console.log("id in postCard.js :: ", id); // const id = me && me.id;

  console.log("post.likers :: ", post.likers);
  const liked = post.likers.find(v => {
    if (v.memberId === id) {
      console.log(v.memberId);
      return true;
    }
  }) || false;
  console.log("liked :: ", liked);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  console.log("post :: ", post);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      cover: post.imageList[0] && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        images: post.imageList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 45
      }, undefined),
      actions: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }, undefined), liked ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 27
      }, undefined) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 27
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        content: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
          children: id && post.memberId === id ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 33
            }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }, undefined)]
          }, void 0, true) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }, undefined),
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, undefined)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }, undefined)] // extra={ id && <FollowButton post={post} />}
      ,
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
        avatar: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          children: post.writer[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, undefined),
        title: post.writer,
        description: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 30
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }, undefined)
    }, post.postId, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 12
    }, undefined), commentFormOpend && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
              lineNumber: 100,
              columnNumber: 45
            }, undefined),
            content: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taWRkbGVDb21wb25lbnQvUG9zdC9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJjb29raWVzIiwiQ29va2llcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb21tZW50Rm9ybU9wZW5kIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJ1c2VTdGF0ZSIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiZGF0YSIsInBvc3RJZCIsIm9uVW5saWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJpZCIsInVzZXIiLCJtZSIsImNvbnNvbGUiLCJsb2ciLCJsaWtlcnMiLCJsaWtlZCIsImZpbmQiLCJ2IiwibWVtYmVySWQiLCJvblJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiaW1hZ2VMaXN0Iiwid3JpdGVyIiwiZGVzY3JpcHRpb24iLCJjb21tZW50TGlzdCIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIlVzZXIiLCJvYmplY3QiLCJjb250ZW50Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiQ29tbWVudHMiLCJhcnJheU9mIiwiSW1hZ2VzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUFBOztBQUMzQixRQUFNQyxPQUFPLEdBQUcsSUFBSUMseURBQUosRUFBaEI7QUFDQSxR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QVJjLENBQXJCO0FBV2VwRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kODUzZjU4MTI0NGY0NjY1YzEzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHsgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2FyZCwgUG9wb3ZlciwgQXZhdGFyLCBMaXN0LCBDb21tZW50IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdhbnRkL2xpYi9idXR0b24vYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcbmltcG9ydCB7IExJS0VfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSAnLi9Gb2xsb3dCdXR0b24nO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5kLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgXHJcbiAgICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5wb3N0SWRcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uVW5saWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5wb3N0SWRcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTsgLy8gb3B0aW9uYWwgY2hhaW5pbmdcclxuICAgIGNvbnNvbGUubG9nKFwiaWQgaW4gcG9zdENhcmQuanMgOjogXCIsIGlkKTtcclxuICAgIC8vIGNvbnN0IGlkID0gbWUgJiYgbWUuaWQ7XHJcbiAgICBjb25zb2xlLmxvZyhcInBvc3QubGlrZXJzIDo6IFwiLCBwb3N0Lmxpa2Vycyk7XHJcbiAgICBjb25zdCBsaWtlZCA9IHBvc3QubGlrZXJzLmZpbmQoKHYpID0+IHtcclxuICAgICAgICBpZih2Lm1lbWJlcklkID09PSBpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2Lm1lbWJlcklkKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pIHx8IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coXCJsaWtlZCA6OiBcIiwgbGlrZWQpO1xyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInBvc3QgOjogXCIsIHBvc3QpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPENhcmQga2V5PXtwb3N0LnBvc3RJZH1cclxuICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LmltYWdlTGlzdFswXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuaW1hZ2VMaXN0fSAvPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIi8+LCBcclxuICAgICAgICAgICAgICAgICAgICBsaWtlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Vbmxpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QubWVtYmVySWQgPT09IGlkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvLyBleHRyYT17IGlkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LndyaXRlclswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC53cml0ZXJ9IFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuZGVzY3JpcHRpb259IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5kICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOyWtOuWpCDqsozsi5zquIDsl5Ag64yT6riA7J2EIOuLrOyngCDsoJXrs7TqsIAg7ZWE7JqUIC0g6rKM7Iuc6riAIGlkICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5jb21tZW50TGlzdC5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5jb21tZW50TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0ud3JpdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0ud3JpdGVyWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICB7LyogPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgICAgICAgPENvbW1lbnRzIC8+ICovfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=