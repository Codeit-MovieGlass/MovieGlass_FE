/*수정할 부분
중복 시 알림 수정
 */

import axios from 'axios';
import { useState } from 'react';

export function useSignup() {

  // 회원가입 요청
  const signup = async (formData, onSuccess) => {

    try {
      console.log(formData);
      const response = await axios.post('', formData);
      console.log(response);

      alert(`회원가입에 성공하셨습니다!`); 
      if(onSuccess) onSuccess();
      
    } catch (error) {
      console.error("서버 오류 발생:", error.response.data);
      alert(error.response.data.result.errorMessage);
    } 
  };

  return {signup};
}