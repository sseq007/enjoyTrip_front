import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView";
import notice from "../views/notice/noticeBoard";
import location from "../views/location/tripLocation";
import noticeWrite from "../components/notice/noticeWrite";
import noticeModify from "../components/notice/noticeModify";
import noticeContent from "../components/notice/noticeContent";
import userPage from "@/components/user/userPage";
import userDelete from "@/components/user/userDelete";
import tripPartner from "../views/partner/tripPartner";
import partnerWrite from "../components/partner/partnerWrite";
Vue.use(VueRouter);

const routes = [
  {
    path: "/user/userPage",
    name: "myPage",
    component: userPage,
  },
  {
    path: "/user/userDelete",
    name: "userDelete",
    component: userDelete,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/triplocation",
    name: "triplocation",
    component: location,
  },
  {
    path: "/notice/write",
    name: "noticeWrite",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: noticeWrite,
  },
  {
    path: "/notice/list",
    name: "notice",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: notice,
  },
  {
    path: "/noticeview/:articleNo",
    name: "noticeview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: noticeContent,
  },
  {
    path: "/noticemodify/:articleNo",
    name: "noticemodify",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: noticeModify,
  },
  {
    path: "/trippartner",
    name: "trippartner",
    component: tripPartner,
  },
  {
    path: "/trippartner/write",
    name: "partnerWrite",
    component: partnerWrite,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
