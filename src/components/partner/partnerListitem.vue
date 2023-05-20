
<template>
    <div class="col-lg-3 col-md-4 col-sm-12">
        <div class="card mb-3 shadow bg-body rounded">
            <div>
                <div class="row" style="padding-top: 8px; padding-bottom: 8px; padding-left: 14px; padding-right: 14px;">
                    <div class="col-6">
                        <div class="d-flex">
                            <img src="@/assets/img/noimg.jpg" class="profile_image"
                                style="padding:4px; border-radius: 40%; width: 40px; height: 40px; margin-right: 8px; ">

                            <div>
                                <div>{{article.userId}}</div>
                                <div style="color: #80B5ff;">40대 남성</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6" style="padding-left: 18px;">

                        <div>
                            <i class="fi fi-rr-calendar-days">여행 기간</i>
                            <div style="color: #25E09A;">
                                {{ article.startDate.substring(5)}} ~ {{ article.endDate.substring(5)}}
                            </div>
                        </div>

                    </div>
                </div>
                <!-- <div class="img"> -->
                <div  class="img-expension" @mouseenter="showDiv" @mouseleave="hideDiv">
                   <router-link :to="'/trippartnerview/' + article.articleNo">
                    <!-- <img :src="require(`@/assets/img/partnerimg/${article.partnerImage}`)" style="border-radius: 5%; width: 100%; height: 144px"> -->
                    <img :src="'http://localhost:8081/upload/' + article.partnerImage" style="border-radius: 5%; width: 100%; height: 144px">
                    <div v-if="isHovered" class="hover-div">
                        <!-- Content of the div to show on hover -->
                        <div class="row">
                            <div class="" style="display:flex; justify-content: space-around;">
                               
                                <div>모집중 : {{ article.partnerCount }}</div> 
                                <i class="fi fi-rr-eye"> {{ article.hit }}</i>


                            </div>
                            

                        </div>
                    </div>
                </router-link>
                </div>
                <!-- </div> -->
            </div>
            <!-- <img src="..." class="card-img-top" alt="Card image cap"> -->
            <div class="p-2">

                <p>
                    {{ article.subject }}
                </p>
                <p>
                    {{ article.content }}
                </p>
            </div>
        </div>
    </div>
</template>
  
  
  
  
  
<script>
export default {
    name: "PartnerListItem",
    props: {
        article: Object
    },
    data() {
        return {
            isHovered: false,
        };
    },
    methods: {
        showDiv() {
            this.isHovered = true;
        },
        hideDiv() {
            this.isHovered = false;
        },
    },
};
</script>
  
<style scoped>
.img-expension {
    transform: scale(1);
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    /* 부드러운 모션을 위해 추가*/
}

.img-expension:hover {
    transform: scale(1.1);
}

.img-expension:hover .hover-div {
    opacity: 1;
}

.hover-div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

/* .img {width:100%; height:144px; overflow:hidden } */
</style>
  
  
  
  
  
  
  
  
  
  
  
  