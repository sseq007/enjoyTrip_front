<template>
    <div class="col-lg-3 col-md-4 col-sm-12">
        <div class="card mb-3 shadow bg-body rounded" >
            <div>
                <div class="row" style="padding-top: 8px; padding-bottom: 8px; padding-left: 14px; padding-right: 14px;">
                    <div class="col-6">
                        <div class="d-flex">
                            <img src="@/assets/img/noimg.jpg" class="profile_image"
                                style="padding:4px; border-radius: 40%; width: 40px; height: 40px; margin-right: 8px; ">

                            <div>
                                <div>SSAFY</div>
                                <div style="color: #80B5ff;">40대 남성</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6" style="padding-left: 18px;">

                        <div>
                            <i class="fi fi-rr-calendar-days">여행 기간</i>
                            <div style="color: #25E09A;">
                                {{ article.startDate }}-{{ article.endDate }}
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <img src="@/assets/img/tourist-1.jpg" class="" style="border-radius: 5%; width: 100%; height: 144px">

                </div>
            </div>
            <!-- <img src="..." class="card-img-top" alt="Card image cap"> -->
            <div class="p-2">
               
                <p>
                    {{ article.subject }}
                </p>
                <p>
                    {{ article.content }}
                </p>
            </div>
        </div>
    </div>
</template>
  
  
  
  
  
<script>
export default {
    name: "PartnerListItem",
    props: {
        article: Object
    }
};
</script>
  
<style></style>
  
  
  
  
  
  
  
  
  
  
  
  