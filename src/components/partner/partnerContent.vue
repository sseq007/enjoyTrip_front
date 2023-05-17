<template>
    <div>

        <div class="container">
            <div>
                <h2 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px" class="m-0 mt-5">여행 동행
                    찾기</h2>
                <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
            </div>
            <div style="height: 20px;"></div>
            <div>
                <!-- 이미지 주소 수정 필요 -->
                <img src="@/assets/img/tourist-1.jpg" class="" style="border-radius: 5%; width: 100%; height: 400px">

            </div>
            <div style="height: 70px;"></div>
        </div>
        <div class="container">

            <div class="row">

                <div class="col-md-8">
                    <div class="row">
                        <div class="col-11">

                            <h2>{{ article.subject }}</h2>
                            <div class="border border-white mt-5">
                                <div
                                    style="padding-left: 30px; padding-top: 20px; padding-right: 30px; padding-bottom: 20px;">
                                    <div class="d-flex">
                                        <p style="margin-right: 8px;">지역</p>
                                        <span style="margin-right: 8px;">{{ article.location }}</span>
                                        <p style="margin-right: 8px;">모집인원 </p>
                                        <span>{{ article.partnerCount }}</span>

                                    </div>
                                    <div>
                                        <i class="fi fi-rr-calendar-days" style="margin-right: 2px;"></i>
                                        {{ article.startDate }} ~ {{ article.endDate }}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 40px;">
                        <!-- 키워드 선택한거 가져오자 -->
                        <div>함께 관광 여행을 떠나려고 해요.</div>
                        <div>저는 사진 찍는 여행자에요</div>


                    </div>
                    <div style="margin-top: 40px;">
                        <!-- 키워드 선택한거 가져오자 -->
                        <div>{{ article.content }}</div>



                    </div>
                    <div style="margin-top: 100px;">
                        <!-- 키워드 선택한거 가져오자 -->
                        <div class="d-flex">
                            <div style="margin-right: 10px;">{{ article.registerTime }}</div>
                            <div style="margin-right: 10px;">조회수 {{ article.hit }}</div>
                            <div><a href="">신고하기</a></div>

                        </div>



                    </div>
                </div>
                <div class="col-md-4">
                    <div class="border border-white">
                        <div style="padding-left: 20px; padding-top: 20px; padding-right: 20px; padding-bottom: 20px;">

                            <div class="row">
                                <div class="col">
                                    <div class="d-flex" style="margin-bottom: 15px;">
                                        <img src="@/assets/img/noimg.jpg" class="profile_image"
                                            style="padding:4px; border-radius: 40%; width: 58px; height: 58px; margin-left: 25px;">

                                        <div style="margin-left: 15px;">
                                            <h5>SSAFY</h5>
                                            <div>40대 남성 대한민국</div>
                                        </div>
                                    </div>
                                    <div style="padding-top: 20px; margin-left: 25px;">
                                        <i class="fi fi-rr-bulb"></i>
                                        프로필 사진을 클릭해보세요!
                                        <button type="button" style="width: calc(100% - 15px); height: 60px; background-color: white; margin-top: 17px;"
                            class="btn">동행 신청하기</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>



            </div>



        </div>


    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "PartnerView",
    data() {
        return {
            article: []
        };
    },
    created() {
        axios.get(`http://localhost:8080/api/trippartner/view/${this.$route.params.articleNo}`)
            .then(response => {
                console.log(response.data);
                this.article = response.data;
            })
            .catch(error => {
                console.log(error);
            });

    },
    methods: {

    }


};
</script>

