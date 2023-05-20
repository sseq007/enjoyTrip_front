<template>
    <div class="container">
        <div style="background-image:url('../assets/img/registerDiv.png');
        background-repeat: no-repeat;
        background-size: contain; position : relative;
        height: 1400px; margin-top: 70px; margin-left: 10%;  display: flex; justify-content: center;">
            <img :src="image" class="profile_image" width="300px" height="300px" style="display: block; margin-right: 130px; margin-top: 17px; border-radius: 50%; position: absolute;">
            <div style="margin-left: 3%; padding-top: 1px">
                <h2 style="font-family: 'Nixgon, sans-serif; opacity: 60%; font-size: 100px; font-weight: 600; " class="m-0 mt-5">LOGIN</h2>
                <hr class="mb-3 mt-0" align="left" style="border: solid 5px #85c6d7; width: 20%" />
            </div>
            <div style="vertical-align: middle;">
                <label className="input-file-button" for="updateProfile" style="margin-right: 130px; margin-top: 100px; height: 60px; width: 160px; background-color: transparent; border-radius: 20px; opacity: 60%;
                border:4px solid #85c6d7; float: right; text-align: center
                font-family: 'Nixgon, sans-serif; color: #85c6d7; font-weight:600; font-size: 30px;">
                UPLOAD
                </label>
                <input ref="image" type="file" id="updateProfile" name="file" accept=".jpg, .png, .jpeg" value="" style="display: none" @change="imageChange()"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "userRegister",
    components:{

    },
    data(){
        return{
            image: '',
        }
    },
    created(){
        this.image = require('@/assets/img/noimg.jpg');
    },
    methods:{
        imageChange(){
            var image = this.$refs['image'].files[0];
            const url = URL.createObjectURL(image);
            this.image = url;
            console.log(url);           
        },
    }
}
</script>