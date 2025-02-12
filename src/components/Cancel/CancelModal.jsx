import React from "react";
import * as S from "./CancelModal.styled";
import WarningIcon from "@assets/svgs/icons/warning.svg?react";

const CancelModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null; // 모달이 닫혀 있으면 렌더링하지 않음

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalContent>
          <S.IconWrapper>
            <WarningIcon />
          </S.IconWrapper>
          <S.TextWrapper>
            <S.MainText>
              정말 삭제하시겠어요?<br /> 
              삭제한 후에는 되돌릴 수 없어요.
              </S.MainText>
            
          </S.TextWrapper>
        </S.ModalContent>
        <S.ButtonGroup>
          <S.ConfirmButton onClick={onConfirm}>네</S.ConfirmButton>
          <S.CancelButton onClick={onCancel}>아니오</S.CancelButton>
        </S.ButtonGroup>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default CancelModal;
