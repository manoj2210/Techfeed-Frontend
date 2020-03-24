webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Footer() {
  return __jsx("footer", {
    className: "bg-gray-100"
  }, __jsx("ul", {
    className: "flex items-center justify-between mx-auto p-4 md:p-8 text-sm"
  }, __jsx("li", null, __jsx("p", {
    className: "text-center text-gray-500 text-xs"
  }, "\xA92020 All rights reserved.")), __jsx("li", null, __jsx("ul", {
    className: "list-reset items-center text-sm pt-3"
  }, __jsx("div", {
    className: "flex relative inline-block float-right"
  }, __jsx("div", {
    className: "ml-10 relative flex items-baseline"
  }, __jsx("li", null, __jsx("a", {
    className: "inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline p-5 py-1",
    href: "#"
  }, "Github")), __jsx("li", null, __jsx("a", {
    className: "inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline p-5 py-1",
    href: "#"
  }, "Linked in")), __jsx("li", null, __jsx("a", {
    className: "inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline p-5 py-1",
    href: "#"
  }, "Twitter"))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Header() {
  return __jsx("header", {
    className: "fixed w-full z-10 top-0 shadow"
  }, __jsx("div", {
    className: "w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0"
  }, __jsx("div", {
    className: "w-1/2 pl-2 md:pl-0 p-5"
  }, __jsx("a", {
    className: "text-gray-800 text-base xl:text-xl no-underline hover:underline font-bold",
    href: "/"
  }, __jsx("i", {
    className: "fas fa-moon text-blue-400 pr-3"
  }), " TechFeed")), __jsx("div", {
    className: "w-1/2 pb-2"
  }, __jsx("div", {
    className: "flex relative inline-block float-right"
  }, __jsx("div", {
    className: "ml-10 relative flex items-baseline"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:bg-gray-400"
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/hardware"
  }, __jsx("a", {
    className: "ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:bg-gray-400"
  }, "Hardware")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Layout(props) {
  return __jsx("div", {
    className: "flex flex-col min-h-screen font-sans leading-normal tracking-normal",
    suppressHydrationWarning: true
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, "TechFeed"), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico"
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx("main", {
    className: "bg-white-alt"
  }, __jsx("div", {
    className: "container w-full mx-auto pt-20"
  }), props.children), __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function index() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_0__["default"], null);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.1ceb05015cc62e1dc718.hot-update.js.map