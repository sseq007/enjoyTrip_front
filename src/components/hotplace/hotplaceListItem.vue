<template>
    <div style="text-align:center; width: 285px;  height: 320px; margin-right: 3%; margin-top: 3%; background-color: #ffe4e0;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); border: solid 5px #ffb5a7; border-radius: 5%; text-decoration: none;" display="inline-block">
        <div style="width: 40%; margin-top: 10px; margin-left: 40px; ">
            <div><img :src="profileImage" style="width: 35%; height: 35%; border-radius: 60%; float: left;"></div>
            <div><p style="font-family: 'Nixgon, sans-serif; color: #000000; opacity: 60%; font-size: 17px; font-weight: 600; float:left; margin-left: 10px; padding-top:7px;">{{ this.user.userNickname }}</p></div>
        </div>
        <router-link :to="'/hotplace/' + hotplace.articleNo"><img :src="mainImage" style="width: 200px; height: 200px; margin-top: 5px;"> </router-link>
        <div style="display: flex; margin-left: 12%; margin-top: 3px;">
            <div v-if="userInfo == null">
                <label style="font-size: 22px;" @click="alarmLogin">🤍</label>
                <label style="font-family: 'Nixgon, sans-serif; color: #000000; opacity: 60%;
                font-size: 20px; font-weight: 600; margin-left: 2px;">{{ hotplace.heart_count }}</label>
            </div>
            <div v-else style="display: flex;">
                <div @click="likePost">
                    <label style="font-size: 22px;">❤️</label>
                    <label style="font-size: 22px;">🤍</label>
                </div>
                <label style="font-family: 'Nixgon, sans-serif; color: #000000; opacity: 60%;
                font-size: 20px; font-weight: 600; margin-left: 2px;">{{ hotplace.heart_count }}</label>
            </div>
            <!-- <div style="font-family: 'Nixgon, sans-serif; color: #000000; opacity: 60%; font-size: 17px; font-weight: 600; float: right;">
            {{ hotplace.subject }}
            </div> -->
        </div>
        
                        <!-- <div class="emoti">
                            <div calss="favorite">
                                <c:choose>
                                    로그인 상태일 때 -> 하트 클릭되게 함
                                    <c:when test="${not empty userinfo }">
                                        <c:choose>
                                            <c:when test="${empty card.check}">
                                            빈 하트일 때
                                                <span> <a idx="${card.articleNo }" href="javascript:"
                                                    class="heart-click heart_icon${card.articleNo }"><svg 
                                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                                        fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                                                            <path 
                                                            d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                                            </svg></a>
                                                </span>
                                            </c:when>
                                            <c:otherwise>
                                                <span><a idx="${card.articleNo }" href="javascript:"
                                                    class="heart-click heart_icon${card.articleNo }"><svg 
                                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                                        fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                                            <path 
                                                                d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                                                </svg></a>
                                                </span>
                                            </c:otherwise>
                                        </c:choose>
                                    </c:when>
                                    로그인 상태가 아닐 때 -> 하트 클릭 안 되게 함
                                    <c:otherwise>
                                        <span> <a href="javascript:" class="heart-notlogin">
                                                    <svg class="heart3"	xmlns="http://www.w3.org/2000/svg" 
                                                    width="16" height="16" fill="currentColor"
                                                    class="bi bi-suit-heart" viewBox="0 0 16 16">
                                                            <path 
                                                            d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                                            </svg></a>
                                                </span>
                                    </c:otherwise>
                                </c:choose>
                                <span id="heart${card.articleNo }"> ${card.heart_count}</span>
                                
                                
                                모달창 하트 부분
                                <c:choose>
                                로그인 상태일 때 -> 하트 클릭되게 함
                                    <c:when test="${not empty userinfo }">
                                        <c:choose>
                                            <c:when test="${empty card.check}">
                                            빈 하트일 때
                                                <span> <a idx="${card.articleNo }" href="javascript:"
                                                    class="heart-click heart_icon${card.articleNo }"><svg 
                                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                                        fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                                                            <path 
                                                            d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                                            </svg></a>
                                                </span>
                                            </c:when>
                                            <c:otherwise>
                                                <span><a idx="${card.articleNo }" href="javascript:"
                                                    class="heart-click heart_icon${card.articleNo }"><svg 
                                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                                        fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                                            <path 
                                                                d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                                                </svg></a>
                                                </span>
                                            </c:otherwise>
                                        </c:choose>
                                    </c:when>
                                    로그인 상태가 아닐 때 -> 하트 클릭 안 되게 함
                                    <c:otherwise>
                                        <span> <a href="javascript:" class="heart-notlogin">
                                                    <svg class="heart3"	xmlns="http://www.w3.org/2000/svg" 
                                                    width="16" height="16" fill="currentColor"
                                                    class="bi bi-suit-heart" viewBox="0 0 16 16">
                                                            <path 
                                                            d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                                            </svg></a>
                                                </span>
                                    </c:otherwise>
                                </c:choose>
                                <span id="heart${card.articleNo }"> ${card.heart_count}</span>
                            </div> 
                            <div class="reply">
                            </div>
                        </div> -->
    </div>
</template>

<script>
import { getUser } from "@/api/member";
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
    name: "HotplaceListItem",
    props: {
        hotplace: Object,
    },
    data() {
        return{
            user: [],
            profileImage: '',
            mainImage: '',
        };
    },
    computed: {
        ...mapState(memberStore, ["userInfo"]),
    },
    created() {
        getUser(
            this.hotplace.userId,
            ({ data }) => {
                if(data.message === "success"){
                    console.log(data.userInfo);
                    this.user = data.userInfo;
                    if(this.user.profileImage == null){
                        this.profileImage = require('@/assets/img/none_profile_image.jpg');
                    }else{
                        this.profileImage = "http://localhost:8081/upload/" + this.user.profileImage;
                    }
                }
            },
            (error) => {
                console.log(error);
            }
        );

        
        this.mainImage = "http://localhost:8081/upload/" + this.hotplace.imageName;
    },
    methods: {
        alarmLogin(){
            alert("로그인 후 이용해 주세요.");
        },
        likePost(){

        },
    },
}
</script>