/*수정할 부분
로그인 실패시 알림 수정정
*/

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
          const response = await axios.post('',formData);
          console.log(response);

          if(response.data.isSuccess){
            const{accesstoken, refreshtoken}=response.data.result;
            localStorage.setItem("accessToken", accesstoken);
            localStorage.setItem("refreshToken", refreshtoken);
            navigate('/');
          }else{
            alert("로그인을 실패하셨습니다.")
            setError(response.data.message || "로그인 실패");
            console.log(error);
          }
        }catch(err){
          alert('서버 오류 발생')
          setError('서버 오류가 발생했습니다.');
        }
    }
    return{login ,error};
}