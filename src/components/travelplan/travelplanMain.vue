
<template>
    <!-- header 부분  필요-->
    <div class="container">
        <div>
            <h2 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px" class="m-0 mt-5">여행 계획</h2>
            <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
        </div>
        <div>
            <p style="font-family: 'Noto Sans KR', sans-serif; opacity: 75%; margin-bottom: 5vh;">여행 계획을 세워보세요!</p>
            <div class="col-lg-8 col-md-12 col-sm-12 align-self-end">
                <div class="row">
                    <div class="col-md-7">
                    </div>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr class="text-center">
                        <th>지역</th>
                        <th>작성자</th>
                        <th>조회수</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <notice-list-item v-for="article in articles" :key="article.articleNo" :article="article"> </notice-list-item> -->
                    <plan-list-item v-for="article in articles" :key="article.articleNo" :article="article"></plan-list-item>
                </tbody>
            </table>
        </div>
        <button type="button" class="btn btn-outline-secondary" style="float: right" v-if="userInfo != null">
            <!-- <a href="/notice/write" style="background-color: transparent; color: #000; text-decoration-line: none">글쓰기</a> -->
            <router-link :to="'/travelplan/write'"
                style="background-color: transparent; color: #000; text-decoration-line: none">글쓰기</router-link>
        </button>
    </div>
</template>


<script>
import axios from "axios";
import PlanListItem from './travelplanListItem.vue';
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
    name: "TravelPlanList",
    components: {
        PlanListItem
    },
    data() {
        return {
            articles: []
        };
    },
    computed: {
        ...mapState(memberStore, ["userInfo"]),
    },
    created() {
        axios.get('http://localhost:8080/api/travelplan/list')
    .then(response => {
      console.log(response.data);
      this.articles = response.data;
    })
    .catch(error => {
      console.log(error);
    });
    },
    methods: {
        movePage() {

            // location.href="http://localhost:8080/boardwrite"

        },
    },
};
</script>

