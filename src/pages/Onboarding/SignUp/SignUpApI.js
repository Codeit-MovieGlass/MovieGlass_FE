import { useState } from 'react';
import axios from 'axios';

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // 회원가입 요청
  const signup = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log(formData);
      const response = await axios.post('http://3.35.55.17/api/auth/signUp', formData);
      console.log(response);
      if (response.data.isSuccess) {
        setSuccess(true);
      } else {
        setError(response.data.message || '회원가입 실패');
      }
    } catch (err) {
      setError(err.response?.data?.message || '서버 오류 발생');
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, success };
}
