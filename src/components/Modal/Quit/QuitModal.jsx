import PropTypes from 'prop-types';

import { WithdrawlIcon } from '@icons/MyPage';

import * as S from './QuitModal.styled';

const QuitModal = ({ topRef, handleQuitModalClose }) => {
  return (
    <S.QuitModalContainer ref={topRef}>
      <S.QuitIconTextSection>
        <S.QuitIconBox>
          <WithdrawlIcon />
        </S.QuitIconBox>
        <S.QuitText>
          정말 탈퇴하시겠어요? <br />
          탈퇴한 후에는 되돌릴 수 없어요.
        </S.QuitText>
      </S.QuitIconTextSection>

      <S.QuitModalButtonSection>
        <S.QuitButton>탈퇴하기</S.QuitButton>
        <S.CancelButton onClick={handleQuitModalClose}>취소하기</S.CancelButton>
      </S.QuitModalButtonSection>
    </S.QuitModalContainer>
  );
};

QuitModal.propTypes = {
  topRef: PropTypes.object.isRequired,
  handleQuitModalClose: PropTypes.func.isRequired,
};

export default QuitModal;
