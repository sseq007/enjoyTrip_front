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

function getArticle(articleno, success, fail) {
    api.get(`/api/hotplace/view/${articleno}`).then(success).catch(fail);
}

function listArticle(param, success, fail) {
    api.get(`/api/hotplace/list`, { params: param }).then(success).catch(fail);
}

export { writeHotplace, getArticle, listArticle };