import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router";

export function useLogin(){
    const [error, setError]=useState('');
    const navigate= useNavigate();

    const login = async (formData) => {
        setError("");
        console.log('Login Form Data: ', formData);

        try{
          const response = await axios.post("http://3.35.55.17/api/auth/login",formData);
          if(response.data.isSuccess){
            const{accesstoken, refreshtoken}=response.data.result;
            localStorage.setItem("accessToken", accesstoken);
            localStorage.setItem("refreshToken", refreshtoken);
            navigate("/");
          }else{
            setError(response.data.message || "로그인 실패");
          }
        }catch(err){
          alert("오류 발생")
          setError("서버 오류가 발생했습니다.");
        }
    }
    return{login ,error};
}