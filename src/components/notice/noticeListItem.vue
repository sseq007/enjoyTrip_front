<template>
  <tr>
    <th>{{article.articleNo}}</th>
    <th><router-link :to="'/noticeview/' + article.articleNo" style="background-color: transparent; color: #000; text-decoration-line: none">{{article.subject}}</router-link></th>
    <th>{{article.userId}}</th>
    <th>{{article.hit}}</th>
    <th>{{article.registerTime}}</th>
  </tr>
</template>





<script>
export default {
  name: "BoardListItem",
  props:{
    article : Object
  }
};
</script>

<style></style>











