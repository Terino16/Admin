"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./app/admin/page.jsx":
/*!****************************!*\
  !*** ./app/admin/page.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _context_SelectOptionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/SelectOptionContext */ \"(app-pages-browser)/./context/SelectOptionContext.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Sidebar */ \"(app-pages-browser)/./components/Sidebar.jsx\");\n/* harmony import */ var _components_Business__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Business */ \"(app-pages-browser)/./components/Business.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_profile_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profile.jsx */ \"(app-pages-browser)/./components/profile.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Content = ()=>{\n    _s();\n    const { selectedOption } = (0,_context_SelectOptionContext__WEBPACK_IMPORTED_MODULE_3__.useSelectedOption)();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"No session found\");\n        if (status === \"unauthenticated\") {\n            router.push(\"/\");\n        }\n    }, [\n        session,\n        router\n    ]);\n    const renderContent = ()=>{\n        switch(selectedOption){\n            case 0:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Business__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anubhavdube/Desktop/Admin/app/admin/page.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 16\n                }, undefined);\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anubhavdube/Desktop/Admin/app/admin/page.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 16\n                }, undefined);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Business__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anubhavdube/Desktop/Admin/app/admin/page.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 16\n                }, undefined);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full lg:ml-[20%] xl:ml-[18%]\",\n        children: renderContent()\n    }, void 0, false, {\n        fileName: \"/Users/anubhavdube/Desktop/Admin/app/admin/page.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Content, \"J5D9cTpEEu5I9weAwGqU6LJd198=\", false, function() {\n    return [\n        _context_SelectOptionContext__WEBPACK_IMPORTED_MODULE_3__.useSelectedOption,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Content;\nconst Page = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mb-[16px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anubhavdube/Desktop/Admin/app/admin/page.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anubhavdube/Desktop/Admin/app/admin/page.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {}, void 0, false, {\n                fileName: \"/Users/anubhavdube/Desktop/Admin/app/admin/page.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anubhavdube/Desktop/Admin/app/admin/page.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1;\n$RefreshReg$(_c, \"Content\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ0c7QUFDa0Q7QUFDL0M7QUFDRTtBQUNKO0FBQ007QUFFbkQsTUFBTVMsVUFBVTs7SUFDZCxNQUFNLEVBQUVDLGNBQWMsRUFBRSxHQUFHTiwrRUFBaUJBO0lBQzVDLE1BQU0sRUFBRU8sTUFBTUMsT0FBTyxFQUFDQyxNQUFNLEVBQUUsR0FBR04sMkRBQVVBO0lBQzNDLE1BQU1PLFNBQVNaLDBEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUmMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osSUFBSUgsV0FBUyxtQkFBbUI7WUFDOUJDLE9BQU9HLElBQUksQ0FBQztRQUNkO0lBQ0YsR0FBRztRQUFDTDtRQUFTRTtLQUFPO0lBRXBCLE1BQU1JLGdCQUFnQjtRQUNwQixPQUFRUjtZQUNOLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNKLDREQUFRQTs7Ozs7WUFDbEIsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0UsK0RBQU9BOzs7OztZQUNqQjtnQkFDRSxxQkFBTyw4REFBQ0YsNERBQVFBOzs7OztRQUNwQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7a0JBQWtDRjs7Ozs7O0FBRXJEO0dBMUJNVDs7UUFDdUJMLDJFQUFpQkE7UUFDWEcsdURBQVVBO1FBQzVCTCxzREFBU0E7OztLQUhwQk87QUE0Qk4sTUFBTVksT0FBTztJQUNYLHFCQUNFLDhEQUFDRjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNmLDJEQUFPQTs7Ozs7Ozs7OzswQkFFViw4REFBQ0k7Ozs7Ozs7Ozs7O0FBR1A7TUFUTVk7QUFXTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRtaW4vcGFnZS5qc3g/MzBlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IFNlbGVjdGVkT3B0aW9uUHJvdmlkZXIsIHVzZVNlbGVjdGVkT3B0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvU2VsZWN0T3B0aW9uQ29udGV4dFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IEJ1c2luZXNzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1c2luZXNzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS5qc3hcIjtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgeyBzZWxlY3RlZE9wdGlvbiB9ID0gdXNlU2VsZWN0ZWRPcHRpb24oKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTm8gc2Vzc2lvbiBmb3VuZFwiKVxuICAgIGlmIChzdGF0dXM9PT0ndW5hdXRoZW50aWNhdGVkJykge1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW3Nlc3Npb24sIHJvdXRlcl0pO1xuXG4gIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gPEJ1c2luZXNzIC8+O1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gPFByb2ZpbGUgLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPEJ1c2luZXNzIC8+O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOm1sLVsyMCVdIHhsOm1sLVsxOCVdXCI+e3JlbmRlckNvbnRlbnQoKX08L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLVsxNnB4XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIj5cbiAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRlbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTZWxlY3RlZE9wdGlvblByb3ZpZGVyIiwidXNlU2VsZWN0ZWRPcHRpb24iLCJTaWRlYmFyIiwiQnVzaW5lc3MiLCJ1c2VTZXNzaW9uIiwiUHJvZmlsZSIsIkNvbnRlbnQiLCJzZWxlY3RlZE9wdGlvbiIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJyZW5kZXJDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/page.jsx\n"));

/***/ })

});