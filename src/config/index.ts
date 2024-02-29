// import axios from "axios";

const URL = import.meta.env.DEV ? "http://localhost:5000/api/auth" : "";

const genURL = (url: string) => `${URL}/${url}`;

const loginApi = genURL("login");
const registerApi = genURL("register");
const logoutApi = genURL("logout");
const getUserApi = genURL("getUser");

 
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
