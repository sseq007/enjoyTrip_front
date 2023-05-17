
<template>
    <!-- header 부분  필요-->
    <div>

        <div class="container">
            <div>
                <h2 style="font-family:'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px" class="m-0 mt-5">여행 동행
                    찾기</h2>
                <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
            </div>
            <div>
                <p style="font-family:'Noto Sans KR', sans-serif; opacity: 75%">같이 동행하고 싶은 친구를 찾아봐요</p>
                <!-- </div>div class="col-lg-8 col-md-12 col-sm-12 align-self-end"> -->
                <div class="row">
                    <div class="col-md-3">
                        <div class="input-group input-group-sm">
                            <input type="text" name="word" id="word" class="form-control" placeholder="어디로 여행?" />
                            <button id="btn-search" class="btn btn-dark" type="button">검색</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex">
                            <button type="button" class="btn btn-secondary ms-5 me-1 w-50">최신순</button>
                            <button type="button" class="btn btn-secondary  me-1 w-50">인기순</button>
                            <button type="button" class="btn btn-secondary ms-1 me-5 w-50">모집중</button>

                        </div>

                    </div>
                        <!-- </div> -->
                  
                    <div class="col-md-2 " style="margin-left: 80px;">
                        <button id="btn-sortNum" class="btn btn-success" type="button">
                            <router-link :to="'/trippartner/write'"
                                style="background-color: transparent; color: #fff; text-decoration-line: none">친구찾기
                            </router-link></button>


                    </div>

                </div>
                <div style="height: 77px"></div>
                <div class="row">
                    <partner-list-item v-for="article in articles" :key="article.articleNo" :article="article"> </partner-list-item>
                    
                </div>
                <!-- </div> -->

            </div>


        </div>
    </div>
</template>


<script>
import axios from "axios";
import PartnerListItem from './partnerListitem.vue';
export default {
    name: "PartnerMain",
    components: {
        PartnerListItem
    },
    data() {
        return {
            articles: []
        };
    },
    created() {
        axios.get('http://localhost:8080/api/trippartner/list')
    .then(response => {
      console.log(response.data);
      this.articles = response.data;
    })
    .catch(error => {
      console.log(error);
    });


    },
    methods: {

    },
};
</script>

