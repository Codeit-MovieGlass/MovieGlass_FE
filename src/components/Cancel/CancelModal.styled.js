import styled from "styled-components";

/* 모달 전체 배경 (어두운 배경) */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

/* 모달 박스 */
export const ModalContainer = styled.div`
  width: 516px;
  height: 214px;
  background: white;
  border-radius: 8px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
`;

/* 아이콘 및 텍스트 감싸는 컨테이너 */
export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  width: 100%;
`;

/* 아이콘 */
export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 텍스트 영역 */
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const MainText = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: black;
`;


/* 버튼 그룹 */
export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  width: 100%;
`;

/* 네 (확인) 버튼 */
export const ConfirmButton = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 8px;
  background: #965AFF;
  color: white;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 21px;
  line-height: 21px;
  text-align: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: #7b68ee;
  }
`;

/* 아니오 (취소) 버튼 */
export const CancelButton = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 8px;
  padding: 12px 20px;
  border: 1px solid #A8A5A8;
  background: #FFFFFF;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 21px;
  line-height: 21px;
  letter-spacing: 0%;
  text-align: center;
  white-space: nowrap; 
`;

