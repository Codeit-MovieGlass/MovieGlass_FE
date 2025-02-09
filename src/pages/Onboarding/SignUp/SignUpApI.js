/*수정할 부분
이메일,닉네임 중복검사 관련 로직
중복 시 알림 수정
 */

import axios from 'axios';
import { useState } from 'react';

export function useSignup() {
  
  /* 중복 시 알림 메시지
  const [nicknameError, setNicknameError] = useState('');
  const [emailError, setEmailError] = useState('');
  */

  // 회원가입 요청
  const signup = async (formData, onSuccess) => {

    try {
      console.log(formData);
      const response = await axios.post('', formData);
      console.log(response);

      if (response.data.isSuccess) {
        alert(response.data.result.message); 
        if(onSuccess) onSuccess();
      } else {
        alert(`회원가입 실패: ${response.data.message}`);
      }
    } catch (error) {
      console.error("서버 오류 발생:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
    } 
  };

  return {signup};
}

/*닉네임, 이메일 중복검사 로직

이메일 형식 검사 함수
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const checkDuplicate = async(type, value) =>{
  if(!value.trim()) return; // 공백시 중복 검사x

  if (type === "email" && !isValidEmail(value)) {
    setEmailError("올바른 이메일 형식을 입력해주세요.");
    return;
  }
      
  try{
    const response = await axios.get('',
    params: {type, value},);
    
    if(response.data.exists){
      if(type==='nickname')setNicknameError('닉네임: 사용할 수 없는 닉네임입니다. 다른 닉네임을 입력해 주세요')
      if (type === 'email') setEmailError('이메일: 이미 가입된 이메일입니다. 다른 이메일을 입력해 주세요.');
    }else{
      if (type === 'nickname') setNicknameError('');
      if (type === 'email') setEmailError('');
    }catch (error) {
      console.error('중복 확인 중 오류 발생:', error);
    }
   };
  }
  }
*/