import PropTypes from 'prop-types';

import * as S from './EditProfileName.styled';

const EditProfileName = ({ profileName, handleProfileNameChange, handleProfileEditCancel }) => {
  return (
    <S.EditProfileNameContainer>
      <S.ProfileNameInput
        type="text"
        value={profileName}
        onChange={handleProfileNameChange}
        spellCheck="false"
        autoFocus
      />
      <S.EditCancelButtonContainer>
        <S.EditButton>수정하기</S.EditButton>
        <S.CancelButton onClick={handleProfileEditCancel}>취소하기</S.CancelButton>
      </S.EditCancelButtonContainer>
    </S.EditProfileNameContainer>
  );
};

EditProfileName.propTypes = {
  profileName: PropTypes.string.isRequired,
  handleProfileNameChange: PropTypes.func.isRequired,
  handleProfileEditCancel: PropTypes.func.isRequired,
};

export default EditProfileName;
