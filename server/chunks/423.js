"use strict";
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 1084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ Loading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/common/Loading.tsx


function Loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.LinearProgress, {
        sx: {
            background: "linear-gradient(to right, #6fcbb6, #9c64f4)",
            "> span": {
                backgroundColor: "primary"
            }
        }
    });
}

;// CONCATENATED MODULE: ./src/components/common/index.tsx



/***/ }),

/***/ 6347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ queryKeys)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (queryClient);
const queryKeys = {
    menu: {
        all: [
            "menu "
        ],
        option: (menuCode)=>[
                ...queryKeys.menu.all,
                menuCode
            ]
    },
    order: {
        all: [
            "order"
        ],
        byPhone: (phone)=>[
                ...queryKeys.order.all,
                phone
            ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;