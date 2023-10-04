import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjJiNmM3MDdmODBhZGQ1NjQzNzYyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTU3Mzg4MiwiZXhwIjoxNjg5ODMzMDgyfQ.ST3QcYDzwMIUrntZnFXMJcvYgTNZ214U_s4Vx48YVz4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});