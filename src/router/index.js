import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView";
import notice from "../views/notice/noticeBoard";
import location from "../views/location/tripLocation";
import noticeWrite from "../components/notice/noticeWrite";
import noticeModify from "../components/notice/noticeModify";
import noticeContent from "../components/notice/noticeContent";
import userLogin from "@/components/user/userLogin";
import userRegister from "@/components/user/userRegister";
import userPage from "@/components/user/userPage";
import userDelete from "@/components/user/userDelete";
import tripPartner from "../views/partner/tripPartner";
import partnerWrite from "../components/partner/partnerWrite";
import partnerContent from "../components/partner/partnerContent";
import hotplace from "../components/hotplace/hotplaceMain";
import hotplaceWrite from "../components/hotplace/hotplaceWrite";
import hotplaceContent from "../components/hotplace/hotplaceContent";
import hotplaceModify from "../components/hotplace/hotplaceModify";
import store from "@/store";

Vue.use(VueRouter);

// https://v3.router.vuejs.org/kr/guide/advanced/navigation-guards.html
const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["memberStore/checkUserInfo"];
  const checkToken = store.getters["memberStore/checkToken"];
  let token = sessionStorage.getItem("access-token");
  console.log("로그인 처리 전", checkUserInfo, token);

  if (checkUserInfo != null && token) {
    console.log("토큰 유효성 체크");
    await store.dispatch("memberStore/getUserInfo", token);
  }
  if (!checkToken || checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다.");
    // next({ name: "login" });
    router.push({ name: "login" });
  } else {
    console.log("로그인");
    next();
  }
};

const routes = [
  {
    path: "/user/userPage",
    name: "myPage",
    beforeEnter: onlyAuthUser,
    component: userPage,
  },
  {
    path: "/user/userLogin",
    name: "userLogin",
    component: userLogin,
  },
  {
    path: "/user/userRegister",
    name: "userRegister",
    component: userRegister,
  },
  {
    path: "/user/userDelete",
    name: "userDelete",
    beforeEnter: onlyAuthUser,
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
  {
    path: "/trippartnerview/:articleNo",
    name: "partnerContent",
    component: partnerContent,
  },
  {
    path: "/hotplace",
    name: "hotplace",
    component: hotplace,
  },
  {
    path: "/hotplace/write",
    name: "hotplaceWrite",
    component: hotplaceWrite,
  },
  {
    path: "/hotplace/modify",
    name: "hotplaceModify",
    component: hotplaceModify,
  },
  {
    path: "/hotplace/content",
    name: "hotplaceContent",
    component: hotplaceContent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
