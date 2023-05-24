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

            <div class="row">

                <div class="col-6">
                    <div id="map" style="width: 100%; height: 100%;"></div>

                </div>

                <div class="col-6">
                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" style="height: 70vh;">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card shadow bg-gray rounded">
                                    <div class="row">
                                        <img src="@/assets/img/line.png" style="width: 100%; height: 62vh;">
                                        
                                        <div style="text-align: center; font-size: 5vh;">나의 여행 계획 타임라인</div>
                                        
    
    
                                    </div>
                                </div>
                            </div>
                            <plan-info-item v-for="article in articles" :key="article.planNo"
                                :article="article"></plan-info-item>
    
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
                </div>

            </div>

            <div class="col text-center" style="margin-top: 2vh;">
                <button type="button" class="btn btn-outline-secondary"
                    onclick="location.href='/travelplan/list'">글목록</button>
                <router-link :to="'/planmodify/' + article.articleNo" class="btn btn-outline-secondary">글수정</router-link>
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
            map:null
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
                // this.drawPath();
                this.drawMarkers();
            })
            .catch(error => {
                console.log(error);
            });



    },
    mounted() {
        this.map = new window.kakao.maps.Map(document.getElementById("map"), {
            center: new window.kakao.maps.LatLng(37.500613, 127.036431),
            level: 13
        });
        // this.drawPath();
        
    },
    methods: {
        
        drawMarkers() {
            this.articles.forEach((localDto) => {
      const imageSrc = `/assets/img/location.png`;
          const imageSize = new window.kakao.maps.Size(30, 30);
          const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
                const markerPosition = new window.kakao.maps.LatLng(localDto.mapy, localDto.mapx);
                console.log(markerPosition);
    const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
        map: this.map,
        title:localDto.title
    });
                marker.setMap(this.map);
  });
},

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

