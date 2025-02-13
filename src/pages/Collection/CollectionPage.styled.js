import styled from 'styled-components';

/* ✅ 모달 전체 배경 */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

/* ✅ 모달 컨테이너 */
export const ModalContainer = styled.div`
  width: 561px;
  height: 491px;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
`;

/* ✅ 모달 제목 */
export const ModalTitle = styled.h2`
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: left;
`;

/* ✅ 컬렉션 이름 레이블 */
export const InputLabel = styled.label`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 10px;
  display: block;
  text-align: left;
`;

/* ✅ 컬렉션 입력 필드 */
export const Input = styled.input`
  width: 465px;
  height: 89px;
  padding: 15px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

/* ✅ 컬렉션 추가 버튼 */
export const ModalButton = styled.button`
  width: 465px;
  height: 89px;
  background: #444;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #333;
  }
`;
