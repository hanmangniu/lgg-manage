import Vue from "vue";
import Router from "vue-router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);
const Index = (r) => require.ensure([], () => r(require("@/pages/Index")), "Index");
//DataSearch
const DataSearch = (r) => require.ensure([], () => r(require("@/pages/DataSearch/DataSearch")), "DataSearch");
const DashBoard = (r) => require.ensure([], () => r(require("@/pages/DataSearch/DashBoard/DashBoard")), "DashBoard");
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "/dataSearch",
        name: "DataSearch",
        component: DataSearch,
        redirect: "/dataSearch/dashBoard",
        children: [
          {
            path: "dashBoard",
            name: "DashBoard",
            component: DashBoard,
          },
        ],
      },
    ],
  },
];
export default new Router({
  mode: "history",
  routes,
  strict: process.env.NODE_ENV !== "production",
});
