// import axios from "axios";

const URL = import.meta.env.VITE_API_URL

const genUserAPI = (url: string) => `${URL}/user/${url}`;

const loginApi = genUserAPI("login");
const registerApi = genUserAPI("register");
const logoutApi = genUserAPI("logout");
const getUserApi = genUserAPI("getUser");

 
//  type ApiName = "login" | "register" | "logout" | "getUser";
//  interface resultype<T>{
//     data:T
// }

// const useFetch<T>=(name:ApiName,payload)=>{
//     return new Promise<T>((resolve, reject) => {
//         axios(genURL(name),payload).then((res) => {
//             resolve(res.data);
//         })
// })
        
// }

export { loginApi, registerApi, logoutApi, getUserApi };
