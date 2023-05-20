<template>
	<div>
		<!-- [S] navbar -->
		<nav class="navbar navbar-expand-lg fixed-top">
			<div class="container">
				<!-- main logo -->
				<a class="navbar-brand link-primary fw-bold fs-3" href="/" style="width: 50px"> <img style="width: 100%"
						src="@/assets/img/logo.png" alt="" />
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item py-2" style="opacity: 80%"><i class="fi fi-rr-marker ps-3"></i>
							<router-link :to="'/triplocation'" class="nav-link active ps-0" aria-current="page"
								style="display: inline">
								<p style="font-family: 'Noto Sans KR', sans-serif; opacity: 70%; display: inline">지역별여행지</p>
							</router-link>
						</li>
						<li class="nav-item py-2" style="opacity: 80%"><i class="fi fi-rr-calendar ps-3"></i> <router-link
								:to="'/notice/list'" class="nav-link active ps-0" aria-current="page"
								style="display: inline">
								<p style="font-family: 'Noto Sans KR', sans-serif; opacity: 70%; display: inline">나의여행계획</p>
							</router-link>
						</li>

						<li class="nav-item py-2" style="opacity: 80%"><i class="fi fi-rr-heart ps-3"></i> <router-link
								class="nav-link active ps-0" aria-current="page" :to="'/hotplace'" style="display: inline">
								<p style="font-family: 'Noto Sans KR', sans-serif; opacity: 70%; display: inline">핫플자랑하기</p>
							</router-link>
						</li>
						<li class="nav-item py-2" style="opacity: 80%"><i class="fi fi-rr-paper-plane ps-3"></i>
							<router-link class="nav-link active ps-0" aria-current="page" :to="'/trippartner'"
								style="display: inline">
								<p style="font-family:'Noto Sans KR', sans-serif; opacity: 70%; display: inline">동행찾기</p>
							</router-link>
						</li>
						<li class="nav-item py-2" style="opacity: 80%"><i class="fi fi-rr-megaphone ps-3"></i> <router-link
								:to="'/notice/list'" class="nav-link active ps-0" aria-current="page"
								style="display: inline">
								<p style="font-family: ' Noto Sans KR', sans-serif; opacity: 70%; display: inline">공지사항</p>
							</router-link>
						</li>
						<!-- <li class="nav-item py-2" style="opacity: 80%; margin-left: 50vh;" @click="openModal"><i class="fi fi-rr-envelope"></i>
					</li> -->
					</ul>

					<div style="margin-right: 3vh;">
						<b-dropdown size="lg" right text="Right align" variant="link" toggle-class="text-decoration-none"
							no-caret scrollable no-scrollbar>
							<template #button-content>
								<i class="fi fi-rr-envelope"></i>
							</template>
							<b-dropdown-item>
								<div class="container">
									<h5 class="mb-4" style="text-align: center;">
										쪽지


									</h5>
									<div style="height: 25vh; width: 55vh;overflow-y: auto;">
										<!-- 스크롤 가능한 컨텐츠 내용 -->
										<note-list-item v-for="note in notes" :key="note.noteNo" :note="note" ></note-list-item>
										


									</div>


								</div>

							</b-dropdown-item>
						</b-dropdown>
					</div>

					<!-- 로그인이 되어 있지 않다면 -->
					<div id="header_nav_confirm_off" style="display: contents" v-if="userInfo == null">
						<ul class="navbar-nav mb-2 mb-lg-0">
							<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button"
									data-bs-toggle="dropdown" aria-expanded="false"> <i class="fi fi-rr-lock ps-3 fs"></i>
								</a>
								<ul class="dropdown-menu">
									<li><router-link :to="'/user/userLogin'" class="dropdown-item">로그인</router-link></li>
									<li><a class="dropdown-item" href="#" data-bs-toggle="modal"
											data-bs-target="#signUpModal">회원가입</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>

					<!-- 로그인이 되어 있다면 -->
					<div id="header_nav_confirm_on" v-else>
						<ul class="navbar-nav mb-2 mb-lg-0">
							<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button"
									data-bs-toggle="dropdown" aria-expanded="false"> <i class="fi fi-rr-unlock"></i>
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="" @click.prevent="onClickLogout">로그아웃</a></li>
									<li><router-link :to="'/user/userPage'" class="dropdown-item">마이 페이지</router-link></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>

			</div>

		</nav>

		<!-- [E] navbar -->
		<div style="height: 77px"></div>

		<!-- [S] sign up modal-->
		<div class="modal fade" id="signUpModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
			aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
						<h4 class="modal-title">
							<i class="fi fi-rr-lock ps-3 fs">Sign Up</i>
						</h4>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>

					<!-- Modal Body -->
					<div class="modal-body">
						<form action="" method="post" id="join-form" encType="multipart/form-data">
							<!-- <input type="hidden" name="action" value="join" /> -->
							<div class="mb-3 mt-3" align="center">
								<div class="selected">
									<img src="@/assets/img/noimg.jpg" class="profile_image"
										style="border-radius: 40%; width: 350px; height: 350px">
								</div>
								<div>
									<input type="file" id="profile" name="file" accept=".jpg, .png, .jpeg" value="" />
								</div>


							</div>
							<div class="mb-3 mt-3">
								<label for="name" class="form-label">이름:</label> <input type="text" class="form-control"
									id="name" placeholder="Enter name" name="userName" ref="userName" />
							</div>
							<div class="mb-3">
								<label for="id" class="form-label">ID:</label> <input type="text" class="form-control"
									id="id" placeholder="Enter ID" name="userId" ref="userId" />
							</div>
							<div id="idcheck-result"></div>
							<div class="mb-3">
								<label for="pw" class="form-label">Password:</label> <input type="password"
									class="form-control" id="pw" placeholder="Enter password" name="userPw" ref="userPw" />
							</div>
							<div class="mb-3">
								<label for="pwCheck" class="form-label">Password check:</label> <input type="password"
									class="form-control" id="pwCheck" placeholder="비밀번호 확인" name="regipw-check"
									ref="pwCheck" />
							</div>
							<div class="form-row align-items-center">
								<div class="col-sm-10 my-1">
									<label class="form-label" for="emailId">Email:</label>
									<div class="input-group">
										<input type="text" class="form-control" id="emailId" ref="emailId" name="emailId"
											placeholder="이메일 아이디" />
										<div class="input-group-prepend">
											<div class="input-group-text">@</div>
										</div>
										<select id="emailDomain" name="emailDomain" ref="emailDomain" class="form-control">
											<option selected>도메인 선택</option>
											<option value="naver.com">naver.com</option>
											<option value="gmail.com">gmail.com</option>
											<option value="daum.net">daum.net</option>
										</select>
									</div>
								</div>
							</div>
						</form>
					</div>

					<!-- Modal Footer -->
					<div class="modal-footer">
						<button type="button" id="btn-mv-join" class="btn btn-outline-secondary"
							@click="checkValue">회원가입</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { registerMember } from "@/api/member";
import noteListItem from '../components/note/noteListItem.vue';
import axios from "axios";
const memberStore = "memberStore";
export default {
	name: "TheHeader",
	components: {
		// eslint-disable-next-line vue/no-unused-components
		noteListItem
	},
	data() {
		return {
			user: {
				userId: null,
				userPw: null,
			},
			modalVisible: false,
			notes: []
		};
	},
	created() {
		axios.get(`http://localhost:8080/api/note/list/${this.userInfo.userId}`)
			.then(response => {
				console.log(response.data);
				this.notes = response.data;
			})
			.catch(error => {
				console.log(error);
			});

	},
	computed: {
		...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
		...mapGetters(["checkUserInfo"]),
	},
	methods: {
		openModal() {
			this.modalVisible = true;
		},
		closeModal() {
			this.modalVisible = false;
		},
		...mapActions(memberStore, ["userConfirm", "getUserInfo", "userLogout"]),
		checkValue() {
			let err = true;
			let msg = "";

			err && !this.$refs.userName.value && ((msg = "이름을 입력해 주세요"), (err = false), this.$refs.userName.focus());
			err && !this.$refs.userId.value && ((msg = "id를 입력해주세요"), (err = false), this.$refs.userId.focus());
			err && !this.$refs.userPw.value && ((msg = "비밀번호를 입력해 주세요"), (err = false), this.$refs.userPw.focus());


			if (this.$refs.userPw.value != this.$refs.pwCheck.value) {
				err = false;
				msg = "비밀번호를 다시 확인해 주세요";
			}
			if (!err) alert(msg);
			// 만약, 내용이 다 입력되어 있다면 registArticle 호출
			else this.register();
		},
		async register() {
			var formdata = {
				userName: this.$refs.userName.value,
				userId: this.$refs.userId.value,
				userPw: this.$refs.userPw.value,
				emailDomain: this.$refs.emailDomain.value,
				emailId: this.$refs.emailId.value
			}
			console.log(formdata);
			registerMember(
				formdata,
				({ data }) => {
					let msg = "멤버 등록을 실패했습니다.";
					if (data.message === "success") {
						msg = "등록이 완료되었습니다.";
					}
					alert(msg);

					location.href = "/";
				},
				(error) => {
					console.log(error);
				}
			);
		},
		onClickLogout() {
			console.log(this.userInfo.userId);
			this.userLogout(this.userInfo.userId);
			sessionStorage.removeItem("access-token");
			sessionStorage.removeItem("refresh-token");
			if (this.$route.path != "/") this.$router.push({ name: "home" });
		},
	},
};
</script>


