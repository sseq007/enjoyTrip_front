
<template>
    <!-- header 부분  필요-->
    <div>

        <div class="container">
            <div>
                <h2 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px" class="m-0 mt-5">여행 동행
                    찾기</h2>
                <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
            </div>
            <div class="row">
                <div class="col-2">
                    <div class="list-group" id="list-tab" role="tablist" style="text-align: center;">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list"
                            href="#list-home" role="tab" aria-controls="list-home">서울</a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"
                            href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list"
                            href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list"
                            href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list"
                            href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list"
                            href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list"
                            href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list"
                            href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                    </div>
                </div>
                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-home" role="tabpanel"
                            aria-labelledby="list-home-list">
                            <div class="col-8">
                                <div class="d-flex">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>상세지역</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                    <!-- <label for="board-write-title" class="form-label">모집인원 </label> -->
                                    <select class="form-select ms-1" aria-label="Default select example">
                                        <option selected>모집인원</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                </div>
                            </div>
                            <div class="col-8 mt-5">
                                <label for="example-datepicker">시작일</label>
                                <label for="example-datepicker" style="margin-left: 200px;">종료일</label>
                                <div class="d-flex">
                                    <b-form-datepicker id="example-datepicker" v-model="value_start"
                                        class="mb-2"></b-form-datepicker>

                                    <b-form-datepicker id="example-datepicker" v-model="value_end"
                                        class="mb-2 ms-1"></b-form-datepicker>


                                </div>
                            </div>


                        </div>
                        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                            ㅁㅇㄻㅇㄻㄹㅇㅁㄻㄴㄻㄴㄻㄴㄹㅇㄴㅁ
                        </div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                            ...</div>
                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                            ...</div>
                    </div>
                </div>
            </div>
            <div style="height: 77px"></div>
            <div class="mb-3">
                <input type="hidden" class="form-control" id="board-write-title"
                    placeholder="ex) 12월 3박4일 제주 바다 보러갈 동행 3명 구해요" name="board-write-title" ref="userid" />

                <input type="text" class="form-control" id="board-write-title"
                    placeholder="ex) 12월 3박4일 제주 바다 보러갈 동행 3명 구해요" name="board-write-title" ref="subject" />
            </div>
            <div style="height: 40px"></div>
            <div class="mb-3">

                <textarea style="height: 450px;" class="form-control" rows="5" id="board-write-content"
                    name="board-write-content" placeholder="1. 현재 동행이 있나요? 
                ex) 혼자에요 / 동행 1명이 있어요 
     
    
            2.어떤 동행을 찾고 있나요? 
                ex) 맛집 탐방을 좋아하는 20대 여성 동행을 찾아요!
                ex) 같이 여행지까지 타고 갈 동행 찾아요!! 


            3. 원하는 여행 코스가 있다면 알려주세요!


            (1000자 이내) " ref="content"></textarea>
            </div>

            <div class="mb-3" style="margin-top: 7px;">
                <button class="btn btn-outline-secondary me-2" style="width: calc(50% - 8px);">취소</button>
                <button class="btn btn-outline-secondary" style="width: calc(50% - 8px);"><a class="dropdown-item" href="#"
                        data-bs-toggle="modal" data-bs-target="#partnerModal">작성완료</a></button>
            </div>
        </div>
        <div class="modal fade" id="partnerModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header" >
					<h4 class="modal-title" >
					
                        <i class="fi fi-rr-key ps-3 fs">여행 키워드 선택하기</i>
					</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>

                    <!-- Modal Body -->
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 col-sm-12">
                                    
    
                                </div>
    
    
                            </div>


                        </div>
                            
                     
                    </div>

                    <!-- Modal Footer -->
                    <div class="modal-footer">
                        <button type="submit" id="btn-login" class="btn btn-outline-secondary">로그인</button>
                        <button type="button" class="btn btn-outline-secondary">아이디
                            찾기</button>
                        <button type="button" class="btn btn-outline-secondary">비밀번호
                            찾기</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="sc-a1969d70-1 cVzoaR">
            <div class="sc-a1969d70-2 gbawaZ">
                <p class="sc-a1969d70-3 cKfNum">여행 키워드 선택하기(1/2)</p>
                <p class="sc-a1969d70-4 jXoitQ">어떤 여행을 계획하고 있나요?</p>
                <p class="sc-a1969d70-5 eNYpGj"><span>* 최소 1개~ 최대 3개</span>의 키워드를 선택해주세요.</p>
            </div>
            <div class="sc-a1969d70-6 igXeuW"><button class="sc-a1969d70-7 ccQEpa">
                    <div><img src="/images/sub/accompany/answer1_img01.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>무계획</span></div>
                </button><button class="sc-a1969d70-7 ccQEpa">
                    <div><img src="/images/sub/accompany/answer1_img02.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>관광</span></div>
                </button><button class="sc-a1969d70-7 ccQEpa">
                    <div><img src="/images/sub/accompany/answer1_img03.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>바다</span></div>
                </button><button class="sc-a1969d70-7 FJaZf">
                    <div><img src="/images/sub/accompany/answer1_img04.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>등산</span></div>
                </button><button class="sc-a1969d70-7 ccQEpa">
                    <div><img src="/images/sub/accompany/answer1_img05.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>맛집/카페 탐방</span></div>
                </button><button class="sc-a1969d70-7 ccQEpa">
                    <div><img src="/images/sub/accompany/answer1_img06.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>핫플레이스 탐방</span></div>
                </button><button class="sc-a1969d70-7 FJaZf">
                    <div><img src="/images/sub/accompany/answer1_img07.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>쇼핑</span></div>
                </button><button class="sc-a1969d70-7 FJaZf">
                    <div><img src="/images/sub/accompany/answer1_img08.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>드라이브</span></div>
                </button><button class="sc-a1969d70-7 ccQEpa">
                    <div><img src="/images/sub/accompany/answer1_img09.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>전시회/공연 관람</span></div>
                </button><button class="sc-a1969d70-7 ccQEpa">
                    <div><img src="/images/sub/accompany/answer1_img10.png" alt="이모지" class="sc-a1969d70-8 kmIVho"><span>스포츠
                            경기 직관</span></div>
                </button><button class="sc-a1969d70-7 ccQEpa">
                    <div><img src="/images/sub/accompany/answer1_img11.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>글램핑</span></div>
                </button><button class="sc-a1969d70-7 ccQEpa">
                    <div><img src="/images/sub/accompany/answer1_img12.png" alt="이모지"
                            class="sc-a1969d70-8 kmIVho"><span>서핑</span></div>
                </button>
                <div class="sc-a1969d70-9 hsUUah"><button width="244px" height="68px" color="#fff" font-size="16px"
                        class="sc-6d2dd3f1-0 hfUnGe">뒤로가기</button><button width="244px" height="68px" color="#fff"
                        font-size="16px" class="sc-6d2dd3f1-0 lhisYM">다음</button></div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: "PartnerMain",
    components: {

    },
    data() {
        return {
            articles: [],
            value: ''
        };
    },
    created() {
        // 비동기
        // TODO : 글목록 얻기.


    },

    methods: {

    },
};
</script>
