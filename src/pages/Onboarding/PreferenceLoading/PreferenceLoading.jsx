import  * as S  from "./PreferenceLoading.styled"
import LoadingAnimaition from '@components/Loading/Loading'

import { useEffect } from "react";
import { useNavigate } from "react-router";

/* 추후 할 일
-LoadingAnimaition 컴포넌트 border-radius 속성 수정 
-영화 선택 후 완료 버튼 클릭 시시 현재 로딩 페이지 연결
-현재 회원 닉네임 받아와서 로딩 문구 수정(무비 글라스->닉네임으로)
*/

function PreferenceLoading(){
  
  const navigate =useNavigate();
    
   //2초뒤에 이동
    useEffect(() => {
        const timer =setTimeout(() => {
          navigate('/'); 
        }, 2000);
        return () => clearTimeout(timer);
      }, [navigate]);
    
    return(
    <S.LoadingFrame>
        <S.LoadingContainer>
            <LoadingAnimaition/>

            <S.Explain>
                무비글라스님의 영화 취향을 분석하는 중...
            </S.Explain>
        </S.LoadingContainer>
    </S.LoadingFrame>)
}

export default PreferenceLoading