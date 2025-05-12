import axios from 'axios';

// const api = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//     timeout: 60000,
//     withCredentials: true,
//     xsrfCookieName: "XSRF-TOKEN",
//     xsrfHeaderName: "X-XSRF-TOKEN",
//     withXSRFToken: true,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// export default api;


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default api;