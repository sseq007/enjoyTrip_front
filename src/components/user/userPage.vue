<template>
<!-- [S] content -->
    <div class="container">
        <div>
            <h2 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px" class="m-0 mt-5">마이 페이지</h2>
            <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
        </div>
        <div style="margin: auto; margin-top: 100px; margin-bottom: 100px; width: 50%; height: auto; border: 3px solid #ffb5a7; border-radius: 10px" class="text-center">
            <nav class="navbar navbar-expand-sm" style="background-color: #ffb5a7; font-family: 'Black Han Sans', sans-serif; opacity: 75%; text-align: center; font-size: 20px">
                <div class="collpase navbar-collapse justify-content-center">
                    <ul class="navbar-nav">
                        <li class="nav-item" style="margin-inline: 70px">
                            <router-link :to="'/user/userPage'" class="nav-link active">회원 정보 수정</router-link>
                        </li>
                        <li class="nav-item" style="margin-inline: 70px">
                            <router-link :to="'/user/userDelete'" class="nav-link active">회원 탈퇴</router-link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id="modifyContents">
                <form action="" style="text-align: left" id="form-update" method="POST" encType="multipart/form-data">
                    <div class="m-5">
                        <h2 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 20px; text-align: left" class="m-0 mt-4">회원 정보 수정</h2>
                        <hr class="mb-3 mt-0" align="left" style="border: solid 2px #ffb5a7; width: 30%; opacity: 100%" />
                        <div class="mb-3 mt-3" align="center">
                                <div class="userProfile mb-3 mt-3">
                                    <img v-if="userInfo.userProfile == null" src="@/assets/img/noimg.jpg" class="profile_image" style="border-radius: 40%; width: 250px; height: 250px">                                 
                                </div>
                                <div>
                                    <label className="input-file-button" for="updateProfile" style="padding: 6px 25px; border-radius: 4px; border: solid 2px #ffb5a7; color: #663333 ">업로드</label>
                                    <input type="file" id="updateProfile" name="file" accept=".jpg, .png, .jpeg" value="" style="display: none"/>
                                </div>
                                
                                
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="up-userId" class="form-label" style="color: #663333">id:</label>
                            <input type="text" class="form-control" id="up-userId" name="userId" :value="userInfo.userId" disabled="true"/>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="up-userName" class="form-label" style="color: #663333">이름:</label>
                            <input type="text" class="form-control" id="up-userName" name="userName" ref="userName" :value="userInfo.userName" />
                        </div>
                        <div class="mb-3">
                            <label for="up-userPw" class="form-label" style="color: #663333">Password:</label>
                            <input type="password" class="form-control" id="up-userPw" name="userPw" ref="userPw" :value="userInfo.userPw" />
                        </div>
                        <div class="form-row align-items-center">
                            <div class="col-sm-10 my-1">
                                <label class="form-label" for="email id" style="color: #663333">Email:</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="up-emailId" name="emailId" ref="emailId" :value="userInfo.emailId" />
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                    </div>
                                    <select id="up-emailDomain" class="form-control" name="emailDomain" ref="emailDomain">
                                        <option selected>{{ userInfo.emailDomain}}</option>
                                        <option value="naver">naver.com</option>
                                        <option value="google">gmail.com</option>
                                        <option value="daum">daum.net</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="joinDate" class="form-label" style="color: #663333">등록일자:</label>
                            <input type="text" class="form-control" id="up-joinDate" name="joinDate" :value="userInfo.joinDate" disabled="true"/>
                        </div>
                        <div style="text-align: center">
                            <button type="button" class="btn btn-outline-secondary m-0 mt-4 mb-3" id="btn-modify" @click="checkValue">수정</button>
                            <button type="button" class="btn btn-outline-secondary m-0 mt-4 mb-3">취소</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import { updateMember } from "@/api/member";

const memberStore = "memberStore";
export default{
    name: "userPage",
    components:{
    },
    computed: {
        ...mapState(memberStore, ["userInfo"]),
    },
    // created(){
    //     this.viewMember();
    //     axios.get(`http://localhost:8080/api/member/view/ssafy`)
    //     .then(res => {
    //         console.log(res);
    //         this.member = res.data;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // },
    methods: {
        ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
        // async viewMember(){
        //     if(this.isLogin){
		// 			await this.getUserInfo(token);
		// 			console.log("4. confirm() userinfo :: ", this.userInfo);
		// 		}
        // },
        checkValue(){
            let err = true;
            let msg = "";

            err && !this.$refs.userPw.value && ((msg = "비밀번호를 입력해 주세요"), (err = false), this.$refs.userPw.focus());
            err && !this.$refs.userName.value && ((msg = "이름을 입력해 주세요"), (err = false), this.$refs.userName.focus());
            if (!err) alert(msg);
            // 만약, 내용이 다 입력되어 있다면 update 호출
            else this.update(); 
        },
        async update(){
            // 비동기
            var formdata = {
                userId : this.userInfo.userId,
                userName: this.$refs.userName.value,
                userPw: this.$refs.userPw.value,
                emailId: this.$refs.emailId.value,
                emailDomain: this.$refs.emailDomain.value,
            }
            updateMember(
                formdata,
                ({ data }) => {
                    let msg = "멤버 수정 시 문제가 발생했습니다.";
                    if(data.message === "success"){
                        msg = "수정이 완료되었습니다.";
                    }
                    alert(msg);
                    
                    this.moveMain();
                },
                (error) => {
                    console.log(error);
                }
            );
        },
        async moveMain(){
            let token = sessionStorage.getItem("access-token");
            await this.getUserInfo(token);
            this.$router.push({ name: "home" });
        },
    },
};
</script>
