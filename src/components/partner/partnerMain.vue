

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
                            <input type="text" name="word" id="word" class="form-control" placeholder="어디로 여행?" style="height: 4vh;" />
                            <button id="btn-search" class="btn btn-dark" type="button">검색</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-center" >
                            <button type="button" class="btn btn-secondary ms-5 me-1" style="width:5vw;">최신순</button>
                            <button type="button" class="btn btn-secondary" style="width:5vw;">인기순</button>
                            <button type="button" class="btn btn-secondary ms-1 me-5" style="width:5vw;">모집중</button>

                        </div>

                    </div>
                        <!-- </div> -->
                  
                    <div class="col-md-3 " style="text-align: end;">
                        <button id="btn-sortNum" class="btn" type="button" style="background-color: white;" @click="movePartner">
                            동행 찾기</button>


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
import { mapState } from "vuex";
import router from "@/router";
const memberStore = "memberStore";
export default {
    name: "PartnerMain",
    components: {
        PartnerListItem
    },
    computed: {
        ...mapState(memberStore, ["userInfo"]),
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

        movePartner() {
            if (this.userInfo == null) {
                alert("로그인이 필요한 기능입니다");
            } else {
                router.push('/trippartner/write')
            }
            
        }
    },
};
</script>


