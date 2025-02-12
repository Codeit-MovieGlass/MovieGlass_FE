import PropTypes from 'prop-types';

import * as S from './ModalWrapper.styled';

const ModalWrapper = ({ children }) => {
  return (
    <>
      <S.ModalBackground />
      {/* Modal Content */}
      <S.ModalContent>{children}</S.ModalContent>
    </>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalWrapper;
