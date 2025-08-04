"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("../views/Home.vue");
var List_vue_1 = require("../views/List.vue");
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home_vue_1.default
        },
        {
            path: "/list",
            name: "list",
            component: List_vue_1.default
        }
    ]
});
exports.default = router;
