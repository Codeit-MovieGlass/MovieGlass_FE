import PropTypes from 'prop-types';
import { useRef } from 'react';

import * as S from './EditProfileName.styled';

const EditProfileName = ({
  profileName,
  handleProfileNameChange,
  handleProfileEdit,
  handleProfileEditCancel,
}) => {
  const editButtonRef = useRef(null);

  const handleEditButtonKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editButtonRef.current.click();
    }
  };

  return (
    <S.EditProfileNameContainer>
      <S.ProfileNameInput
        type="text"
        value={profileName}
        onChange={handleProfileNameChange}
        onKeyDown={handleEditButtonKeyDown}
        spellCheck="false"
        autoFocus
      />
      <S.EditCancelButtonContainer>
        <S.EditButton onClick={handleProfileEdit} ref={editButtonRef}>
          수정하기
        </S.EditButton>
        <S.CancelButton onClick={handleProfileEditCancel}>취소하기</S.CancelButton>
      </S.EditCancelButtonContainer>
    </S.EditProfileNameContainer>
  );
};

EditProfileName.propTypes = {
  profileName: PropTypes.string.isRequired,
  handleProfileNameChange: PropTypes.func.isRequired,
  handleProfileEdit: PropTypes.func.isRequired,
  handleProfileEditCancel: PropTypes.func.isRequired,
};

export default EditProfileName;
