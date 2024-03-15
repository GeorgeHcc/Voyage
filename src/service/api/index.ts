// import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const genUserAPI = (url: string) => `${URL}/user/${url}`;

const loginApi = genUserAPI("login");
const registerApi = genUserAPI("register");
const logoutApi = genUserAPI("logout");
const getUserApi = genUserAPI("getUser");
const getFriendsList = genUserAPI("getFriendsList");

const genMessageAPI = (url: string) => `${URL}/message/${url}`;
const getMsgListByUser = genMessageAPI("getMsgListByUser");
/**
 * 添加好友
 */
const addFriends = genUserAPI("addFriends");

export {
  loginApi,
  registerApi,
  logoutApi,
  getUserApi,
  addFriends,
  getFriendsList,
  getMsgListByUser,
};
