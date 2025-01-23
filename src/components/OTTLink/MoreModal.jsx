import PropTypes from 'prop-types';

import * as S from './MoreModal.styled';

const MoreModal = ({ ottServices }) => {
  return (
    <S.MoreModalContainer>
      {ottServices.map((ott, index) => (
        <S.MoreModalItem key={index}>{ott}</S.MoreModalItem>
      ))}
    </S.MoreModalContainer>
  );
};

MoreModal.propTypes = {
  ottServices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MoreModal;
