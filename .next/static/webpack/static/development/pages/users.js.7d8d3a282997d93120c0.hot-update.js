webpackHotUpdate("static/development/pages/users.js",{

/***/ "./node_modules/next/dist/lib/constants.js":
false,

/***/ "./node_modules/next/dist/lib/data.js":
/*!********************************************!*\
  !*** ./node_modules/next/dist/lib/data.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.createHook=createHook;var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js");var _dataManagerContext=__webpack_require__(/*! ../next-server/lib/data-manager-context */ "./node_modules/next/dist/next-server/lib/data-manager-context.js");var _routerContext=__webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");var _unfetch=_interopRequireDefault(__webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs"));var _querystring=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function generateArgsKey(args){return args.reduce((a,b)=>{if(Array.isArray(b)){return a+generateArgsKey(b);}if(typeof b!=='string'&&typeof b!=='number'){throw new Error('arguments can only be string or number');}return a+b.toString();},'');}function createHook(fetcher,options){if(!options.key){throw new Error('key not provided to createHook options.');}return function useData(...args){const router=(0,_react.useContext)(_routerContext.RouterContext);const dataManager=(0,_react.useContext)(_dataManagerContext.DataManagerContext);const key=`${options.key}${generateArgsKey(args)}`;const existing=dataManager.get(key);if(existing){if(existing.status==='resolved'){return existing.result;}if(existing==='mismatched-key'){throw new Error('matching key was missing from returned data. make sure arguments match between the client and server');}}// @ts-ignore webpack optimization
if(typeof window!=='undefined'){const res=(0,_unfetch.default)(router.route+'?'+(0,_querystring.stringify)(router.query),{headers:{accept:'application/amp.bind+json'}}).then(res=>res.json()).then(result=>{const hasKey=result.some(pair=>pair[0]===key);if(!hasKey){result=[[key,'mismatched-key']];}dataManager.overwrite(result);});throw res;}else{const res=fetcher(...args).then(result=>{dataManager.set(key,{status:'resolved',result});});throw res;}};}

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./src/hocs/withAnalytics.js":
/*!***********************************!*\
  !*** ./src/hocs/withAnalytics.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_lib_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/lib/data */ "./node_modules/next/dist/lib/data.js");
/* harmony import */ var next_dist_lib_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");






var _jsxFileName = "/home/joshua/rocketseat/bonus/netxtssr/src/hocs/withAnalytics.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return function (Composed) {
    return (
      /*#__PURE__*/
      function (_Component) {
        Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, _Component);

        function _class() {
          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class);

          return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_class).apply(this, arguments));
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            console.log('PAGE VIEW');
            react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].initialize('ID_ANALYTICS');
            react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].pageview(window.location.pathname);
          }
        }, {
          key: "render",
          value: function render() {
            return __jsx(Composed, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            }));
          }
        }], [{
          key: "getInitialProps",
          value: function getInitialProps(ctx) {
            return Object(next_dist_lib_data__WEBPACK_IMPORTED_MODULE_7__["loadGetInitialProps"])(Composed, ctx);
          }
        }]);

        return _class;
      }(react__WEBPACK_IMPORTED_MODULE_6__["Component"])
    );
  };
});

/***/ })

})
//# sourceMappingURL=users.js.7d8d3a282997d93120c0.hot-update.js.map