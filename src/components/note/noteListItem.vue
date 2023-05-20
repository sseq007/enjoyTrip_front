
<template>

    <b-dropdown-item style=" border:1px solid red; padding: 1vh; border-radius: 1vh; margin-bottom: 1vh;">
								
							
        <div class="row mb-4" @click="navigateToPage" >
            
            <div class="col-2">
                <img src="@/assets/img/noimg.jpg" class="profile_image"
                    style=" border-radius: 40%; width: 6vh; margin-right: 8px; ">

            </div>
            <div class="col-10">
                <div class="row">
                    <div class="d-flex" style="justify-content: space-between;">
                        <div class="mb-1">{{ note.fromuserId}}</div>
                        <div>{{ note.registerTime.substring(0, 10) }} {{
                    note.registerTime.substring(11, 16) }}</div>

                    </div>
                    <div>{{ note.content}}</div>
                </div>

            </div>


        </div>

    </b-dropdown-item>
</template>
  
  
  
  
  
<script>
// import router from "@/router";
export default {
    name: "noteListItem",
    props: {
        note: Object
    },
    data() {
        return {
        }
    },
    methods: {
        navigateToPage() {
            // router.push(`/user/note/${this.note.noteNo}`)
            location.href = `/user/note/${this.note.noteNo}`;
        }

    },
};
</script>
  
  
  
  
  
  
  
  
  
  
  
  
  