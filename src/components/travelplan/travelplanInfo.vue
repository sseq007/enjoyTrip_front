<template>
    <div class="carousel-item active">
        <div class="card mb-3 shadow bg-gray rounded">
            <div class="row">
                <div class="col-4">
                    <img :src="article.firstimage" class="profile_image"
                        style="border-radius: 1vh; width: 12vh; height: 10vh;">
                </div>
                <div class="col-8" style="padding: 1vh;">
                    <div class="d-flex" style="justify-content: space-between;">
                        <div style="margin-bottom: 1vh;"><strong>{{ article.title }}</strong></div>
                    </div>
                    <div>{{ article.addr1 }}</div>
                </div>

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
  
  
  
  
  
  
  
  
  
  
  
  