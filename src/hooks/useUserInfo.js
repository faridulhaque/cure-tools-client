import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.init";

const useUserInfo = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [email, userInfo]);

  return {
    userInfo,
    user,
    loading, 
    error
  };
};
export default useUserInfo;