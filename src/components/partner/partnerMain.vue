
<template>
    <!-- header 부분  필요-->
    <div>

        <div class="container">
            <div>
                <h2 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px" class="m-0 mt-5">여행 동행
                    찾기</h2>
                <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
            </div>
            <div>
                <p style="font-family: 'Noto Sans KR', sans-serif; opacity: 75%">같이 동행하고 싶은 친구를 찾아봐요</p>
                <div class="col-lg-8 col-md-12 col-sm-12 align-self-end">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="d-flex ">
                                <div class="input-group input-group-sm">
                                    <input type="text" name="word" id="word" class="form-control" placeholder="검색어..." />
                                    <button id="btn-search" class="btn btn-dark" type="button">검색</button>
                                </div>
                                
                                <button id="btn-sortHit" class="btn btn-dark ms-1 me-1 w-50" type="button">
                                    <a href=""
                                        style="background-color: transparent; color: #fff; text-decoration-line: none">최신순</a></button>

                                <button id="btn-sortNum" class="btn btn-dark ms-1 me-1 w-50" type="button">
                                    <a href=""
                                        style="background-color: transparent; color: #fff; text-decoration-line: none">인기순
                                    </a></button>
                                <button id="btn-sortNum" class="btn btn-dark ms-1 me-1 w-50" type="button">
                                    <a href=""
                                        style="background-color: transparent; color: #fff; text-decoration-line: none">모집중
                                    </a></button>
                                <button id="btn-sortNum" class="btn btn-primary ms-1 me-1 w-50" type="button">
                                    <a href="/trippartner/write"
                                        style="background-color: transparent; color: #fff; text-decoration-line: none">친구찾기
                                    </a></button>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card mb-3">
                                <!-- <img src="..." class="card-img-top" alt="Card image cap"> -->
                                <div class="card-body">
                                    <h5 class="card-title">Card Title 1</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card mb-3">
                                <!-- <img src="..." class="card-img-top" alt="Card image cap"> -->
                                <div class="card-body">
                                    <h5 class="card-title">Card Title 2</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card mb-3">
                                <!-- <img src="..." class="card-img-top" alt="Card image cap"> -->
                                <div class="card-body">
                                    <h5 class="card-title">Card Title 3</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card mb-3">
                                <!-- <img src="..." class="card-img-top" alt="Card image cap"> -->
                                <div class="card-body">
                                    <h5 class="card-title">Card Title 4</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
            articles: []
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

