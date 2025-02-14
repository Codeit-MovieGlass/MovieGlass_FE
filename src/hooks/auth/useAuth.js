import api from '@api/api';
import { useCallback, useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validateToken = useCallback(() => {
    const accessToken = localStorage.getItem('accessToken');
    const isValid = !!accessToken;
    setIsAuthenticated(isValid);
    return isValid;
  }, []);

  useEffect(() => {
    console.log('useAuth - 토큰 검증 실행');
    validateToken();
  }, [validateToken]);

  const logout = useCallback(async () => {
    try {
      const response = await api.post('/auth/logout');

      if (response.data.code === 200) {
        console.log('Refresh Token Removed, 로그아웃 성공: ', response.data);
        localStorage.clear();
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('로그아웃 실패: ', error);
    }
  }, []);

  return { isAuthenticated, validateToken, logout };
};

export default useAuth;
