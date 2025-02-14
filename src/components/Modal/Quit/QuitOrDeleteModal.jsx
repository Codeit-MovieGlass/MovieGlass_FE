import PropTypes from 'prop-types';

import { WarningIcon } from '@icons/MyPage';

import * as S from './QuitOrDeleteModal.styled';

const QuitOrDeleteModal = ({ type, topRef, handleModalClose }) => {
  return (
    <S.QuitModalContainer ref={topRef}>
      <S.QuitIconTextSection>
        <S.QuitIconBox>
          <WarningIcon />
        </S.QuitIconBox>
        <S.QuitText>
          정말 {type}하시겠어요? <br />
          {type}한 후에는 되돌릴 수 없어요.
        </S.QuitText>
      </S.QuitIconTextSection>

      <S.QuitModalButtonSection>
        <S.QuitButton>{type === '삭제' ? '삭제' : '탈퇴하기'}</S.QuitButton>
        <S.CancelButton onClick={handleModalClose}>
          {type === '삭제' ? '취소' : '취소하기'}
        </S.CancelButton>
      </S.QuitModalButtonSection>
    </S.QuitModalContainer>
  );
};

QuitOrDeleteModal.propTypes = {
  type: PropTypes.string.isRequired,
  topRef: PropTypes.object.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default QuitOrDeleteModal;
