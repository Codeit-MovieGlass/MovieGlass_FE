import PropTypes from 'prop-types';

import useDisableScroll from '@hooks/useDisableScroll';

import * as S from './ModalWrapper.styled';

const ModalWrapper = ({ children, isMovieModal = false, handleMovieModalClose }) => {
  useDisableScroll();

  return (
    <>
      <S.ModalBackground onClick={handleMovieModalClose} />
      {/* Modal Content */}
      <S.ModalContent $isMovieModal={isMovieModal}>{children}</S.ModalContent>
    </>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isMovieModal: PropTypes.bool,
  handleMovieModalClose: PropTypes.func,
};

export default ModalWrapper;
