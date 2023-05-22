<template>
        <div class="container">
                <div>
                    <h2 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px"
                        class="m-0 mt-5">
                        핫플 자랑하기
                    </h2>
                    <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
                </div>
                
                <div>
                    <div style="display: flex">
                    <div><p style="font-family: 'Noto Sans KR', sans-serif; opacity: 75%">다녀왔던 여행지 중 좋았던 곳의 사진을 보여 주세요!</p></div>
                    <div v-if="userInfo != null" style="float: left;"><button type="button" class="btn btn-outline-secondary mb-3" style="text-align:right; align-items: right"  @click="moveWrite()">글쓰기</button></div>
                    </div>            
                
            </div>
    </div>
</template>

<script>
//import HotplaceListItem from './hotplaceListItem.vue';
import { mapState } from "vuex";

const memberStore = "memberStore";
export default {
    name: "hotplaceList",
    components: {
        //HotplaceListItem
    },
    computed: {
        ...mapState(memberStore, ["userInfo"]),
    },
    data(){
        return{

        }
    },
    methods:{
        moveWrite(){
            this.$router.push({name: "hotplaceWrite"});
        },
    }
}
</script>