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

function getHotplace(articleNo, success, fail) {
    api.get(`/api/hotplace/view/${articleNo}`).then(success).catch(fail);
}

function listHotplace(success, fail) {
    api.get(`/api/hotplace/list`).then(success).catch(fail);
}

export { writeHotplace, getHotplace, listHotplace };