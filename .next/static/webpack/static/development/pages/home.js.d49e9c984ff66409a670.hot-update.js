webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/hocs/withAnalytics */ "./src/hocs/withAnalytics.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    card: {
      maxWidth: 500,
      marginTop: 10
    },
    avatar: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["red"][500]
    },
    media: {
      height: 420,
      paddingTop: '56.25%' // 16:9

    }
  };
});

function Home(_ref) {
  var user = _ref.user;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "Home")), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    maxWidth: "sm"
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.card
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      "aria-label": "recipe",
      className: classes.avatar
    }, "J"),
    title: user.name,
    subheader: user.company
  }), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "{classes.media}",
    image: user.avatar_url,
    title: "Avatar"
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, user.bio))), __jsx("br", null), __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: "/users"
  }, __jsx("a", null, "Usu\xE1rios"))));
}

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            return _context.abrupt("return", {
              user: {
                avatar_url: '/static/joshua.jpeg',
                bio: 'Teste biotonico',
                company: 'Codata'
              }
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_16__["default"])()(Home));

/***/ })

})
//# sourceMappingURL=home.js.d49e9c984ff66409a670.hot-update.js.map