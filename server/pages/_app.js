(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ BOTTOM_HEIGHT),
  "Z": () => (/* binding */ Bottom)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/Settings"
const Settings_namespaceObject = require("@mui/icons-material/Settings");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LocalAtm"
const LocalAtm_namespaceObject = require("@mui/icons-material/LocalAtm");
var LocalAtm_default = /*#__PURE__*/__webpack_require__.n(LocalAtm_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/SmartToy"
const SmartToy_namespaceObject = require("@mui/icons-material/SmartToy");
var SmartToy_default = /*#__PURE__*/__webpack_require__.n(SmartToy_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Coffee"
const Coffee_namespaceObject = require("@mui/icons-material/Coffee");
var Coffee_default = /*#__PURE__*/__webpack_require__.n(Coffee_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/layout/Bottom.tsx








var BottomMenu;
(function(BottomMenu) {
    BottomMenu["MENU"] = "/menu";
    BottomMenu["GAME"] = "/game";
    BottomMenu["PAYMENT"] = "/payment";
    BottomMenu["SETTING"] = "/setting";
    BottomMenu["ORDER"] = "/order";
})(BottomMenu || (BottomMenu = {}));
const BOTTOM_HEIGHT = 65;
/* harmony default export */ function Bottom() {
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Bottom_Bottom, {
            height: BOTTOM_HEIGHT,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.BottomNavigation, {
                showLabels: true,
                value: router.pathname,
                onChange: (event, newValue)=>{
                    router.push(newValue);
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.BottomNavigationAction, {
                        value: BottomMenu.MENU,
                        label: "메뉴",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx((Coffee_default()), {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.BottomNavigationAction, {
                        value: BottomMenu.GAME,
                        label: "게임",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx((SmartToy_default()), {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.BottomNavigationAction, {
                        value: BottomMenu.ORDER,
                        label: "주문",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx((LocalAtm_default()), {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.BottomNavigationAction, {
                        value: BottomMenu.SETTING,
                        label: "설정",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx((Settings_default()), {})
                    })
                ]
            })
        })
    });
}
const Bottom_Bottom = styled_default()(material_.Paper)`
  position: absolute;
  bottom: 0;
  width: inherit;
  height: ${(props)=>props.height}px;
`;


/***/ }),

/***/ 9598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5871);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Main, {
        bottomHeight: _components_layout_Bottom__WEBPACK_IMPORTED_MODULE_2__/* .BOTTOM_HEIGHT */ .E,
        children: children
    });
}
const Main = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  height: 100vh;
  overflow: auto;
  padding-bottom: ${(props)=>props.bottomHeight * 2}px;
`;


/***/ }),

/***/ 9812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ Bottom/* default */.Z),
  "h": () => (/* reexport */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/layout/Header.tsx


function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
        position: "static",
        color: "primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                children: "COFFEE WORLD"
            })
        })
    });
}

// EXTERNAL MODULE: ./src/components/layout/Bottom.tsx + 5 modules
var Bottom = __webpack_require__(5871);
;// CONCATENATED MODULE: ./src/components/layout/index.tsx




/***/ }),

/***/ 7155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _queryClient__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "r": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6347);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5148);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queryClient__WEBPACK_IMPORTED_MODULE_0__]);
_queryClient__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 5148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ config_theme)
});

;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./src/config/theme.ts

const c = {
    orange: {
        900: "#e94b00",
        800: "#f26800",
        700: "#f77900",
        600: "#fc8a00",
        500: "#ff9600",
        400: "#ffa600",
        300: "#ffb640",
        200: "#ffcb78",
        100: "#ffe0ae",
        50: "#fff3de"
    },
    blue: {
        900: "#2a30df",
        800: "#0059ff",
        700: "#006dff",
        600: "#0082ff",
        500: "#0092ff",
        400: "#00a3ff",
        300: "#36b5ff",
        200: "#82caff",
        100: "#b7deff",
        50: "#e1f2ff"
    },
    red: {
        900: "#da0000",
        800: "#f11900",
        700: "#ff2600",
        600: "#ff3007",
        500: "#ff370d",
        400: "#ff5f37",
        300: "#ff805c",
        200: "#ffa68c",
        100: "#ffcab9",
        50: "#ffe8e6"
    },
    yellow: {
        900: "#959300",
        800: "#adbc00",
        700: "#bcd400",
        600: "#cceb00",
        500: "#d9ff00",
        400: "#d7f83d",
        300: "#dffb68",
        200: "#e9fd97",
        100: "#f4fec2",
        50: "#fbffe7"
    },
    green: {
        900: "#00993c",
        800: "#00bc53",
        700: "#00ce5f",
        600: "#00e36e",
        500: "#00f57a",
        400: "#00fb8d",
        300: "#00ffa6",
        200: "#84ffc2",
        100: "#baffda",
        50: "#e3fff0"
    }
};
const theme = (0,styles_namespaceObject.createTheme)({
    palette: {
        primary: {
            main: c.orange[400],
            light: c.orange[400],
            dark: c.orange[400],
            contrastText: c.orange[50]
        },
        secondary: {
            main: c.blue[800],
            light: c.blue[800],
            dark: c.blue[800],
            contrastText: c.blue[100]
        }
    },
    typography: {
        fontFamily: "IBM Plex Sans KR"
    }
});
/* harmony default export */ const config_theme = ((0,styles_namespaceObject.responsiveFontSizes)(theme, {
    factor: 1.25
}));


/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9812);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9752);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7155);
/* harmony import */ var _components_layout_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9598);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1027);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__, _config__WEBPACK_IMPORTED_MODULE_5__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__, _config__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Body, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CssBaseline, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
                theme: _config__WEBPACK_IMPORTED_MODULE_5__/* .theme */ .r,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Main__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
                            client: _config__WEBPACK_IMPORTED_MODULE_5__/* .queryClient */ .E,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* .Bottom */ .z, {})
                ]
            })
        ]
    });
}
const Body = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 500px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: hidden;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1027:
/***/ (() => {



/***/ }),

/***/ 1480:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6505));
module.exports = __webpack_exports__;

})();