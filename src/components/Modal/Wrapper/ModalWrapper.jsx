import PropTypes from 'prop-types';

import useDisableScroll from '@hooks/useDisableScroll';

import * as S from './ModalWrapper.styled';

const ModalWrapper = ({ children }) => {
  useDisableScroll();

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
