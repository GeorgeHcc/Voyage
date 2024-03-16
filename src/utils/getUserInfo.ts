type UserInfo = {
  account?: string;
  avatarImage?: string;
  birthday?: string;
  id?: string;
  nick_name?: string;
  sex?: boolean;
};
// type UserInfoKeysTuple = [keyof UserInfo, ...{ [K in keyof UserInfo]: K }[keyof UserInfo][]];

// const _getDataFromStorage = (type: "local" | "session", key: string,fn?:(keys:[])=>unknown|null) => {
//   const dataStr = type === "local" ? localStorage.getItem(key) : sessionStorage.getItem(key);
//   const data = JSON.parse(dataStr ?? "");
//   if(!data)return null
//  return ()=>{

//  }
// };
// const getUserInfos=_getDataFromStorage('local','account-info',(keys: (keyof UserInfo)[]) => {
//   const user = localStorage.getItem("account-info");

//   if (user) {
//     const userInfo = JSON.parse(user);
//     const result = [];
//     let p = 0;
//     for (const key of keys) {
//       if (key in userInfo && userInfo[key] !== undefined) {
//         result[p] = userInfo[key];
//       }
//       p++;
//     }
//     return result.length > 1 ? result : result[0];
//   } else {
//     return null;
//   }
// })

const getUserInfo = (keys: (keyof UserInfo)[]) => {
  const user = localStorage.getItem("account-info");

  if (user) {
    const userInfo = JSON.parse(user);
    const result = [];
    let p = 0;
    for (const key of keys) {
      if (key in userInfo && userInfo[key] !== undefined) {
        result[p] = userInfo[key];
      }
      p++;
    }
    return result.length > 1 ? result : result[0];
  } else {
    return null;
  }
};

export default getUserInfo;
