
<template>
    <!-- header 부분  필요-->
    <notice-list> </notice-list>    

</template>


<script>

import NoticeList from '@/components/notice/noticeList.vue';
// import BoardWrite from '@/components/board/BoardWrite.vue';

export default {
  name: "notcieBoard",
  components:{
    NoticeList
    // BoardWrite,
    // BoardModify
  }
};
</script>


<style>
  @import '@/assets/css/index_style.css';
  @import '@/assets/css/style.css';
</style>