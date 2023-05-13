<template>
    <div >
	<!-- [S] navbar -->
	<nav class="navbar navbar-expand-lg fixed-top">
		<div class="container">
			<!-- main logo -->
			<a class="navbar-brand link-primary fw-bold fs-3"
				href="/" style="width: 50px"> <img
				style="width: 100%" src="@/assets/img/logo.png" alt="" />
			</a>
			<button class="navbar-toggler" type="button"
				data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item py-2" style="opacity: 80%"><i
						class="fi fi-rr-marker ps-3"></i> 
						<router-link :to="'/triplocation'" class="nav-link active ps-0" aria-current="page" 
						style="display: inline"> 
						<p style="font-family: 'Noto Sans KR', sans-serif; opacity: 70%; display: inline">지역별여행지</p></router-link>
					</li>
					<li class="nav-item py-2" style="opacity: 80%"><i
						class="fi fi-rr-calendar ps-3"></i> <router-link
						:to="'/notice/list'"
						class="nav-link active ps-0" aria-current="page"
						style="display: inline"><p
								style="font-family: 'Noto Sans KR', sans-serif; opacity: 70%; display: inline">나의여행계획</p></router-link>
					</li>

					<li class="nav-item py-2" style="opacity: 80%"><i
						class="fi fi-rr-heart ps-3"></i> <a class="nav-link active ps-0"
						aria-current="page" href=""
						style="display: inline"><p
								style="font-family: 'Noto Sans KR', sans-serif; opacity: 70%; display: inline">핫플자랑하기</p></a>
					</li>
					<li class="nav-item py-2" style="opacity: 80%"><i
						class="fi fi-rr-paper-plane ps-3"></i> <a
						class="nav-link active ps-0" aria-current="page"
						href=""
						style="display: inline"><p
								style="font-family: 'Noto Sans KR', sans-serif; opacity: 70%; display: inline">여행정보공유</p></a>
					</li>
					<li class="nav-item py-2" style="opacity: 80%"><i
						class="fi fi-rr-megaphone ps-3"></i> <router-link
						:to="'/notice/list'"
						class="nav-link active ps-0" aria-current="page"
						style="display: inline"><p
								style="font-family: 'Noto Sans KR', sans-serif; opacity: 70%; display: inline">공지사항</p></router-link>
					</li>
				</ul>

				<!-- 로그인이 되어 있지 않다면 -->
				<div id="header_nav_confirm_off" style="display: contents">
					<ul class="navbar-nav mb-2 mb-lg-0">
						<li class="nav-item dropdown"><a
							class="nav-link dropdown-toggle" href="#" role="button"
							data-bs-toggle="dropdown" aria-expanded="false"> <i
							class="fi fi-rr-lock ps-3 fs"></i>
						</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#"
								data-bs-toggle="modal" data-bs-target="#loginModal">로그인</a></li>
								<li><a class="dropdown-item" href="#"
								data-bs-toggle="modal" data-bs-target="#signUpModal">회원가입</a>
							</li>
						</ul></li>
					</ul>
				</div>

				<!-- 로그인이 되어 있다면 -->
				<div id="header_nav_confirm_on">
					<ul class="navbar-nav mb-2 mb-lg-0">
						<li class="nav-item dropdown"><a
							class="nav-link dropdown-toggle" href="#" role="button"
							data-bs-toggle="dropdown" aria-expanded="false"> <i
								class="fi fi-rr-unlock"></i>
						</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item"
									href="">로그아웃</a></li>
								<li><router-link :to="'/user/userPage'" class="dropdown-item"
									>마이 페이지</router-link></li>
							</ul></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<!-- [E] navbar -->
	<div style="height: 77px"></div>
		<!-- [S] login modal-->
	<div class="modal fade" id="loginModal" data-bs-backdrop="static"
		data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">
						<i class="fi fi-rr-lock ps-3 fs">Login</i>
					</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>

				<!-- Modal Body -->
				<div class="modal-body">
					<form action="" id="login-form" method="post">
						<input type="hidden" name="action" value="login" />
						<div class="mb-3 mt-3">
							<label for="id" class="form-label">ID:</label>
							<input type="id" class="form-control" id="login-id"
								name="userId" placeholder="Enter ID" />
						</div>
						<div class="mb-3">
							<label for="pw" class="form-label">Password:</label> <input
								type="password" class="form-control" id="login-pw"
								name="userPw" placeholder="Enter password" required />
						</div>
						<div class="form-check mb-3">
							<label class="form-check-label"> <input
								class="form-check-input" type="checkbox" name="save-id"
								id="save-id" value="ok" /> 아이디 저장
							</label>
						</div>
					</form>
				</div>

				<!-- Modal Footer -->
				<div class="modal-footer">
					<button type="submit" id="btn-login"
						class="btn btn-outline-secondary">로그인</button>
					<button type="button" class="btn btn-outline-secondary">아이디
						찾기</button>
					<button type="button" class="btn btn-outline-secondary">비밀번호
						찾기</button>
				</div>
			</div>
		</div>
	</div>
	<!-- [E] login modal-->

	<!-- [S] sign up modal-->
	<div class="modal fade" id="signUpModal" data-bs-backdrop="static"
		data-bs-keyboard="false" tabindex="-1"
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
								<img src="@/assets/img/noimg.jpg" class="profile_image" style="border-radius: 40%; width: 350px; height: 350px">
							</div>
							<div>
								<input type="file" id="profile" name="file" accept=".jpg, .png, .jpeg" value=""/>
							</div>
							
							
						</div>
						<div class="mb-3 mt-3">
							<label for="name" class="form-label">이름:</label> <input
								type="text" class="form-control" id="name"
								placeholder="Enter name" name="userName"/>
						</div>
						<div class="mb-3">
							<label for="id" class="form-label">ID:</label> <input type="text"
								class="form-control" id="id" placeholder="Enter ID"
								name="userId"/>
						</div>
						<div id="idcheck-result"></div>
						<div class="mb-3">
							<label for="pw" class="form-label">Password:</label> <input
								type="password" class="form-control" id="pw"
								placeholder="Enter password" name="userPw" />
						</div>
						<div class="mb-3">
							<label for="pwCheck" class="form-label">Password check:</label> <input
								type="password" class="form-control" id="pwCheck"
								placeholder="비밀번호 확인" name="regipw-check"/>
						</div>
						<div class="form-row align-items-center">
							<div class="col-sm-10 my-1">
								<label class="form-label" for="emailId">Email:</label>
								<div class="input-group">
									<input type="text" class="form-control" id="emailId"
										name="emailId" placeholder="이메일 아이디"/>
									<div class="input-group-prepend">
										<div class="input-group-text">@</div>
									</div>
									<select id="emailDomain" name="emailDomain"
										class="form-control">
										<option selected>도메인 선택</option>
										<option value="naver">naver.com</option>
										<option value="google">gmail.com</option>
										<option value="daum">daum.net</option>
									</select>
								</div>
							</div>
						</div>
					</form>
				</div>

				<!-- Modal Footer -->
				<div class="modal-footer">
					<button type="button" id="btn-mv-join"
						class="btn btn-outline-secondary">회원가입</button>
				</div>
			</div>
		</div>
	</div>
	<!-- [E] sign up modal-->

	</div>
</template>

<style scoped>

</style>