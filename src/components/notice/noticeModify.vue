<template>
    <!-- header 부분  필요-->
  <div class="container">
    <div>
        <h2 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px" class="m-0 mt-5">공지 사항</h2>
        <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
    </div>
        <div class="mb-3">
            <input type="hidden" class="form-control" id="board-write-title" placeholder="제목을 입력하세요" name="board-write-title" ref="userid" />
            <label for="board-write-title" class="form-label">제목: </label>
            <input type="text" class="form-control" id="board-write-title" placeholder="제목을 입력하세요" name="board-write-title" ref="subject" :value="article.subject" />
        </div>
        <div class="mb-3">
            <label for="board-write-content" class="form-label">내용:</label>
            <textarea class="form-control" rows="5" id="board-write-content" name="board-write-content" placeholder="내용을 입력하세요" ref="content" :value="article.content"> </textarea>
        </div>


    <div class="col text-center">
        <button type="button" class="btn btn-outline-secondary" id="btn-board-write" @click="checkValue">글수정</button>
        <button type="button" class="btn btn-outline-secondary">초기화</button>
    </div>
</div>
</template>


<script>
import axios from "axios";
export default {
  name: "NoticeModify",
  components:{
  },
  data() {
    return {
        article:{}
    };
  },
  created() {
    // 비동기
    // TODO : 글목록 얻기.
    axios.get(`http://192.168.208.62:8080/api/sharetravel/view/${this.$route.params.articleNo}`)
    .then(response => {
      console.log(response.data);
      this.article = response.data;
    })
    .catch(error => {
      console.log(error);
    });

  },
  methods: {
    checkValue() {
      // 사용자 입력값 체크하기
      // 작성자아이디, 제목, 내용이 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = "";
    //   !this.$refs.userid.value && ((msg = "작성자 입력해주세요"), (err = false), this.$refs.userid.focus());
      err && !this.$refs.subject.value && ((msg = "제목 입력해주세요"), (err = false), this.$refs.subject.focus());
      err && !this.$refs.content.value && ((msg = "내용 입력해주세요"), (err = false), this.$refs.content.focus());
      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registArticle 호출
      else this.modifyArticle();
    },
    modifyArticle() {
      // 비동기
      // TODO : 글번호에 해당하는 글정보 등록.
      console.log("글수정 하러가자!!!!");
      var formData = {
        articleNo : this.$route.params.articleNo,
        userId : "ssafy",
        subject : this.$refs.subject.value,
        content: this.$refs.content.value
      }
      
      console.log(formData)
    axios.put('http://192.168.208.62:8080/api/sharetravel/modify', formData, {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('등록 결과:', response.data);
    alert('글 수정이 완료되었습니다.');
    location.href = `/noticeview/${this.$route.params.articleNo}`;
})
.catch(error => {
    console.log(error);
    alert('글 수정이 실패하였습니다.');
});


    },
  },
};
</script>

<style>
  /* @import '@/assets/css/index_style.css';
  @import '@/assets/css/style.css'; */
</style>