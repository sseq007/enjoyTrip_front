<template>
    <div class="container">
    <div>
        <h2 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px" class="m-0 mt-5">공지사항</h2>
        <hr class="mb-3 mt-0" align="left" style="border: solid 3px brown; width: 50%" />
    </div>

    <!-- 글 내용 -->
    <div class="container-lg">
        <h3 style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 38px" class="m-0 mt-5">{{article.subject}}</h3>

        <div class="row mb-5">
            <div class="col-lg-2">
                <img src="" style="width: 100%" alt="프로필이미지" />
            </div>
            <div class="col-lg-10">
                <h3>작성자 : {{article.userId}}</h3>
                <p>작성일 : {{article.registerTime}}</p>
                <p>조회수 : {{article.hit}}</p>
            </div>
        </div>
        <div>
        {{article.content}}
        </div>
       
	<br/>
	
        <!-- button -->
        <div class="col text-center">
            <button type="button" class="btn btn-outline-secondary" onclick="location.href='/notice/list'">글목록</button>
            
           
            <button type="button" class="btn btn-outline-secondary">글수정</button>
            <button type="button"  id = "btn-delete" class="btn btn-outline-secondary" @click="deleteArticle">글삭제</button>
            
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "NoticeView",
  data() {
    return {
      article:[]
    };
  },
  created() {
    // 비동기
    // TODO : 글번호에 해당하는 글정보 얻기.
    axios.get(`http://localhost:8080/api/sharetravel/view/${this.$route.params.articleNo}`)
    .then(response => {
      console.log(response.data);
      this.article = response.data;
    })
    .catch(error => {
      console.log(error);
    });
    
  },
  methods: {
    deleteArticle(){
      axios.delete(`http://localhost:8080/api/sharetravel/delete/${this.$route.params.articleNo}`)
    .then(response => {
        console.log(response);
        alert('삭제되었습니다.');
        this.$router.push('/notice/list');
  

    })
    .catch(error => {
      console.log(error);
    });
    }
  }

  
};
</script>

