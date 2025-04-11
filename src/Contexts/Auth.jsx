import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [IsLogedin, setIsLogedin] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     VerifyUserToken();
//   }, []);

//   function VerifyUserToken() {
//     setIsLoading(true);
//     axios
//       .get("", {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         // console.log(res);
//         setIsLogedin(true);
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLogedin(false);
//         setIsLoading(false);
//       });
//   }

  return (
    <authContext.Provider value={{ IsLogedin, setIsLogedin,IsLoading }}>
      {children}
    </authContext.Provider>
  );
}
