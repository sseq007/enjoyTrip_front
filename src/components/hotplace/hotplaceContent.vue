<template>
    <div style="margin: auto; margin-top: 100px; margin-bottom: 100px; width: 50%; height: auto; border: 3px solid #ffb5a7; border-radius: 10px; background-color: #ffe4e0; " class="text-center">
            <nav class="navbar navbar-expand-sm" style="width: 100%; background-color: #ffb5a7; font-family: 'Black Han Sans', sans-serif; opacity: 75%; text-align: center; font-size: 20px;">
                <div class="collpase navbar-collapse height: 80px; width: 100%;">
                    <ul class="navbar-nav">
                        <img :src="profileImage" style="border-radius: 50%; width: 80px; height: 80px; margin-left: 30%; margin-top: 1%; margin-bottom: 1%;">
                        <label style="font-family: 'Nixgon, sans-serif; opacity: 60%; font-size: 30px; width: 100%; font-weight: 600; margin-top: 20px; margin-left: 15px;"
                        >{{this.user.userNickname}}</label>
                    </ul>
                </div>
            </nav>
            <div style=" margin-left: 7%;">
                <h2 style="font-family: 'Nixgon, sans-serif; opacity: 60%; font-size: 50px; font-weight: 600; margin-top: 20px; margin-left: 15px; text-align: left" class="m-0 mt-2">{{this.hotplace.subject}}</h2>
                <hr class="mb-2 mt-0" align="left" style="border: solid 3px #ffb5a7; width: 30%; opacity: 100%" />
            </div>
            
            <div id="Contents">
                <form action="" style="text-align: left" id="form-write" name="form-write" method="post" encType="multipart/form-data">
                    <div class="m-5">
                        <div class="mb-3" align="center" style="position: relative">
                                <div class="hotpleImg mb-3 mt-1">
                                    <img :src="mainImage" class="hotple_image" style="border-radius: 5%; width: 100%; height: 100%;">
                                </div>                               
                        </div>
                        <div style="display: flex; margin-top: 3px;">
                            <div v-if="userInfo == null">
                                <label style="font-size: 40px;" @click="alarmLogin">🤍</label>
                                <label style="font-family: 'Nixgon, sans-serif; opacity: 60%;
                                font-size: 35px; font-weight: 600; margin-left: 2px;">{{ this.hotplace.heart_count }}</label>
                            </div>
                            <div v-else style="display: flex">
                                <div @click="likePost">
                                    <label style="font-size: 40px;">❤️</label>
                                    <label style="font-size: 40px;">🤍</label>
                                </div>
                                <label style="font-family: 'Nixgon, sans-serif; opacity: 60%;
                                font-size: 35px; font-weight: 600; margin-left: 2px;">{{ this.hotplace.heart_count }}</label>
                            </div>
                        </div>
                        <hr class="mb-2 mt-2" align="left" style="border: solid 2px #ffb5a7; width: 100%; opacity: 70%" />
                        <div style="display: flex; flex-direction: column; margin-top: 15px; height: 70px;">
                            <label style="font-family: 'Nixgon, sans-serif; opacity: 60%; font-size: 20px; font-weight: 600; width: 70%;">
                                {{this.hotplace.content}}
                            </label>
                        </div>
                        <div style="text-align: center; margin-top: 30px;">
                            <button v-if="userInfo.userId == this.hotplace.userId" type="button" style="margin-right: 30px; height: 55px; width: 145px; background-color: transparent; border-radius: 20px; 
                            opacity: 100%; border:4px solid #ffb5a7;" @click="moveModify">
                                <span style="font-family: 'Nixgon, sans-serif; color: #ffb5a7; font-weight:600; font-size: 25px;" >수정</span>
                            </button>
                            <button v-if="userInfo.userId == this.hotplace.userId" type="button" style="margin-right: 30px; height: 55px; width: 145px; background-color: transparent; border-radius: 20px; 
                            opacity: 100%; border:4px solid #ffb5a7;" @click="deleteHot">
                                <span style="font-family: 'Nixgon, sans-serif; color: #ffb5a7; font-weight:600; font-size: 25px;" >삭제</span>
                            </button>
                            <button type="button" style=" height: 55px; width: 145px; background-color: transparent; border-radius: 20px; 
                            opacity: 100%; border:4px solid #ffb5a7;" @click="moveList">
                                <span style="font-family: 'Nixgon, sans-serif; color: #ffb5a7; font-weight:600; font-size: 25px;" >목록</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
</template>

<script>
import { getHotplace, deleteHotplace } from '@/api/hotplace';
import { getUser } from "@/api/member";
import { mapState } from "vuex";

const memberStore = "memberStore";
export default {
    name: "hotplaceContent",
    computed: {
        ...mapState(memberStore, ["userInfo"]),
    },
    data() {
        return{
            hotplace: [],
            user: [],
            profileImage: '',
            mainImage: '',
        }
    },
    created(){
        getHotplace(
            this.$route.params.articleNo,
            ({data}) => {
                this.hotplace = data;
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
            (error) => {
                console.log(error);
            }
        )
    },
    methods: {
        alarmLogin(){
            alert("로그인 후 이용해 주세요.");
        },
        likePost(){
            console.log("아직 안 함");
        },
        moveList(){
            this.$router.push({name: "hotplace"});
        },
        moveModify(){
            this.$router.push('/hotplaceModify/' + this.hotplace.articleNo);
        },
        deleteHot(){
            deleteHotplace(
                this.hotplace.articleNo,
                ({data}) => {
                    let msg = "글 삭제를 실패했습니다.";
                    if(data === "success"){
                        msg = "글 삭제가 완료되었습니다.";
                    }
                    alert(msg);

                    this.$router.push({ name: "hotplace" });
                },
                (error) => {
                    console.log(error);
                }
            )
        }
    },
}
</script>