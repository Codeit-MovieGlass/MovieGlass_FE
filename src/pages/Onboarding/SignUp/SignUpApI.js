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

      if (response.data.isSuccess) {
        console.log(response.result.message)
        alert(`회원가입에 성공하셨습니다!`); 
        if(onSuccess) onSuccess();
      } else {
        console.log(response.status)
        alert(`회원가입 실패: ${response.data.message}`);
      }
    } catch (error) {
      console.error("서버 오류 발생:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
    } 
  };

  return {signup};
}