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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts */ \"(app-pages-browser)/./app/fonts.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* eslint-disable @next/next/no-img-element */ /* eslint-disable react/no-unescaped-entities */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(\"\");\n    const [emailError, setEmailError] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);\n    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(\"\");\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(); // Use data for session data\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status == \"authenticated\") window.location.href = \"\";\n    });\n    // console.log(session, \"Session from Sign In\"); // Optional: Log session data\n    const handleSignin = async (e)=>{\n        console.log(\"Sign in\");\n        e.preventDefault();\n        try {\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n                email,\n                password,\n                redirect: false\n            });\n            if (!res.ok) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(res.error);\n            }\n            if (res.ok) {\n                router.replace(\"/allbusiness\");\n            }\n        } catch (error) {\n            // console.error(\"An unexpected error happened:\", error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"An unexpected error happened\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col items-center mt-[60px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-white  border-bordergray lg:w-[448px] w-full px-[16px] lg:h-[617px] rounded-[4px]  \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"\".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins700.className, \" text-black text-center text-[22px] lg:text-[28px]\"),\n                    children: \"Sign into your account\"\n                }, void 0, false, {\n                    fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"mt-8 space-y-8 border  border-bordergray  rounded-[4px] p-[16px] lg:p-[24px] \",\n                    onSubmit: handleSignin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" shadow-sm space-y-[26px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-[26px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"email-address\",\n                                                name: \"email\",\n                                                type: \"email\",\n                                                value: email,\n                                                onChange: (e)=>{\n                                                    const newEmail = e.target.value;\n                                                    setEmail(newEmail);\n                                                    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n                                                    if (!emailRegex.test(newEmail)) {\n                                                        setEmailError(\"Please enter a valid email address.\");\n                                                    } else {\n                                                        setEmailError(null);\n                                                    }\n                                                },\n                                                required: true,\n                                                className: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" block px-[16px] py-[13.5px] w-full text-[14px] text-black bg-transparent rounded-[4px] border border-bordergray appearance-none focus:outline-none focus:ring-0 focus:border-tealblue focus:border-[2px] peer\"),\n                                                placeholder: \" \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                for: \"email-address\",\n                                                className: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" absolute text-[14px] text-textgray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-tealblue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1\"),\n                                                children: \"Email address\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            emailError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" text-red-500 text-xs absolute bottom-[-4] mb-1\"),\n                                                children: emailError\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"password\",\n                                                name: \"password\",\n                                                type: \"password\",\n                                                value: password,\n                                                onChange: (e)=>{\n                                                    setPassword(e.target.value);\n                                                },\n                                                required: true,\n                                                class: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" block px-[16px] py-[13.5px] w-full text-[14px] text-textgray bg-transparent rounded-[4px] border border-bordergray appearance-none focus:outline-none focus:ring-0 focus:border-tealblue focus:border-[2px] peer\"),\n                                                placeholder: \" \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                for: \"password\",\n                                                className: \" \".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins400.className, \" absolute text-[14px] text-textgray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-tealblue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1\"),\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center justify-between space-y-8 w-full \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"\".concat(_fonts__WEBPACK_IMPORTED_MODULE_5__.poppins600.className, \" text-white bg-dengologored w-full   py-[10px] text[16px] rounded-[4px] \"),\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anubhavdube/Desktop/Admin/app/signin/page.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"MPZVZOyOOFrGJ7FMSSVIGZBQruo=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzZCLFNBQVMsRUFBQztnREFDaENlLGFBQVk7Ozs7OzswREFFZCw4REFBQ0M7Z0RBQ0NDLEtBQUk7Z0RBQ0pqQixXQUFXLElBQXlCLE9BQXJCN0IsOENBQVVBLENBQUM2QixTQUFTLEVBQUM7MERBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPUCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNvQjtnQ0FDQ2IsTUFBSztnQ0FDTFAsV0FBVyxHQUF3QixPQUFyQjVCLDhDQUFVQSxDQUFDNEIsU0FBUyxFQUFDOzBDQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBMUhNekI7O1FBSThCWCx1REFBVUE7UUFDN0JDLHNEQUFTQTs7O0tBTHBCVTtBQTRITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc2lnbmluL3BhZ2UuanN4PzViZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBwb3BwaW5zNzAwLCBwb3BwaW5zNDAwLCBwb3BwaW5zNjAwLCBwb3BwaW5zNTAwIH0gZnJvbSBcIi4uL2ZvbnRzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTsgLy8gVXNlIGRhdGEgZm9yIHNlc3Npb24gZGF0YVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZihzdGF0dXM9PVwiYXV0aGVudGljYXRlZFwiKVxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJcIlxuICB9KVxuXG4gIC8vIGNvbnNvbGUubG9nKHNlc3Npb24sIFwiU2Vzc2lvbiBmcm9tIFNpZ24gSW5cIik7IC8vIE9wdGlvbmFsOiBMb2cgc2Vzc2lvbiBkYXRhXG5cbiAgY29uc3QgaGFuZGxlU2lnbmluID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpZ24gaW5cIik7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFyZXMub2spIHtcbiAgICAgICAgdG9hc3QuZXJyb3IocmVzLmVycm9yKVxuICAgICAgfVxuXG4gICAgICBpZihyZXMub2spIHtcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvYWxsYnVzaW5lc3NcIilcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWQ6XCIsIGVycm9yKTtcbiAgICAgIHRvYXN0LmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC1bNjBweF1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLXdoaXRlICBib3JkZXItYm9yZGVyZ3JheSBsZzp3LVs0NDhweF0gdy1mdWxsIHB4LVsxNnB4XSBsZzpoLVs2MTdweF0gcm91bmRlZC1bNHB4XSAgXCI+XG4gICAgICAgIDxoMlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cG9wcGluczcwMC5jbGFzc05hbWV9IHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgdGV4dC1bMjJweF0gbGc6dGV4dC1bMjhweF1gfVxuICAgICAgICA+XG4gICAgICAgICAgU2lnbiBpbnRvIHlvdXIgYWNjb3VudFxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtOCBzcGFjZS15LTggYm9yZGVyICBib3JkZXItYm9yZGVyZ3JheSAgcm91bmRlZC1bNHB4XSBwLVsxNnB4XSBsZzpwLVsyNHB4XSBcIlxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTaWduaW59XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzaGFkb3ctc20gc3BhY2UteS1bMjZweF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS1bMjZweF1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VtYWlsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKG5ld0VtYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdChuZXdFbWFpbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbEVycm9yKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWxFcnJvcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtwb3BwaW5zNDAwLmNsYXNzTmFtZX0gYmxvY2sgcHgtWzE2cHhdIHB5LVsxMy41cHhdIHctZnVsbCB0ZXh0LVsxNHB4XSB0ZXh0LWJsYWNrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtWzRweF0gYm9yZGVyIGJvcmRlci1ib3JkZXJncmF5IGFwcGVhcmFuY2Utbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci10ZWFsYmx1ZSBmb2N1czpib3JkZXItWzJweF0gcGVlcmB9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBmb3I9XCJlbWFpbC1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke3BvcHBpbnM0MDAuY2xhc3NOYW1lfSBhYnNvbHV0ZSB0ZXh0LVsxNHB4XSB0ZXh0LXRleHRncmF5IGRhcms6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS00IHNjYWxlLTc1IHRvcC0yIHotMTAgb3JpZ2luLVswXSBiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwIHB4LTIgcGVlci1mb2N1czpweC0yIHBlZXItZm9jdXM6dGV4dC10ZWFsYmx1ZSBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOi10cmFuc2xhdGUteS0xLzIgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0b3AtMS8yIHBlZXItZm9jdXM6dG9wLTIgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS00IHJ0bDpwZWVyLWZvY3VzOnRyYW5zbGF0ZS14LTEvNCBydGw6cGVlci1mb2N1czpsZWZ0LWF1dG8gc3RhcnQtMWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2VtYWlsRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7cG9wcGluczQwMC5jbGFzc05hbWV9IHRleHQtcmVkLTUwMCB0ZXh0LXhzIGFic29sdXRlIGJvdHRvbS1bLTRdIG1iLTFgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZW1haWxFcnJvcn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBjbGFzcz17YCAke3BvcHBpbnM0MDAuY2xhc3NOYW1lfSBibG9jayBweC1bMTZweF0gcHktWzEzLjVweF0gdy1mdWxsIHRleHQtWzE0cHhdIHRleHQtdGV4dGdyYXkgYmctdHJhbnNwYXJlbnQgcm91bmRlZC1bNHB4XSBib3JkZXIgYm9yZGVyLWJvcmRlcmdyYXkgYXBwZWFyYW5jZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLXRlYWxibHVlIGZvY3VzOmJvcmRlci1bMnB4XSBwZWVyYH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke3BvcHBpbnM0MDAuY2xhc3NOYW1lfSBhYnNvbHV0ZSB0ZXh0LVsxNHB4XSB0ZXh0LXRleHRncmF5IGRhcms6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS00IHNjYWxlLTc1IHRvcC0yIHotMTAgb3JpZ2luLVswXSBiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwIHB4LTIgcGVlci1mb2N1czpweC0yIHBlZXItZm9jdXM6dGV4dC10ZWFsYmx1ZSBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOi10cmFuc2xhdGUteS0xLzIgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0b3AtMS8yIHBlZXItZm9jdXM6dG9wLTIgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS00IHJ0bDpwZWVyLWZvY3VzOnRyYW5zbGF0ZS14LTEvNCBydGw6cGVlci1mb2N1czpsZWZ0LWF1dG8gc3RhcnQtMWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS04IHctZnVsbCBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cG9wcGluczYwMC5jbGFzc05hbWV9IHRleHQtd2hpdGUgYmctZGVuZ29sb2dvcmVkIHctZnVsbCAgIHB5LVsxMHB4XSB0ZXh0WzE2cHhdIHJvdW5kZWQtWzRweF0gYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJzaWduSW4iLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwicG9wcGluczcwMCIsInBvcHBpbnM0MDAiLCJwb3BwaW5zNjAwIiwicG9wcGluczUwMCIsIkxpbmsiLCJQYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsImVtYWlsRXJyb3IiLCJzZXRFbWFpbEVycm9yIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwicm91dGVyIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaGFuZGxlU2lnbmluIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInJlZGlyZWN0Iiwib2siLCJlcnJvciIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJuZXdFbWFpbCIsInRhcmdldCIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiZm9yIiwicCIsImNsYXNzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/signin/page.jsx\n"));

/***/ })

});