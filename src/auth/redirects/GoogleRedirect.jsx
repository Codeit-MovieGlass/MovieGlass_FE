/*수정할 부분 
로그인 성공 시 로컬 스토리지에 저장할 부분
리다이렉트 주소
*/

import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isFirstRender = useRef(true);

  const queryParams = new URLSearchParams(location.search);
  const GOOGLE_AUTH_CODE = queryParams.get('code');

  useEffect(() => {

      if (!isFirstRender.current)return;
      isFirstRender.current = false;

      if (GOOGLE_AUTH_CODE){
        console.log('Authorization Code:', GOOGLE_AUTH_CODE);

        const sendAuthCodeToserver = async () => {
            try{
                const response = await axios.post('',{
                    code: GOOGLE_AUTH_CODE,
                });
                console.log(response.data);
                //로그인 성공 시 로컬 스토리지에 저장할 요소 나중에 수정
                if(response.data.isSuccess){
                    
                    localStorage.setItem();
                    localStorage.setItem();
                    localStorage.setItem();
                    
                    navigate('/');
                }else{
                    console.warn('Authorization Code POST fail');
                    navigate('/login');
                }
            }catch(error){
                console.error('Fetching access token failed: ', error);
            };
        };
        sendAuthCodeToserver();
      }
  }, [GOOGLE_AUTH_CODE, navigate]);

  return <h1>Google 로그인 중...</h1>;
};

export default GoogleCallback;
