import { useState } from "react";
import styled from "styled-components";

const CollectionModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    if (title.trim()) {
      onSave(title);
      onClose();
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>새 컬렉션 추가하기</ModalTitle>
        <InputLabel>컬렉션 이름</InputLabel>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="컬렉션 이름을 입력하세요"
        />
        <ModalButton onClick={handleSave}>컬렉션 추가하기</ModalButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CollectionModal;

/* ─── Styled Components ───────────────────────────────────── */

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 561px;
  height: 491px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 35px;
  font-weight: 400;
  text-align: left;
  color: black;
`;

const InputLabel = styled.label`
  font-size: 25px;
  font-weight: 400;
  color: black; /* 배경과 대비되어 텍스트가 보이도록 설정 */
`;

const Input = styled.input`
  width: 465px;
  height: 89px;
  font-size: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black; /* 입력 텍스트 색상 */
  background: #fff; /* 입력 배경색 */
`;

const ModalButton = styled.button`
  width: 465px;
  height: 89px;
  background: gray;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 20px; /* 버튼을 하단으로 내리기 위해 여백 추가 */
`;
