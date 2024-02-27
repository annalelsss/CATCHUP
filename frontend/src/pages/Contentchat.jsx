import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

const Contentchat = () => {
  //   const [userId, setUserId] = useState("");
  const cookie = new Cookies();

  const getUserId = async () => {
    try {
      //페이지의 쿠키에서 토큰을 가져온다
      const token = cookie.get("token");
      console.log("token: ", token);
      try {
        //토큰을 백에 보내서 userid 를 받아온다
        const response = await axios.get(
          `http://127.0.0.1:8000/user/test_get_current_user/${token}`
        );
        const userId = response.data.id;
        // setUserId(response.data.id);
        console.log("userId 불러오기 성공: ", response.data);
        console.log("userId: ", userId);
      } catch (error) {
        console.error("userId 불러오기 실패: ", error.response.data);
      }
    } catch (error) {
      console.error("쿠키에서 토큰 불러오기 실패");
    }
  };

  //   useEffect(() => {
  //     console.log("useEffect 호출");
  //     getUserId();
  //   }, []);

  return (
    <>
      <div>개념챗방</div>
      <button onClick={getUserId}>User 불러오기</button>
    </>
  );
};

export default Contentchat;
