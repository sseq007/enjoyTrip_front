<template>
    <div class="carousel-item ">
        <div class="card mb-3 shadow bg-gray rounded">
            <div class="row">

                <img :src="article.firstimage" class="profile_image" style="border-radius: 1vh; width: 100%; height:53vh;">

                <div style="margin-bottom: 2vh;"><strong style="font-family: 'Black Han Sans', sans-serif; opacity: 75%; font-size: 50px; ">{{ article.title }}</strong></div>

                <div style="font-size: 2vh; margin-bottom: 2vh;">({{ article.addr1 }})</div>
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
  
  
  
  
  
  
  
  
  
  
  
  