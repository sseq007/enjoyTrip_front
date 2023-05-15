
<template>
    <!-- header 부분  필요-->
      <TripPartnerMain></TripPartnerMain>

</template>


<script>

import TripPartnerMain from '@/components/partner/partnerMain.vue';
// import BoardWrite from '@/components/board/BoardWrite.vue';

export default {
  name: "TripPartner",
  components:{
    TripPartnerMain
    // BoardWrite,
    // BoardModify
  }
};
</script>


<!-- <style>
  @import '@/assets/css/index_style.css';
  @import '@/assets/css/style.css';
</style> -->