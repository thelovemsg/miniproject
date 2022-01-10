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
        lineNumber: 57,
        columnNumber: 45
      }, undefined),
      actions: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, undefined), liked ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 27
      }, undefined) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 27
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        content: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
          children: id && post.memberId === id ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, undefined)]
          }, void 0, true) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, undefined),
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, undefined)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, undefined)] // extra={ id && <FollowButton post={post} />}
      ,
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
        avatar: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          children: post.writer[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, undefined),
        title: post.writer,
        description: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 30
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, undefined)
    }, post.postId, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 12
    }, undefined), commentFormOpend && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
              lineNumber: 98,
              columnNumber: 45
            }, undefined),
            content: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taWRkbGVDb21wb25lbnQvUG9zdC9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJjb29raWVzIiwiQ29va2llcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb21tZW50Rm9ybU9wZW5kIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJ1c2VTdGF0ZSIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJwb3N0SWQiLCJvblVubGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2IiwibWVtYmVySWQiLCJnZXQiLCJpZCIsInVzZXIiLCJtZSIsImxpa2VkIiwibGlrZXJzIiwiZmluZCIsInYiLCJvblJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiaW1hZ2VMaXN0Iiwid3JpdGVyIiwiZGVzY3JpcHRpb24iLCJjb21tZW50TGlzdCIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIlVzZXIiLCJvYmplY3QiLCJjb250ZW50Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiQ29tbWVudHMiLCJhcnJheU9mIiwiSW1hZ2VzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUFBOztBQUMzQixRQUFNQyxPQUFPLEdBQUcsSUFBSUMseURBQUosRUFBaEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQXdCQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ1AsSUFBbEIsQ0FBekM7QUFDQSxRQUFNO0FBQUEsT0FBQ1EsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMkNDLHNEQUFRLENBQUMsS0FBRCxDQUF6RDtBQUVBLFFBQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBWCxZQUFRLENBQUM7QUFDTFksVUFBSSxFQUFFQyxpRUFERDtBQUVMQyxVQUFJLEVBQUVqQixJQUFJLENBQUNrQjtBQUZOLEtBQUQsQ0FBUjtBQUlILEdBTnlCLEVBTXZCLEVBTnVCLENBQTFCO0FBUUEsUUFBTUMsUUFBUSxHQUFHUCx5REFBVyxDQUFDLE1BQU07QUFDL0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0FYLFlBQVEsQ0FBQztBQUNMWSxVQUFJLEVBQUVLLG1FQUREO0FBRUxILFVBQUksRUFBRWpCLElBQUksQ0FBQ2tCO0FBRk4sS0FBRCxDQUFSO0FBSUgsR0FOMkIsRUFNekIsRUFOeUIsQ0FBNUI7QUFPQSxRQUFNRyxlQUFlLEdBQUdULHlEQUFXLENBQUMsTUFBTTtBQUN0Q0gsd0JBQW9CLENBQUVhLElBQUQsSUFBVSxDQUFDQSxJQUFaLENBQXBCO0FBQ0gsR0FGa0MsRUFFaEMsRUFGZ0MsQ0FBbkM7QUFJQSxRQUFNQyxRQUFRLEdBQUd0QixPQUFPLENBQUN1QixHQUFSLENBQVksVUFBWixDQUFqQjtBQUNBWCxTQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q2QsSUFBdkM7QUFDQSxRQUFNeUIsRUFBRSxHQUFHbkIsK0RBQVcsQ0FBRUMsS0FBRDtBQUFBOztBQUFBLDZCQUFXQSxLQUFLLENBQUNtQixJQUFOLENBQVdDLEVBQXRCLG1EQUFXLGVBQWVGLEVBQTFCO0FBQUEsR0FBRCxDQUF0QixDQTNCMkIsQ0EyQjJCOztBQUN0RFosU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlcsRUFBekIsRUE1QjJCLENBNkIzQjs7QUFDQSxRQUFNRyxLQUFLLEdBQUc1QixJQUFJLENBQUM2QixNQUFMLENBQVlDLElBQVosQ0FBa0JDLENBQUQsSUFBTztBQUNsQyxRQUFHQSxDQUFDLENBQUNSLFFBQUYsS0FBZUUsRUFBbEIsRUFBc0IsT0FBTyxJQUFQO0FBQ3pCLEdBRmEsS0FFUixLQUZOO0FBR0EsUUFBTU8sWUFBWSxHQUFHcEIseURBQVcsQ0FBQyxNQUFNO0FBQ25DVCxZQUFRLENBQUM7QUFDTFksVUFBSSxFQUFFa0IsbUVBREQ7QUFFTGhCLFVBQUksRUFBRWpCLElBQUksQ0FBQ3lCO0FBRk4sS0FBRCxDQUFSO0FBSUgsR0FMK0IsRUFLN0IsRUFMNkIsQ0FBaEM7QUFNQSxTQUNHO0FBQUEsZUFDSSwrRUFBQyx5Q0FBRDtBQUNLLFdBQUssRUFBRXpCLElBQUksQ0FBQ2tDLFNBQUwsQ0FBZSxDQUFmLEtBQXFCLCtFQUFDLG1EQUFEO0FBQVksY0FBTSxFQUFFbEMsSUFBSSxDQUFDa0M7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEakM7QUFFSyxhQUFPLEVBQUUsQ0FDTCwrRUFBQyxpRUFBRCxNQUFxQixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURLLEVBRUxOLEtBQUssR0FDQywrRUFBQyw4REFBRDtBQUFjLG9CQUFZLEVBQUMsU0FBM0I7QUFBaUQsZUFBTyxFQUFFVDtBQUExRCxTQUF5QyxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELEdBRUMsK0VBQUMsK0RBQUQ7QUFBMkIsZUFBTyxFQUFFUjtBQUFwQyxTQUFtQixPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELEVBTUwsK0VBQUMsaUVBQUQ7QUFBK0IsZUFBTyxFQUFFVTtBQUF4QyxTQUFxQixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5LLEVBT0wsK0VBQUMsNENBQUQ7QUFBb0IsZUFBTyxFQUN2QiwrRUFBQywyQ0FBRCxDQUFRLEtBQVI7QUFBQSxvQkFDS0ksRUFBRSxJQUFJekIsSUFBSSxDQUFDdUIsUUFBTCxLQUFrQkUsRUFBeEIsR0FDRDtBQUFBLHVCQUNJLCtFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUksK0VBQUMsMkNBQUQ7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQU8sRUFBRXBCLGlCQUEvQjtBQUFrRCxxQkFBTyxFQUFFMkIsWUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQSwwQkFEQyxHQUtHLCtFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUFBLGtCQVVJLCtFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSixTQUFhLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSyxDQUZkLENBc0JLO0FBdEJMO0FBQUEsZ0JBd0JDLCtFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLGNBQU0sRUFBRSwrRUFBQywyQ0FBRDtBQUFBLG9CQUFTaEMsSUFBSSxDQUFDbUMsTUFBTCxDQUFZLENBQVo7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURaO0FBRUksYUFBSyxFQUFFbkMsSUFBSSxDQUFDbUMsTUFGaEI7QUFHSSxtQkFBVyxFQUFFLCtFQUFDLHdEQUFEO0FBQWlCLGtCQUFRLEVBQUVuQyxJQUFJLENBQUNvQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkQsT0FBV3BDLElBQUksQ0FBQ2tCLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUErQk1WLGdCQUFnQixJQUNiO0FBQUEsaUJBRUksK0VBQUMsb0RBQUQ7QUFBYSxZQUFJLEVBQUVSO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosRUFHSSwrRUFBQyx5Q0FBRDtBQUNJLGNBQU0sRUFBRyxHQUFFQSxJQUFJLENBQUNxQyxXQUFMLENBQWlCQyxNQUFPLE9BRHZDO0FBRUksa0JBQVUsRUFBQyxZQUZmO0FBR0ksa0JBQVUsRUFBRXRDLElBQUksQ0FBQ3FDLFdBSHJCO0FBSUksa0JBQVUsRUFBR0UsSUFBRCxJQUNSO0FBQUEsb0JBQ0ksK0VBQUMsNENBQUQ7QUFDSSxrQkFBTSxFQUFFQSxJQUFJLENBQUNKLE1BRGpCO0FBRUksa0JBQU0sRUFBRSwrRUFBQywyQ0FBRDtBQUFBLHdCQUFTSSxJQUFJLENBQUNKLE1BQUwsQ0FBWSxDQUFaO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGWjtBQUdJLG1CQUFPLEVBQUVJLElBQUksQ0FBQ0g7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREg7QUF1REgsQ0E5RkQ7O0dBQU1yQyxRO1VBRWVLLHVELEVBQ2FFLHVELEVBd0JuQkEsdUQ7OztLQTNCVFAsUTtBQWdHTkEsUUFBUSxDQUFDeUMsU0FBVCxHQUFxQjtBQUNqQnhDLE1BQUksRUFBRXlDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDbEJqQixNQUFFLEVBQUVnQixpREFBUyxDQUFDRSxNQURJO0FBRWxCQyxRQUFJLEVBQUVILGlEQUFTLENBQUNJLE1BRkU7QUFHbEJDLFdBQU8sRUFBRUwsaURBQVMsQ0FBQ00sTUFIRDtBQUlsQkMsYUFBUyxFQUFFUCxpREFBUyxDQUFDSSxNQUpIO0FBS2xCSSxZQUFRLEVBQUVSLGlEQUFTLENBQUNTLE9BQVYsQ0FBa0JULGlEQUFTLENBQUNJLE1BQTVCLENBTFE7QUFNbEJNLFVBQU0sRUFBRVYsaURBQVMsQ0FBQ1MsT0FBVixDQUFrQlQsaURBQVMsQ0FBQ0ksTUFBNUI7QUFOVSxHQUFoQixFQU9ITztBQVJjLENBQXJCO0FBV2VyRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iY2QwOWU4ZmIyMzgyMThjZDU4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHsgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2FyZCwgUG9wb3ZlciwgQXZhdGFyLCBMaXN0LCBDb21tZW50IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdhbnRkL2xpYi9idXR0b24vYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcbmltcG9ydCB7IExJS0VfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSAnLi9Gb2xsb3dCdXR0b24nO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5kLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgXHJcbiAgICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0aW5nIG9uTGlrZVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LnBvc3RJZFxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0aW5nIHVuTGlrZVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QucG9zdElkXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG1lbWJlcklkID0gY29va2llcy5nZXQoXCJtZW1iZXJJZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwicG9zdCBpbiBwb3N0Q2FyZC5qcyA6OiBcIiwgcG9zdCk7XHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpOyAvLyBvcHRpb25hbCBjaGFpbmluZ1xyXG4gICAgY29uc29sZS5sb2coXCLsgqzsmqnsnpAgaWQgOiBcIiwgaWQpO1xyXG4gICAgLy8gY29uc3QgaWQgPSBtZSAmJiBtZS5pZDtcclxuICAgIGNvbnN0IGxpa2VkID0gcG9zdC5saWtlcnMuZmluZCgodikgPT4ge1xyXG4gICAgICAgIGlmKHYubWVtYmVySWQgPT09IGlkKSByZXR1cm4gdHJ1ZVxyXG4gICAgfSkgfHwgZmFsc2U7XHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxDYXJkIGtleT17cG9zdC5wb3N0SWR9XHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5pbWFnZUxpc3RbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LmltYWdlTGlzdH0gLz59XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIvPiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVW5saWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0Lm1lbWJlcklkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30gb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgLy8gZXh0cmE9eyBpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC53cml0ZXJbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3Qud3JpdGVyfSBcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmRlc2NyaXB0aW9ufSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDslrTrlqQg6rKM7Iuc6riA7JeQIOuMk+q4gOydhCDri6zsp4Ag7KCV67O06rCAIO2VhOyalCAtIOqyjOyLnOq4gCBpZCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuY29tbWVudExpc3QubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuY29tbWVudExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLndyaXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLndyaXRlclswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgey8qIDxDb21tZW50Rm9ybSAvPlxyXG4gICAgICAgICAgIDxDb21tZW50cyAvPiAqL31cclxuICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9