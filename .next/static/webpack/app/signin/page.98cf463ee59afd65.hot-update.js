"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./app/signin/page.jsx":
/*!*****************************!*\
  !*** ./app/signin/page.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts */ \"(app-pages-browser)/./app/fonts.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* eslint-disable @next/next/no-img-element */ /* eslint-disable react/no-unescaped-entities */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(\"\");\n    const [emailError, setEmailError] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);\n    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(\"\");\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(); // Use data for session data\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status == \"authenticated\") window.location.href = \"allbu\";\n    });\n    // console.log(session, \"Session from Sign In\"); // Optional: Log session data\n    const handleSignin = async (e)=>{\n        console.log(\"Sign in\");\n        e.preventDefault();\n        try {\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n                email,\n                password,\n                redirect: false\n            });\n            if (!res.ok) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(res.error);\n            }\n            if (res.ok) {\n                router.replace(\"/allbusiness\");\n            }\n        } catch (error) {\n            // console.error(\"An unexpected error happened:\", error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"An unexpected error happened\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col items-center mt-[60px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-white  border-bordergray lg:w-[448px] w-full px-[16px] lg:h-[617px] rounded-[4px]  \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"\".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins700.className, \" text-black text-center text-[22px] lg:text-[28px]\"),\n                    children: \"Sign into your account\"\n                }, void 0, false, {\n                    fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"mt-8 space-y-8 border  border-bordergray  rounded-[4px] p-[16px] lg:p-[24px] \",\n                    onSubmit: handleSignin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" shadow-sm space-y-[26px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-[26px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"email-address\",\n                                                name: \"email\",\n                                                type: \"email\",\n                                                value: email,\n                                                onChange: (e)=>{\n                                                    const newEmail = e.target.value;\n                                                    setEmail(newEmail);\n                                                    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n                                                    if (!emailRegex.test(newEmail)) {\n                                                        setEmailError(\"Please enter a valid email address.\");\n                                                    } else {\n                                                        setEmailError(null);\n                                                    }\n                                                },\n                                                required: true,\n                                                className: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" block px-[16px] py-[13.5px] w-full text-[14px] text-black bg-transparent rounded-[4px] border border-bordergray appearance-none focus:outline-none focus:ring-0 focus:border-tealblue focus:border-[2px] peer\"),\n                                                placeholder: \" \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                for: \"email-address\",\n                                                className: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" absolute text-[14px] text-textgray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-tealblue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1\"),\n                                                children: \"Email address\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            emailError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" text-red-500 text-xs absolute bottom-[-4] mb-1\"),\n                                                children: emailError\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"password\",\n                                                name: \"password\",\n                                                type: \"password\",\n                                                value: password,\n                                                onChange: (e)=>{\n                                                    setPassword(e.target.value);\n                                                },\n                                                required: true,\n                                                class: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" block px-[16px] py-[13.5px] w-full text-[14px] text-textgray bg-transparent rounded-[4px] border border-bordergray appearance-none focus:outline-none focus:ring-0 focus:border-tealblue focus:border-[2px] peer\"),\n                                                placeholder: \" \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                for: \"password\",\n                                                className: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" absolute text-[14px] text-textgray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-tealblue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1\"),\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center justify-between space-y-8 w-full \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"\".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins600.className, \" text-white bg-dengologored w-full   py-[10px] text[16px] rounded-[4px] \"),\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"MPZVZOyOOFrGJ7FMSSVIGZBQruo=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzZCLFNBQVMsRUFBQztnREFDaENlLGFBQVk7Ozs7OzswREFFZCw4REFBQ0M7Z0RBQ0NDLEtBQUk7Z0RBQ0pqQixXQUFXLElBQXlCLE9BQXJCN0IsOENBQVVBLENBQUM2QixTQUFTLEVBQUM7MERBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPUCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNvQjtnQ0FDQ2IsTUFBSztnQ0FDTFAsV0FBVyxHQUF3QixPQUFyQjVCLDhDQUFVQSxDQUFDNEIsU0FBUyxFQUFDOzBDQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBMUhNekI7O1FBSThCWCx1REFBVUE7UUFDN0JDLHNEQUFTQTs7O0tBTHBCVTtBQTRITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc2lnbmluL3BhZ2UuanN4PzViZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBwb3BwaW5zNzAwLCBwb3BwaW5zNDAwLCBwb3BwaW5zNjAwLCBwb3BwaW5zNTAwIH0gZnJvbSBcIi4uL2ZvbnRzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTsgLy8gVXNlIGRhdGEgZm9yIHNlc3Npb24gZGF0YVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZihzdGF0dXM9PVwiYXV0aGVudGljYXRlZFwiKVxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJhbGxidVwiXG4gIH0pXG5cbiAgLy8gY29uc29sZS5sb2coc2Vzc2lvbiwgXCJTZXNzaW9uIGZyb20gU2lnbiBJblwiKTsgLy8gT3B0aW9uYWw6IExvZyBzZXNzaW9uIGRhdGFcblxuICBjb25zdCBoYW5kbGVTaWduaW4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2lnbiBpblwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgaWYoIXJlcy5vaykge1xuICAgICAgICB0b2FzdC5lcnJvcihyZXMuZXJyb3IpXG4gICAgICB9XG5cbiAgICAgIGlmKHJlcy5vaykge1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9hbGxidXNpbmVzc1wiKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZDpcIiwgZXJyb3IpO1xuICAgICAgdG9hc3QuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LVs2MHB4XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctd2hpdGUgIGJvcmRlci1ib3JkZXJncmF5IGxnOnctWzQ0OHB4XSB3LWZ1bGwgcHgtWzE2cHhdIGxnOmgtWzYxN3B4XSByb3VuZGVkLVs0cHhdICBcIj5cbiAgICAgICAgPGgyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwb3BwaW5zNzAwLmNsYXNzTmFtZX0gdGV4dC1ibGFjayB0ZXh0LWNlbnRlciB0ZXh0LVsyMnB4XSBsZzp0ZXh0LVsyOHB4XWB9XG4gICAgICAgID5cbiAgICAgICAgICBTaWduIGludG8geW91ciBhY2NvdW50XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktOCBib3JkZXIgIGJvcmRlci1ib3JkZXJncmF5ICByb3VuZGVkLVs0cHhdIHAtWzE2cHhdIGxnOnAtWzI0cHhdIFwiXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVNpZ25pbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHNoYWRvdy1zbSBzcGFjZS15LVsyNnB4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LVsyNnB4XVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsLWFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RW1haWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwobmV3RW1haWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG4gICAgICAgICAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KG5ld0VtYWlsKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsRXJyb3IoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbEVycm9yKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke3BvcHBpbnM0MDAuY2xhc3NOYW1lfSBibG9jayBweC1bMTZweF0gcHktWzEzLjVweF0gdy1mdWxsIHRleHQtWzE0cHhdIHRleHQtYmxhY2sgYmctdHJhbnNwYXJlbnQgcm91bmRlZC1bNHB4XSBib3JkZXIgYm9yZGVyLWJvcmRlcmdyYXkgYXBwZWFyYW5jZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLXRlYWxibHVlIGZvY3VzOmJvcmRlci1bMnB4XSBwZWVyYH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGZvcj1cImVtYWlsLWFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7cG9wcGluczQwMC5jbGFzc05hbWV9IGFic29sdXRlIHRleHQtWzE0cHhdIHRleHQtdGV4dGdyYXkgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTQgc2NhbGUtNzUgdG9wLTIgei0xMCBvcmlnaW4tWzBdIGJnLXdoaXRlIGRhcms6YmctZ3JheS05MDAgcHgtMiBwZWVyLWZvY3VzOnB4LTIgcGVlci1mb2N1czp0ZXh0LXRlYWxibHVlIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246LXRyYW5zbGF0ZS15LTEvMiBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRvcC0xLzIgcGVlci1mb2N1czp0b3AtMiBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTQgcnRsOnBlZXItZm9jdXM6dHJhbnNsYXRlLXgtMS80IHJ0bDpwZWVyLWZvY3VzOmxlZnQtYXV0byBzdGFydC0xYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7ZW1haWxFcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtwb3BwaW5zNDAwLmNsYXNzTmFtZX0gdGV4dC1yZWQtNTAwIHRleHQteHMgYWJzb2x1dGUgYm90dG9tLVstNF0gbWItMWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlbWFpbEVycm9yfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGNsYXNzPXtgICR7cG9wcGluczQwMC5jbGFzc05hbWV9IGJsb2NrIHB4LVsxNnB4XSBweS1bMTMuNXB4XSB3LWZ1bGwgdGV4dC1bMTRweF0gdGV4dC10ZXh0Z3JheSBiZy10cmFuc3BhcmVudCByb3VuZGVkLVs0cHhdIGJvcmRlciBib3JkZXItYm9yZGVyZ3JheSBhcHBlYXJhbmNlLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItdGVhbGJsdWUgZm9jdXM6Ym9yZGVyLVsycHhdIHBlZXJgfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgZm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7cG9wcGluczQwMC5jbGFzc05hbWV9IGFic29sdXRlIHRleHQtWzE0cHhdIHRleHQtdGV4dGdyYXkgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTQgc2NhbGUtNzUgdG9wLTIgei0xMCBvcmlnaW4tWzBdIGJnLXdoaXRlIGRhcms6YmctZ3JheS05MDAgcHgtMiBwZWVyLWZvY3VzOnB4LTIgcGVlci1mb2N1czp0ZXh0LXRlYWxibHVlIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246LXRyYW5zbGF0ZS15LTEvMiBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRvcC0xLzIgcGVlci1mb2N1czp0b3AtMiBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTQgcnRsOnBlZXItZm9jdXM6dHJhbnNsYXRlLXgtMS80IHJ0bDpwZWVyLWZvY3VzOmxlZnQtYXV0byBzdGFydC0xYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTggdy1mdWxsIFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwb3BwaW5zNjAwLmNsYXNzTmFtZX0gdGV4dC13aGl0ZSBiZy1kZW5nb2xvZ29yZWQgdy1mdWxsICAgcHktWzEwcHhdIHRleHRbMTZweF0gcm91bmRlZC1bNHB4XSBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidG9hc3QiLCJwb3BwaW5zNzAwIiwicG9wcGluczQwMCIsInBvcHBpbnM2MDAiLCJwb3BwaW5zNTAwIiwiTGluayIsIlBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwiZW1haWxFcnJvciIsInNldEVtYWlsRXJyb3IiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJyb3V0ZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJoYW5kbGVTaWduaW4iLCJlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwicmVzIiwicmVkaXJlY3QiLCJvayIsImVycm9yIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5ld0VtYWlsIiwidGFyZ2V0IiwiZW1haWxSZWdleCIsInRlc3QiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJmb3IiLCJwIiwiY2xhc3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/signin/page.jsx\n"));

/***/ })

});