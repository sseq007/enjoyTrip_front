import { apiInstance } from "./index.js";
import axios from "axios";

const api = apiInstance();

function writeHotplace(hotplace, success, fail) {
    axios.post('http://localhost:8081/api/hotplace/write', hotplace, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(success).catch(fail);
}

function modifyHotplace(hotplace, success, fail) {
    axios.put('http://localhost:8081/api/hotplace/update', hotplace, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(success).catch(fail);
}

function getHotplace(articleNo, success, fail) {
    api.get(`/api/hotplace/view/${articleNo}`).then(success).catch(fail);
}

function listHotplace(success, fail) {
    api.get(`/api/hotplace/list`).then(success).catch(fail);
}

function deleteHotplace(articleNo, success, fail) {
    api.delete(`/api/hotplace/delete/${articleNo}`).then(success).catch(fail);
}

function checkHeart(heartDto, success, fail){
    api.get(`/api/hotplace/like`, JSON.stringify(heartDto)).then(success).catch(fail);
}

function plusHeart(heartDto, success, fail){
    api.post(`/api/hotplace/like`, JSON.stringify(heartDto)).then(success).catch(fail);
}

function minusHeart(heartDto, success, fail){
    api.delete(`/api/hotplace/like`, JSON.stringify(heartDto)).then(success).catch(fail);
}


export { writeHotplace, modifyHotplace, getHotplace, listHotplace, deleteHotplace, checkHeart, plusHeart, minusHeart };