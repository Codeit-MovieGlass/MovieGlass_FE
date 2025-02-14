import PropTypes from 'prop-types';

import { PencilIcon, TrashIcon } from '@icons/EditDelete';

import * as S from './EditDeleteButton.styled';

const EditDeleteButton = ({ handleReviewEditing, handleDeleteModalOpen }) => {
  return (
    <S.EditDeleteContainer>
      <S.EditButton onClick={handleReviewEditing}>
        수정하기
        <PencilIcon />
      </S.EditButton>
      <S.DeleteButton onClick={handleDeleteModalOpen}>
        삭제하기 <TrashIcon />
      </S.DeleteButton>
    </S.EditDeleteContainer>
  );
};

EditDeleteButton.propTypes = {
  handleReviewEditing: PropTypes.func.isRequired,
  handleDeleteModalOpen: PropTypes.func.isRequired,
};

export default EditDeleteButton;
