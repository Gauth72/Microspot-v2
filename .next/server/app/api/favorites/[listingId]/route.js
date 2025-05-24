"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/favorites/[listingId]/route";
exports.ids = ["app/api/favorites/[listingId]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute&page=%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute.ts&appDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute&page=%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute.ts&appDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_gauthierfrere_Desktop_ANNONCE_src_app_api_favorites_listingId_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/favorites/[listingId]/route.ts */ \"(rsc)/./src/app/api/favorites/[listingId]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/favorites/[listingId]/route\",\n        pathname: \"/api/favorites/[listingId]\",\n        filename: \"route\",\n        bundlePath: \"app/api/favorites/[listingId]/route\"\n    },\n    resolvedPagePath: \"/Users/gauthierfrere/Desktop/ANNONCE/src/app/api/favorites/[listingId]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_gauthierfrere_Desktop_ANNONCE_src_app_api_favorites_listingId_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/favorites/[listingId]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmYXZvcml0ZXMlMkYlNUJsaXN0aW5nSWQlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmZhdm9yaXRlcyUyRiU1Qmxpc3RpbmdJZCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmZhdm9yaXRlcyUyRiU1Qmxpc3RpbmdJZCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmdhdXRoaWVyZnJlcmUlMkZEZXNrdG9wJTJGQU5OT05DRSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZnYXV0aGllcmZyZXJlJTJGRGVza3RvcCUyRkFOTk9OQ0UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0I7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyb3Nwb3QvPzU3YzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2dhdXRoaWVyZnJlcmUvRGVza3RvcC9BTk5PTkNFL3NyYy9hcHAvYXBpL2Zhdm9yaXRlcy9bbGlzdGluZ0lkXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZmF2b3JpdGVzL1tsaXN0aW5nSWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZmF2b3JpdGVzL1tsaXN0aW5nSWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9mYXZvcml0ZXMvW2xpc3RpbmdJZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZ2F1dGhpZXJmcmVyZS9EZXNrdG9wL0FOTk9OQ0Uvc3JjL2FwcC9hcGkvZmF2b3JpdGVzL1tsaXN0aW5nSWRdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2Zhdm9yaXRlcy9bbGlzdGluZ0lkXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute&page=%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute.ts&appDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/favorites/[listingId]/route.ts":
/*!****************************************************!*\
  !*** ./src/app/api/favorites/[listingId]/route.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\n\n// Ajouter un favori\nasync function POST(request, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session?.user?.email) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Non autoris\\xe9\", {\n                status: 401\n            });\n        }\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n            where: {\n                email: session.user.email\n            }\n        });\n        if (!user) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Utilisateur non trouv\\xe9\", {\n                status: 404\n            });\n        }\n        // Vérifier que l'annonce existe et n'appartient pas à l'utilisateur\n        const listing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.listing.findUnique({\n            where: {\n                id: params.listingId\n            }\n        });\n        if (!listing) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Annonce non trouv\\xe9e\", {\n                status: 404\n            });\n        }\n        if (listing.ownerId === user.id) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Vous ne pouvez pas mettre en favori vos propres annonces\", {\n                status: 400\n            });\n        }\n        // Créer le favori\n        const favorite = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.favorite.create({\n            data: {\n                userId: user.id,\n                listingId: params.listingId\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(favorite);\n    } catch (error) {\n        if (error.code === \"P2002\") {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Cette annonce est d\\xe9j\\xe0 dans vos favoris\", {\n                status: 400\n            });\n        }\n        console.error(\"Error adding favorite:\", error);\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Erreur interne du serveur\", {\n            status: 500\n        });\n    }\n}\n// Supprimer un favori\nasync function DELETE(request, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session?.user?.email) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Non autoris\\xe9\", {\n                status: 401\n            });\n        }\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n            where: {\n                email: session.user.email\n            }\n        });\n        if (!user) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Utilisateur non trouv\\xe9\", {\n                status: 404\n            });\n        }\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.favorite.delete({\n            where: {\n                userId_listingId: {\n                    userId: user.id,\n                    listingId: params.listingId\n                }\n            }\n        });\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](null, {\n            status: 204\n        });\n    } catch (error) {\n        if (error.code === \"P2025\") {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Favori non trouv\\xe9\", {\n                status: 404\n            });\n        }\n        console.error(\"Error removing favorite:\", error);\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Erreur interne du serveur\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9mYXZvcml0ZXMvW2xpc3RpbmdJZF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNFO0FBQ1A7QUFDRztBQUV6QyxvQkFBb0I7QUFDYixlQUFlSSxLQUNwQkMsT0FBZ0IsRUFDaEIsRUFBRUMsTUFBTSxFQUFxQztJQUU3QyxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNTiwyREFBZ0JBLENBQUNFLGtEQUFXQTtRQUNsRCxJQUFJLENBQUNJLFNBQVNDLE1BQU1DLE9BQU87WUFDekIsT0FBTyxJQUFJVCxrRkFBWUEsQ0FBQyxtQkFBZ0I7Z0JBQUVVLFFBQVE7WUFBSTtRQUN4RDtRQUVBLE1BQU1GLE9BQU8sTUFBTU4sK0NBQU1BLENBQUNNLElBQUksQ0FBQ0csVUFBVSxDQUFDO1lBQ3hDQyxPQUFPO2dCQUFFSCxPQUFPRixRQUFRQyxJQUFJLENBQUNDLEtBQUs7WUFBQztRQUNyQztRQUVBLElBQUksQ0FBQ0QsTUFBTTtZQUNULE9BQU8sSUFBSVIsa0ZBQVlBLENBQUMsNkJBQTBCO2dCQUFFVSxRQUFRO1lBQUk7UUFDbEU7UUFFQSxvRUFBb0U7UUFDcEUsTUFBTUcsVUFBVSxNQUFNWCwrQ0FBTUEsQ0FBQ1csT0FBTyxDQUFDRixVQUFVLENBQUM7WUFDOUNDLE9BQU87Z0JBQUVFLElBQUlSLE9BQU9TLFNBQVM7WUFBQztRQUNoQztRQUVBLElBQUksQ0FBQ0YsU0FBUztZQUNaLE9BQU8sSUFBSWIsa0ZBQVlBLENBQUMsMEJBQXVCO2dCQUFFVSxRQUFRO1lBQUk7UUFDL0Q7UUFFQSxJQUFJRyxRQUFRRyxPQUFPLEtBQUtSLEtBQUtNLEVBQUUsRUFBRTtZQUMvQixPQUFPLElBQUlkLGtGQUFZQSxDQUFDLDREQUE0RDtnQkFBRVUsUUFBUTtZQUFJO1FBQ3BHO1FBRUEsa0JBQWtCO1FBQ2xCLE1BQU1PLFdBQVcsTUFBTWYsK0NBQU1BLENBQUNlLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1lBQzVDQyxNQUFNO2dCQUNKQyxRQUFRWixLQUFLTSxFQUFFO2dCQUNmQyxXQUFXVCxPQUFPUyxTQUFTO1lBQzdCO1FBQ0Y7UUFFQSxPQUFPZixrRkFBWUEsQ0FBQ3FCLElBQUksQ0FBQ0o7SUFDM0IsRUFBRSxPQUFPSyxPQUFPO1FBQ2QsSUFBSSxNQUFlQyxJQUFJLEtBQUssU0FBUztZQUNuQyxPQUFPLElBQUl2QixrRkFBWUEsQ0FBQyxpREFBMkM7Z0JBQUVVLFFBQVE7WUFBSTtRQUNuRjtRQUNBYyxRQUFRRixLQUFLLENBQUMsMEJBQTBCQTtRQUN4QyxPQUFPLElBQUl0QixrRkFBWUEsQ0FBQyw2QkFBNkI7WUFBRVUsUUFBUTtRQUFJO0lBQ3JFO0FBQ0Y7QUFFQSxzQkFBc0I7QUFDZixlQUFlZSxPQUNwQnBCLE9BQWdCLEVBQ2hCLEVBQUVDLE1BQU0sRUFBcUM7SUFFN0MsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTU4sMkRBQWdCQSxDQUFDRSxrREFBV0E7UUFDbEQsSUFBSSxDQUFDSSxTQUFTQyxNQUFNQyxPQUFPO1lBQ3pCLE9BQU8sSUFBSVQsa0ZBQVlBLENBQUMsbUJBQWdCO2dCQUFFVSxRQUFRO1lBQUk7UUFDeEQ7UUFFQSxNQUFNRixPQUFPLE1BQU1OLCtDQUFNQSxDQUFDTSxJQUFJLENBQUNHLFVBQVUsQ0FBQztZQUN4Q0MsT0FBTztnQkFBRUgsT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1lBQUM7UUFDckM7UUFFQSxJQUFJLENBQUNELE1BQU07WUFDVCxPQUFPLElBQUlSLGtGQUFZQSxDQUFDLDZCQUEwQjtnQkFBRVUsUUFBUTtZQUFJO1FBQ2xFO1FBRUEsTUFBTVIsK0NBQU1BLENBQUNlLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDO1lBQzNCZCxPQUFPO2dCQUNMZSxrQkFBa0I7b0JBQ2hCUCxRQUFRWixLQUFLTSxFQUFFO29CQUNmQyxXQUFXVCxPQUFPUyxTQUFTO2dCQUM3QjtZQUNGO1FBQ0Y7UUFFQSxPQUFPLElBQUlmLGtGQUFZQSxDQUFDLE1BQU07WUFBRVUsUUFBUTtRQUFJO0lBQzlDLEVBQUUsT0FBT1ksT0FBTztRQUNkLElBQUksTUFBZUMsSUFBSSxLQUFLLFNBQVM7WUFDbkMsT0FBTyxJQUFJdkIsa0ZBQVlBLENBQUMsd0JBQXFCO2dCQUFFVSxRQUFRO1lBQUk7UUFDN0Q7UUFDQWMsUUFBUUYsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBTyxJQUFJdEIsa0ZBQVlBLENBQUMsNkJBQTZCO1lBQUVVLFFBQVE7UUFBSTtJQUNyRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm9zcG90Ly4vc3JjL2FwcC9hcGkvZmF2b3JpdGVzL1tsaXN0aW5nSWRdL3JvdXRlLnRzPzAzYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJztcblxuLy8gQWpvdXRlciB1biBmYXZvcmlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBsaXN0aW5nSWQ6IHN0cmluZyB9IH1cbikge1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZSgnTm9uIGF1dG9yaXPDqScsIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKCdVdGlsaXNhdGV1ciBub24gdHJvdXbDqScsIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuXG4gICAgLy8gVsOpcmlmaWVyIHF1ZSBsJ2Fubm9uY2UgZXhpc3RlIGV0IG4nYXBwYXJ0aWVudCBwYXMgw6AgbCd1dGlsaXNhdGV1clxuICAgIGNvbnN0IGxpc3RpbmcgPSBhd2FpdCBwcmlzbWEubGlzdGluZy5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBwYXJhbXMubGlzdGluZ0lkIH1cbiAgICB9KTtcblxuICAgIGlmICghbGlzdGluZykge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ0Fubm9uY2Ugbm9uIHRyb3V2w6llJywgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICBpZiAobGlzdGluZy5vd25lcklkID09PSB1c2VyLmlkKSB7XG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZSgnVm91cyBuZSBwb3V2ZXogcGFzIG1ldHRyZSBlbiBmYXZvcmkgdm9zIHByb3ByZXMgYW5ub25jZXMnLCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIC8vIENyw6llciBsZSBmYXZvcmlcbiAgICBjb25zdCBmYXZvcml0ZSA9IGF3YWl0IHByaXNtYS5mYXZvcml0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgIGxpc3RpbmdJZDogcGFyYW1zLmxpc3RpbmdJZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGZhdm9yaXRlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoKGVycm9yIGFzIGFueSkuY29kZSA9PT0gJ1AyMDAyJykge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ0NldHRlIGFubm9uY2UgZXN0IGTDqWrDoCBkYW5zIHZvcyBmYXZvcmlzJywgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIGZhdm9yaXRlOicsIGVycm9yKTtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZSgnRXJyZXVyIGludGVybmUgZHUgc2VydmV1cicsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuLy8gU3VwcHJpbWVyIHVuIGZhdm9yaVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgbGlzdGluZ0lkOiBzdHJpbmcgfSB9XG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ05vbiBhdXRvcmlzw6knLCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfVxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZSgnVXRpbGlzYXRldXIgbm9uIHRyb3V2w6knLCB7IHN0YXR1czogNDA0IH0pO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5mYXZvcml0ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlcklkX2xpc3RpbmdJZDoge1xuICAgICAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgICAgICBsaXN0aW5nSWQ6IHBhcmFtcy5saXN0aW5nSWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UobnVsbCwgeyBzdGF0dXM6IDIwNCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoKGVycm9yIGFzIGFueSkuY29kZSA9PT0gJ1AyMDI1Jykge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ0Zhdm9yaSBub24gdHJvdXbDqScsIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIGZhdm9yaXRlOicsIGVycm9yKTtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZSgnRXJyZXVyIGludGVybmUgZHUgc2VydmV1cicsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJQT1NUIiwicmVxdWVzdCIsInBhcmFtcyIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJzdGF0dXMiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJsaXN0aW5nIiwiaWQiLCJsaXN0aW5nSWQiLCJvd25lcklkIiwiZmF2b3JpdGUiLCJjcmVhdGUiLCJkYXRhIiwidXNlcklkIiwianNvbiIsImVycm9yIiwiY29kZSIsImNvbnNvbGUiLCJERUxFVEUiLCJkZWxldGUiLCJ1c2VySWRfbGlzdGluZ0lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/favorites/[listingId]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    },\n                    include: {\n                        profileImage: true\n                    }\n                });\n                if (!user || !user.password) {\n                    return null;\n                }\n                const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.password);\n                if (!isValid) {\n                    return null;\n                }\n                return user;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.sub;\n                // Récupérer l'utilisateur avec son image de profil\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        id: token.sub\n                    },\n                    include: {\n                        profileImage: true\n                    }\n                });\n                if (user?.profileImage) {\n                    session.user.profileImage = {\n                        url: user.profileImage.url,\n                        publicId: user.profileImage.publicId\n                    };\n                }\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.sub = user.id;\n            }\n            return token;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDa0U7QUFDYjtBQUNmO0FBQ0g7QUFFNUIsTUFBTUksY0FBK0I7SUFDMUNDLFNBQVNKLG1FQUFhQSxDQUFDQywrQ0FBTUE7SUFDN0JJLFdBQVc7UUFDVE4sMkVBQW1CQSxDQUFDO1lBQ2xCTyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVU7b0JBQ2pELE9BQU87Z0JBQ1Q7Z0JBRUEsTUFBTUUsT0FBTyxNQUFNWiwrQ0FBTUEsQ0FBQ1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUNMUCxPQUFPRCxZQUFZQyxLQUFLO29CQUMxQjtvQkFDQVEsU0FBUzt3QkFDUEMsY0FBYztvQkFDaEI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDSixRQUFRLENBQUNBLEtBQUtGLFFBQVEsRUFBRTtvQkFDM0IsT0FBTztnQkFDVDtnQkFFQSxNQUFNTyxVQUFVLE1BQU1oQixpREFBT0EsQ0FBQ0ssWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO2dCQUVqRSxJQUFJLENBQUNPLFNBQVM7b0JBQ1osT0FBTztnQkFDVDtnQkFFQSxPQUFPTDtZQUNUO1FBQ0Y7S0FDRDtJQUNETSxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxXQUFXO1FBQ1QsTUFBTUosU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBRTtZQUM5QixJQUFJTCxRQUFRTixJQUFJLEVBQUU7Z0JBQ2hCTSxRQUFRTixJQUFJLENBQUNZLEVBQUUsR0FBR0QsTUFBTUUsR0FBRztnQkFFM0IsbURBQW1EO2dCQUNuRCxNQUFNYixPQUFPLE1BQU1aLCtDQUFNQSxDQUFDWSxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVVLElBQUlELE1BQU1FLEdBQUc7b0JBQUM7b0JBQ3ZCVixTQUFTO3dCQUFFQyxjQUFjO29CQUFLO2dCQUNoQztnQkFFQSxJQUFJSixNQUFNSSxjQUFjO29CQUN0QkUsUUFBUU4sSUFBSSxDQUFDSSxZQUFZLEdBQUc7d0JBQzFCVSxLQUFLZCxLQUFLSSxZQUFZLENBQUNVLEdBQUc7d0JBQzFCQyxVQUFVZixLQUFLSSxZQUFZLENBQUNXLFFBQVE7b0JBQ3RDO2dCQUNGO1lBQ0Y7WUFDQSxPQUFPVDtRQUNUO1FBQ0EsTUFBTVUsS0FBSSxFQUFFTCxLQUFLLEVBQUVYLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSVyxNQUFNRSxHQUFHLEdBQUdiLEtBQUtZLEVBQUU7WUFDckI7WUFDQSxPQUFPRDtRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm9zcG90Ly4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BhdXRoL3ByaXNtYS1hZGFwdGVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0anMnO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ2VtYWlsJyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgcHJvZmlsZUltYWdlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlci5wYXNzd29yZCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9LFxuICAgIH0pXG4gIF0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCdcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWI7XG5cbiAgICAgICAgLy8gUsOpY3Vww6lyZXIgbCd1dGlsaXNhdGV1ciBhdmVjIHNvbiBpbWFnZSBkZSBwcm9maWxcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0b2tlbi5zdWIgfSxcbiAgICAgICAgICBpbmNsdWRlOiB7IHByb2ZpbGVJbWFnZTogdHJ1ZSB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXNlcj8ucHJvZmlsZUltYWdlKSB7XG4gICAgICAgICAgc2Vzc2lvbi51c2VyLnByb2ZpbGVJbWFnZSA9IHtcbiAgICAgICAgICAgIHVybDogdXNlci5wcm9maWxlSW1hZ2UudXJsLFxuICAgICAgICAgICAgcHVibGljSWQ6IHVzZXIucHJvZmlsZUltYWdlLnB1YmxpY0lkLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uc3ViID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICB9XG59O1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiY29tcGFyZSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaW5jbHVkZSIsInByb2ZpbGVJbWFnZSIsImlzVmFsaWQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsInRva2VuIiwiaWQiLCJzdWIiLCJ1cmwiLCJwdWJsaWNJZCIsImp3dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    globalForPrisma.prisma = prisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsR0FBRztBQUVuRSxJQUFJSSxJQUF5QixFQUFjO0lBQ3pDSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyb3Nwb3QvLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute&page=%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffavorites%2F%5BlistingId%5D%2Froute.ts&appDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();