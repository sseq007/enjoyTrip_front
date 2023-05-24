<template>
    <div class="carousel-item ">
        <div class="card mb-3 shadow bg-gray rounded">
            <div class="row">

                <img :src="article.firstimage" class="profile_image" style="border-radius: 1vh; width: 100%; height:53vh;">

                <div style="margin-bottom: 1vh;"><strong style="font-size: 3vh;">{{ article.title }}</strong></div>

                <div style="font-size: 2vh; margin-bottom: 1vh;">({{ article.addr1 }})</div>
                <div >{{ article.tel }}</div>


            </div>
        </div>
    </div>
</template>
  
  
  
  
  
<script>
export default {
    name: "PlanInfoItem",
    props: {
        article: Object
    }
};
</script>
  
<style></style>
  
  
  
  
  
  
  
  
  
  
  
  