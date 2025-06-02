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
exports.id = "app/api/messages/[conversationId]/route";
exports.ids = ["app/api/messages/[conversationId]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute&page=%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute.ts&appDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute&page=%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute.ts&appDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_gauthierfrere_Desktop_ANNONCE_src_app_api_messages_conversationId_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/messages/[conversationId]/route.ts */ \"(rsc)/./src/app/api/messages/[conversationId]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/messages/[conversationId]/route\",\n        pathname: \"/api/messages/[conversationId]\",\n        filename: \"route\",\n        bundlePath: \"app/api/messages/[conversationId]/route\"\n    },\n    resolvedPagePath: \"/Users/gauthierfrere/Desktop/ANNONCE/src/app/api/messages/[conversationId]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_gauthierfrere_Desktop_ANNONCE_src_app_api_messages_conversationId_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/messages/[conversationId]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZXNzYWdlcyUyRiU1QmNvbnZlcnNhdGlvbklkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtZXNzYWdlcyUyRiU1QmNvbnZlcnNhdGlvbklkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbWVzc2FnZXMlMkYlNUJjb252ZXJzYXRpb25JZCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmdhdXRoaWVyZnJlcmUlMkZEZXNrdG9wJTJGQU5OT05DRSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZnYXV0aGllcmZyZXJlJTJGRGVza3RvcCUyRkFOTk9OQ0UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUM7QUFDaEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyb3Nwb3QvP2Y3YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2dhdXRoaWVyZnJlcmUvRGVza3RvcC9BTk5PTkNFL3NyYy9hcHAvYXBpL21lc3NhZ2VzL1tjb252ZXJzYXRpb25JZF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL21lc3NhZ2VzL1tjb252ZXJzYXRpb25JZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9tZXNzYWdlcy9bY29udmVyc2F0aW9uSWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9tZXNzYWdlcy9bY29udmVyc2F0aW9uSWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2dhdXRoaWVyZnJlcmUvRGVza3RvcC9BTk5PTkNFL3NyYy9hcHAvYXBpL21lc3NhZ2VzL1tjb252ZXJzYXRpb25JZF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbWVzc2FnZXMvW2NvbnZlcnNhdGlvbklkXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute&page=%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute.ts&appDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/messages/[conversationId]/route.ts":
/*!********************************************************!*\
  !*** ./src/app/api/messages/[conversationId]/route.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\n\nasync function GET(request, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session?.user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Non autoris\\xe9\"\n            }, {\n                status: 401\n            });\n        }\n        const [listingId, otherUserId] = params.conversationId.split(\"-\");\n        // Récupérer tous les messages de la conversation\n        const messages = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.message.findMany({\n            where: {\n                listingId,\n                OR: [\n                    {\n                        AND: [\n                            {\n                                senderId: session.user.id\n                            },\n                            {\n                                recipientId: otherUserId\n                            }\n                        ]\n                    },\n                    {\n                        AND: [\n                            {\n                                senderId: otherUserId\n                            },\n                            {\n                                recipientId: session.user.id\n                            }\n                        ]\n                    }\n                ]\n            },\n            include: {\n                sender: {\n                    select: {\n                        id: true,\n                        name: true\n                    }\n                }\n            },\n            orderBy: {\n                createdAt: \"asc\"\n            }\n        });\n        // Marquer les messages non lus comme lus\n        // Marquer les messages comme lus\n        const unreadMessages = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.message.findMany({\n            where: {\n                listingId,\n                recipientId: session.user.id,\n                read: false\n            },\n            select: {\n                id: true\n            }\n        });\n        if (unreadMessages.length > 0) {\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.message.updateMany({\n                where: {\n                    id: {\n                        in: unreadMessages.map((msg)=>msg.id)\n                    }\n                },\n                data: {\n                    read: true\n                }\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(messages);\n    } catch (error) {\n        console.error(\"Error fetching messages:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Erreur lors de la r\\xe9cup\\xe9ration des messages\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9tZXNzYWdlcy9bY29udmVyc2F0aW9uSWRdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNFO0FBQ1A7QUFDRztBQUVsQyxlQUFlSSxJQUNwQkMsT0FBZ0IsRUFDaEIsRUFBRUMsTUFBTSxFQUEwQztJQUVsRCxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNTiwyREFBZ0JBLENBQUNFLGtEQUFXQTtRQUVsRCxJQUFJLENBQUNJLFNBQVNDLE1BQU07WUFDbEIsT0FBT1Isa0ZBQVlBLENBQUNTLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBZSxHQUN4QjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTSxDQUFDQyxXQUFXQyxZQUFZLEdBQUdQLE9BQU9RLGNBQWMsQ0FBQ0MsS0FBSyxDQUFDO1FBRTdELGlEQUFpRDtRQUNqRCxNQUFNQyxXQUFXLE1BQU1kLCtDQUFNQSxDQUFDZSxPQUFPLENBQUNDLFFBQVEsQ0FBQztZQUM3Q0MsT0FBTztnQkFDTFA7Z0JBQ0FRLElBQUk7b0JBQ0Y7d0JBQ0VDLEtBQUs7NEJBQ0g7Z0NBQUVDLFVBQVVmLFFBQVFDLElBQUksQ0FBQ2UsRUFBRTs0QkFBQzs0QkFDNUI7Z0NBQUVDLGFBQWFYOzRCQUFZO3lCQUM1QjtvQkFDSDtvQkFDQTt3QkFDRVEsS0FBSzs0QkFDSDtnQ0FBRUMsVUFBVVQ7NEJBQVk7NEJBQ3hCO2dDQUFFVyxhQUFhakIsUUFBUUMsSUFBSSxDQUFDZSxFQUFFOzRCQUFDO3lCQUNoQztvQkFDSDtpQkFDRDtZQUNIO1lBQ0FFLFNBQVM7Z0JBQ1BDLFFBQVE7b0JBQ05DLFFBQVE7d0JBQ05KLElBQUk7d0JBQ0pLLE1BQU07b0JBQ1I7Z0JBQ0Y7WUFDRjtZQUNBQyxTQUFTO2dCQUNQQyxXQUFXO1lBQ2I7UUFDRjtRQUVBLHlDQUF5QztRQUN6QyxpQ0FBaUM7UUFDakMsTUFBTUMsaUJBQWlCLE1BQU03QiwrQ0FBTUEsQ0FBQ2UsT0FBTyxDQUFDQyxRQUFRLENBQUM7WUFDbkRDLE9BQU87Z0JBQ0xQO2dCQUNBWSxhQUFhakIsUUFBUUMsSUFBSSxDQUFDZSxFQUFFO2dCQUM1QlMsTUFBTTtZQUNSO1lBQ0FMLFFBQVE7Z0JBQ05KLElBQUk7WUFDTjtRQUNGO1FBRUEsSUFBSVEsZUFBZUUsTUFBTSxHQUFHLEdBQUc7WUFDN0IsTUFBTS9CLCtDQUFNQSxDQUFDZSxPQUFPLENBQUNpQixVQUFVLENBQUM7Z0JBQzlCZixPQUFPO29CQUNMSSxJQUFJO3dCQUNGWSxJQUFJSixlQUFlSyxHQUFHLENBQUNDLENBQUFBLE1BQU9BLElBQUlkLEVBQUU7b0JBQ3RDO2dCQUNGO2dCQUNBZSxNQUFNO29CQUNKTixNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtRQUVBLE9BQU9oQyxrRkFBWUEsQ0FBQ1MsSUFBSSxDQUFDTztJQUMzQixFQUFFLE9BQU9OLE9BQU87UUFDZDZCLFFBQVE3QixLQUFLLENBQUMsNEJBQTRCQTtRQUMxQyxPQUFPVixrRkFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQThDLEdBQ3ZEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm9zcG90Ly4vc3JjL2FwcC9hcGkvbWVzc2FnZXMvW2NvbnZlcnNhdGlvbklkXS9yb3V0ZS50cz9hN2MzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGNvbnZlcnNhdGlvbklkOiBzdHJpbmcgfSB9XG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG5cbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ05vbiBhdXRvcmlzw6knIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBbbGlzdGluZ0lkLCBvdGhlclVzZXJJZF0gPSBwYXJhbXMuY29udmVyc2F0aW9uSWQuc3BsaXQoJy0nKTtcblxuICAgIC8vIFLDqWN1cMOpcmVyIHRvdXMgbGVzIG1lc3NhZ2VzIGRlIGxhIGNvbnZlcnNhdGlvblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgcHJpc21hLm1lc3NhZ2UuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgbGlzdGluZ0lkLFxuICAgICAgICBPUjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEFORDogW1xuICAgICAgICAgICAgICB7IHNlbmRlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcbiAgICAgICAgICAgICAgeyByZWNpcGllbnRJZDogb3RoZXJVc2VySWQgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgQU5EOiBbXG4gICAgICAgICAgICAgIHsgc2VuZGVySWQ6IG90aGVyVXNlcklkIH0sXG4gICAgICAgICAgICAgIHsgcmVjaXBpZW50SWQ6IHNlc3Npb24udXNlci5pZCB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBzZW5kZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnYXNjJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBNYXJxdWVyIGxlcyBtZXNzYWdlcyBub24gbHVzIGNvbW1lIGx1c1xuICAgIC8vIE1hcnF1ZXIgbGVzIG1lc3NhZ2VzIGNvbW1lIGx1c1xuICAgIGNvbnN0IHVucmVhZE1lc3NhZ2VzID0gYXdhaXQgcHJpc21hLm1lc3NhZ2UuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgbGlzdGluZ0lkLFxuICAgICAgICByZWNpcGllbnRJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICByZWFkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bnJlYWRNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCBwcmlzbWEubWVzc2FnZS51cGRhdGVNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgaW46IHVucmVhZE1lc3NhZ2VzLm1hcChtc2cgPT4gbXNnLmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHJlYWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG1lc3NhZ2VzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtZXNzYWdlczonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0VycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBtZXNzYWdlcycgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJHRVQiLCJyZXF1ZXN0IiwicGFyYW1zIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJsaXN0aW5nSWQiLCJvdGhlclVzZXJJZCIsImNvbnZlcnNhdGlvbklkIiwic3BsaXQiLCJtZXNzYWdlcyIsIm1lc3NhZ2UiLCJmaW5kTWFueSIsIndoZXJlIiwiT1IiLCJBTkQiLCJzZW5kZXJJZCIsImlkIiwicmVjaXBpZW50SWQiLCJpbmNsdWRlIiwic2VuZGVyIiwic2VsZWN0IiwibmFtZSIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJ1bnJlYWRNZXNzYWdlcyIsInJlYWQiLCJsZW5ndGgiLCJ1cGRhdGVNYW55IiwiaW4iLCJtYXAiLCJtc2ciLCJkYXRhIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/messages/[conversationId]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.hashedPassword) {\n                    console.log(\"User not found or no password:\", credentials.email);\n                    return null;\n                }\n                const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.hashedPassword);\n                if (!isValid) {\n                    console.log(\"Invalid password for user:\", credentials.email);\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    image: user.image,\n                    profileImage: user.profileImage,\n                    coverImage: user.coverImage\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.sub;\n                // Récupérer l'utilisateur avec ses images\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        id: token.sub\n                    }\n                });\n                if (user) {\n                    session.user.profileImage = user.profileImage;\n                    session.user.coverImage = user.coverImage;\n                }\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.sub = user.id;\n            }\n            return token;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDa0U7QUFDYjtBQUNmO0FBQ0g7QUFFNUIsTUFBTUksY0FBK0I7SUFDMUNDLFNBQVNKLG1FQUFhQSxDQUFDQywrQ0FBTUE7SUFDN0JJLFdBQVc7UUFDVE4sMkVBQW1CQSxDQUFDO1lBQ2xCTyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVU7b0JBQ2pELE9BQU87Z0JBQ1Q7Z0JBRUEsTUFBTUUsT0FBTyxNQUFNWiwrQ0FBTUEsQ0FBQ1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUNMUCxPQUFPRCxZQUFZQyxLQUFLO29CQUMxQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNLLFFBQVEsQ0FBQ0EsS0FBS0csY0FBYyxFQUFFO29CQUNqQ0MsUUFBUUMsR0FBRyxDQUFDLGtDQUFrQ1gsWUFBWUMsS0FBSztvQkFDL0QsT0FBTztnQkFDVDtnQkFFQSxNQUFNVyxVQUFVLE1BQU1qQixpREFBT0EsQ0FBQ0ssWUFBWUksUUFBUSxFQUFFRSxLQUFLRyxjQUFjO2dCQUV2RSxJQUFJLENBQUNHLFNBQVM7b0JBQ1pGLFFBQVFDLEdBQUcsQ0FBQyw4QkFBOEJYLFlBQVlDLEtBQUs7b0JBQzNELE9BQU87Z0JBQ1Q7Z0JBRUEsT0FBTztvQkFDTFksSUFBSVAsS0FBS08sRUFBRTtvQkFDWFosT0FBT0ssS0FBS0wsS0FBSztvQkFDakJGLE1BQU1PLEtBQUtQLElBQUk7b0JBQ2ZlLE9BQU9SLEtBQUtRLEtBQUs7b0JBQ2pCQyxjQUFjVCxLQUFLUyxZQUFZO29CQUMvQkMsWUFBWVYsS0FBS1UsVUFBVTtnQkFDN0I7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsV0FBVztRQUNULE1BQU1KLFNBQVEsRUFBRUEsT0FBTyxFQUFFSyxLQUFLLEVBQUU7WUFDOUIsSUFBSUwsUUFBUVgsSUFBSSxFQUFFO2dCQUNoQlcsUUFBUVgsSUFBSSxDQUFDTyxFQUFFLEdBQUdTLE1BQU1DLEdBQUc7Z0JBRTNCLDBDQUEwQztnQkFDMUMsTUFBTWpCLE9BQU8sTUFBTVosK0NBQU1BLENBQUNZLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFBRUssSUFBSVMsTUFBTUMsR0FBRztvQkFBQztnQkFDekI7Z0JBRUEsSUFBSWpCLE1BQU07b0JBQ1JXLFFBQVFYLElBQUksQ0FBQ1MsWUFBWSxHQUFHVCxLQUFLUyxZQUFZO29CQUM3Q0UsUUFBUVgsSUFBSSxDQUFDVSxVQUFVLEdBQUdWLEtBQUtVLFVBQVU7Z0JBQzNDO1lBQ0Y7WUFDQSxPQUFPQztRQUNUO1FBQ0EsTUFBTU8sS0FBSSxFQUFFRixLQUFLLEVBQUVoQixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUmdCLE1BQU1DLEdBQUcsR0FBR2pCLEtBQUtPLEVBQUU7WUFDckI7WUFDQSxPQUFPUztRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm9zcG90Ly4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BhdXRoL3ByaXNtYS1hZGFwdGVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0anMnO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ2VtYWlsJyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlci5oYXNoZWRQYXNzd29yZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIG5vdCBmb3VuZCBvciBubyBwYXNzd29yZDonLCBjcmVkZW50aWFscy5lbWFpbCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5oYXNoZWRQYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgcGFzc3dvcmQgZm9yIHVzZXI6JywgY3JlZGVudGlhbHMuZW1haWwpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2UsXG4gICAgICAgICAgcHJvZmlsZUltYWdlOiB1c2VyLnByb2ZpbGVJbWFnZSxcbiAgICAgICAgICBjb3ZlckltYWdlOiB1c2VyLmNvdmVySW1hZ2UsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pXG4gIF0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCdcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWI7XG5cbiAgICAgICAgLy8gUsOpY3Vww6lyZXIgbCd1dGlsaXNhdGV1ciBhdmVjIHNlcyBpbWFnZXNcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0b2tlbi5zdWIgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICBzZXNzaW9uLnVzZXIucHJvZmlsZUltYWdlID0gdXNlci5wcm9maWxlSW1hZ2U7XG4gICAgICAgICAgc2Vzc2lvbi51c2VyLmNvdmVySW1hZ2UgPSB1c2VyLmNvdmVySW1hZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uc3ViID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICB9XG59O1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiY29tcGFyZSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiaXNWYWxpZCIsImlkIiwiaW1hZ2UiLCJwcm9maWxlSW1hZ2UiLCJjb3ZlckltYWdlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJ0b2tlbiIsInN1YiIsImp3dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute&page=%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2F%5BconversationId%5D%2Froute.ts&appDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgauthierfrere%2FDesktop%2FANNONCE&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();