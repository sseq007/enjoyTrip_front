
<template>
    <!-- header 부분  필요-->
    <note-main></note-main>    

</template>


<script>

import NoteMain from '@/components/note/noteMain.vue';
// import BoardWrite from '@/components/board/BoardWrite.vue';

export default {
  name: "noteBoard",
  components:{
    NoteMain
    // BoardWrite,
    // BoardModify
  }
};
</script>


<style>
  @import '@/assets/css/index_style.css';
  @import '@/assets/css/style.css';
</style>