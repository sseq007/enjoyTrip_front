<template>
    <div>
        <div class="container">
            <div style="margin-bottom: 5vh;">
                <h2 style="font-family:'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px" class="m-0 mt-5">여행 계획
                </h2>
                <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
            </div>

            <!-- 글 내용 -->
            <div class="row mb-5">


                <div class="d-flex" style="margin-bottom: 2vh;">

                    <img src="@/assets/img/user.png" style="width: 3vh; height: 3vh;">
                    <div style="margin-left: 2vh; font-size: 2vh;">{{ article.userId }}</div>
                </div>
                <div class="d-flex" style="margin-bottom: 2vh;">

                    <img src="@/assets/img/marker.png" style="width: 3vh; height: 3vh;">
                    <div style="margin-left: 2vh; font-size: 2vh;">{{ article.location }}</div>
                </div>

                <div class="d-flex" style="margin-bottom: 2vh;">

                    <img src="@/assets/img/calendar.png" style="width: 3vh; height: 3vh;">
                    <div style="margin-left: 2vh; font-size: 2vh;"> {{ article.startDate }} ~ {{
                        article.endDate }} </div>
                </div>

            </div>

            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <!-- <div class="carousel-item">
                        <div class="card mb-3 shadow bg-gray rounded">
                            <div class="row">
                                <div class="col-4">
                                    <img :src="article[0].firstimage" class="profile_image"
                                        style="border-radius: 1vh; width: 12vh; height: 10vh;">
                                </div>
                                <div class="col-8" style="padding: 1vh;">
                                    <div class="d-flex" style="justify-content: space-between;">
                                        <div style="margin-bottom: 1vh;"><strong>{{ article[0].title }}</strong></div>
                                    </div>
                                    <div>{{ article[0].addr1 }}</div>
                                </div>

                            </div>
                        </div>
                    </div> -->
                    <plan-info-item v-for="article in articles" :key="article.planNo" :article="article"></plan-info-item>

                    <!-- 추가 카드들 -->
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="col text-center">
                <button type="button" class="btn btn-outline-secondary"
                    onclick="location.href='/travelplan/list'">글목록</button>
                <router-link :to="'/noticemodify/' + article.articleNo" class="btn btn-outline-secondary">글수정</router-link>
                <!-- <button type="button" class="btn btn-outline-secondary">글수정</button> -->
                <button type="button" id="btn-delete" class="btn btn-outline-secondary" @click="deleteArticle">글삭제</button>

            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import PlanInfoItem from './travelplanInfo.vue';
export default {
    name: "PlanView",
    data() {
        return {
            article: [],
            articles: [],
        };
    },
    components: {
        PlanInfoItem
    },
    created() {
        // 비동기
        // TODO : 글번호에 해당하는 글정보 얻기.
        axios.get(`http://localhost:8080/api/travelplan/list/${this.$route.params.articleNo}`)
            .then(response => {
                console.log(response.data);
                this.article = response.data;
            })
            .catch(error => {
                console.log(error);
            });

        axios.get(`http://localhost:8080/api/travelplan/listinfo/${this.$route.params.articleNo}`)
            .then(response => {
                console.log(response.data);
                this.articles = response.data;
            })
            .catch(error => {
                console.log(error);
            });



    },
    methods: {
        deleteArticle() {
            if (confirm("정말로 삭제하실겁니까?")) {
                axios.delete(`http://localhost:8080/api/travelplan/delete/${this.$route.params.articleNo}`)
                    .then(response => {
                        console.log(response);
                        alert('삭제되었습니다.');
                        this.$router.push('/travelplan/list');


                    })
                    .catch(error => {
                        console.log(error);
                    });

            }
        }
    }


};
</script>

