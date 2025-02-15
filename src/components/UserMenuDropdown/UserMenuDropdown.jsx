import PropTypes from 'prop-types';

import * as S from './UserMenuDropdown.styled';

const UserMenuDropdown = ({ handleLogout }) => {
  return (
    <S.DropdownContainer>
      <S.OptionList>
        <S.Options>
          <S.OptionLink to="/mypage">마이페이지</S.OptionLink>
        </S.Options>
        <S.Options>
          <S.OptionLink onClick={handleLogout}>로그아웃</S.OptionLink>
        </S.Options>
      </S.OptionList>
    </S.DropdownContainer>
  );
};

UserMenuDropdown.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default UserMenuDropdown;
