<template>
    <div>
        <div class="modal fade" id="map_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">
                            <i class="fi fi-rr-star" id="map_modal_title"
                                ref="map_modal_title">`title:"positions[i].title"`</i>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal Body -->
                    <div class="modal-body">
                        <form action="" class="was-validated">
                            <div class="mb-3 mt-3">
                                <label for="location_address" class="form-label">- 주소:</label>
                                <p id="map_modal_addr" ref="map_modal_addr">`addr:"positions[i].addr"`</p>
                            </div>
                            <div class="mb-3">
                                <label for="location_image" class="form-label">- 위치 이미지:</label>
                                <img id="map_modal_img" src="positions[i].image" alt="" style="width: 100%"
                                    ref="map_modal_img" />
                            </div>
                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" name="remember" />
                                    Remember me
                                </label>
                            </div>
                        </form>
                    </div>

                    <!-- Modal Footer -->
                    <!-- <div class="modal-footer">
                    <button type="submit" class="btn btn-outline-secondary">로그인</button>
                    <button type="button" class="btn btn-outline-secondary">아이디 찾기</button>
                    <button type="button" class="btn btn-outline-secondary">비밀번호 찾기</button>
                </div> -->
                </div>
            </div>
        </div>
        <div class="container">
            <div>
                <h2 style="font-family: 'Black Han Sans', sans-serif;
                                                                                                            opacity: 75%;
                                                                                                            font-size: 50px;
                                                                                                        " class="m-0 mt-5">
                    나의 여행 계획
                </h2>
                <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
            </div>
        </div>
        <div>
            <div class="row" style="margin-top: 10vh; padding: 3vh; background-color: #ffe4e0;">

                <div class="col-md-3" style=" width: 56vh;">
                    <div style="margin-bottom: 3vh;">

                        <select id="search-area" class="form-select me-2" @change="handleAreaChange" v-model="selectarea">
                            <option value="0" selected>검색 할 지역 선택</option>
                            <option v-for="area in areas" :value="area.code" :key="area.code">{{ area.name }}</option>
                        </select>

                    </div>

                    <div class="d-flex">
                        <b-form-datepicker id="example-datepicker" v-model="value_start" class="mb-2"
                            :min="today"></b-form-datepicker>

                        <b-form-datepicker id="example-datepicker" v-model="value_end" class="mb-2 ms-1"
                            :min="today"></b-form-datepicker>


                    </div>
                    <form class="d-flex my-3" @submit="search" role="search">

                        <!-- <select id="search-area" class="form-select me-2">
                    <option value="0" selected>검색 할 지역 선택</option>
                </select> -->
                        <select id="search-content-id" class="form-select me-2">
                            <option value="0" selected>관광지 유형</option>
                            <option value="12">관광지</option>
                            <option value="14">문화시설</option>
                            <option value="15">축제공연행사</option>
                            <option value="25">여행코스</option>
                            <option value="28">레포츠</option>
                            <option value="32">숙박</option>
                            <option value="38">쇼핑</option>
                            <option value="39">음식점</option>
                        </select>
                        <input id="search-keyword" class="form-control me-2" type="search" placeholder="검색어"
                            aria-label="검색어" style="width: 26vh;" />
                        <button id="btn-search" class="btn btn-outline-success" type="button" @click="search"
                            style="width: 15vh; ">
                            검색
                        </button>
                    </form>

                    <div style="overflow-y: scroll; max-height: 50vh;">
                        <table class="table table-striped" v-show="showTable">
                            <thead>
                                <tr>
                                    <th>대표이미지</th>
                                    <th>관광지명</th>
                                    <th>주소</th>
                                    <!-- <th class="table_riches">위도</th>
                                <th class="table_riches">경도</th> -->
                                </tr>
                            </thead>
                            <tbody id="trip-list">
                                <tr v-for="area in trips" :key="area.title" @click="moveCenter(area.mapy, area.mapx)">

                                    <td><img :src="area.firstimage" width="100px"></td>
                                    <td>{{ area.title }}</td>
                                    <td>{{ area.addr1 }} {{ area.addr2 }}</td>
                                    <td><button class="btn btn-secondary" style="width: 7vh;">추가</button></td>
                                    <!-- <td class="table_riches">{{ area.mapy }}</td>
                                <td class="table_riches">{{ area.mapx }}</td> -->
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="map" style="width: 100%; height: 70vh; border-radius: 1vh;"></div>
                    <!-- kakao map end -->
                    <!-- <div class="mt-5" style="background-color: #ffffffb0; width: 100%"> -->

                </div>


                <div class="col-md-2" style="width: 43vh;">
                    <div class="row">
                        <strong style="text-align: center; font-size: 3vh; margin-bottom: 3vh;">{{ selectedAreaName
                        }}</strong>
                        <div v-if="value_start && value_end"
                            style="text-align: center; font-size: 3vh; margin-bottom: 3vh;">
                            {{ getDurationInDays(value_start, value_end) }} Day
                        </div>


                    </div>
                    <select class="form-select me-2" style="margin-bottom: 2vh;" v-model="selectedDay"
                        @change="handleOptionChange">
                        <option value="0" selected>일차순</option>
                        <option v-for="day in saveDay" :key="day" :value="day">{{ day }}일차</option>
                    </select>
                    <div class="card mb-3 shadow bg-gray rounded">

                        <div class="row">
                            <div class="col-4">
                                <img src="@/assets/img/noimg.jpg" class="profile_image"
                                    style="padding:4px; border-radius: 40%; width: 40px; height: 40px; margin-right: 8px; ">


                            </div>

                            <div class="col-8">


                                <div>1231</div>
                                <div>23131313</div>



                            </div>
                        </div>

                    </div>

                    <div v-for="trip in savedTrips[0]" :key="trip.title"
                        class="card mb-3 shadow bg-gray rounded">
                        <div class="row">
                            <div class="col-4">
                                <img :src="trip.image" class="profile_image"
                                    style="padding:4px; border-radius: 40%; width: 40px; height: 40px; margin-right: 8px;">
                            </div>
                            <div class="col-8">
                                <div>{{ trip.title }}</div>
                                <div>{{ trip.address }}</div>
                            </div>
                        </div>
                    </div>





                </div>
                <!-- [S] 관광지 검색 -->

                <!-- kakao map start -->
            </div>






        </div>




    </div>
</template>

<script>
// import axios from "axios";
// import locationJS from "@/assets/js/location.js"
export default {
    name: "travelPlanWrite",
    data() {
        return {
            selectarea: '',
            value_start: '',
            value_end: '',
            contentTypeId: 0,
            serviceKey: "lFRXRzaJlF6qZGI0Tx1HIXfLfwHwxUJs%2F5A375BAuh3QwK%2BWqFcxTjr4rIdc0o5uDqny0%2BPkTx6r3fetGeb3ig%3D%3D", // Set your service key here
            showTable: false,
            trips: [],
            positions: [],
            map: null,
            selectedArea: '0',
            selectedType: '0',
            searchKeyword: '',
            areas: [],
            today: new Date().toISOString().split('T')[0],
            selectedTrip: null, // 선택한 여행지 데이터
            savedTrips: [],
            selectedDay: null,
            saveDay: '',
        };
    },
    created() {

    },
    computed: {
        selectedAreaName() {
            const selectedArea = this.areas.find(area => area.code === this.selectarea);
            return selectedArea ? selectedArea.name : '';
        }
    },
    mounted() {
        this.map = new window.kakao.maps.Map(document.getElementById("map"), {
            center: new window.kakao.maps.LatLng(37.500613, 127.036431),
            level: 9
        });
        const areaUrl =
            "https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=" +
            this.serviceKey +
            "&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json";

        fetch(areaUrl)
            .then((response) => response.json())
            .then((data) => this.makeOption(data));
        console.log(this.data);
    },
    methods: {
        handleOptionChange() {
            console.log('옵션 변경:', this.selectedDay);


            console.log('저장된 여행지 개수:', this.savedTrips);
        },
        saveTrip(area, index) {
            if (index != 0) {
                const prevSavedTrips = this.savedTrips[index - 1];

                if (!prevSavedTrips.includes(area)) {
                    prevSavedTrips.push(area);
                    console.log('저장된 여행지:', this.savedTrips);
                }
            }

            if (!this.savedTrips[index - 1].includes(area)) {
                this.savedTrips[index - 1].push(area);
                console.log('저장된 여행지:', this.savedTrips);

            }


        },
        getDurationInDays(start, end) {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const timeDifference = endDate.getTime() - startDate.getTime();
            const durationInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
            this.saveDay = durationInDays + 1;
            this.savedTrips = new Array(durationInDays + 1).fill(0).map(() => new Array());
            return durationInDays + 1;
        },
        search() {
            let searchUrl = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${this.serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A`;

            const areaCode = document.getElementById("search-area").value;
            this.contentTypeId = document.getElementById("search-content-id").value;
            const keyword = document.getElementById("search-keyword").value;

            if (parseInt(areaCode)) searchUrl += `&areaCode=${areaCode}`;
            if (parseInt(this.contentTypeId)) searchUrl += `&contentTypeId=${this.contentTypeId}`;
            if (!keyword) {
                alert("검색어 입력 필수!!!");
                return;
            } else searchUrl += `&keyword=${keyword}`;

            fetch(searchUrl)
                .then((response) => response.json())
                .then((data) =>
                    this.makeList(data)

                );
        },
        makeList(data) {
            this.showTable = true;
            this.trips = data.response.body.items.item;
            this.positions = [];

            this.trips.forEach((area) => {
                const markerInfo = {
                    title: area.title,
                    latlng: new window.kakao.maps.LatLng(area.mapy, area.mapx),
                    contenttypeid: area.contenttypeid,
                    addr: area.addr1,
                    image: area.firstimage
                };
                // console.log(markerInfo);
                this.positions.push(markerInfo);
            });

            this.displayMarker();
        },
        moveCenter(lat, lng) {
            this.map.setCenter(new window.kakao.maps.LatLng(lat, lng));
            this.map.level = 3;
        },
        makeOption(data) {
            this.areas = data.response.body.items.item;
        },
        handleAreaChange(event) {
            console.log("sido change");
            const selectedValue = event.target.value;
            if (selectedValue) {
                const regcode = selectedValue.substr(0, 2) + "*00000";
                this.sendRequest("gugun", regcode);
            } else {
                this.initOption("gugun");
                this.initOption("dong");
            }
        },
        displayMarker() {
            for (let i = 0; i < this.positions.length; i++) {
                const position = this.positions[i];
                const position_name = position.title;
                const position_address = position.addr;
                const position_image = position.image;

                if (this.contentTypeId !== 0 && this.contentTypeId !== position.contenttypeid) {
                    continue;
                }

                const imageSrc = `/assets/img/marker_${position.contenttypeid}.png`;
                const imageSize = new window.kakao.maps.Size(24, 24);
                const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

                const marker = new window.kakao.maps.Marker({
                    map: this.map,
                    position: position.latlng,
                    title: position.title,
                    image: markerImage
                });

                marker.addListener("click", () => {
                    document.querySelector("#map_modal_title").innerText = position_name;
                    document.querySelector("#map_modal_addr").innerText = position_address;
                    document.querySelector("#map_modal_img").src = position_image;
                    console.log(document.querySelector("#map_modal"));

                    var myModal = new window.bootstrap.Modal(document.getElementById("map_modal"), {
                        keyboard: false,
                    });
                    myModal.toggle();
                });
                this.map.setCenter(this.positions[0].latlng);
            }


        }

    }


};

</script>

