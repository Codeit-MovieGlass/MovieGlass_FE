import * as S from './UserMenuDropdown.styled';

const UserMenuDropdown = () => {
  return (
    <S.DropdownContainer>
      <S.OptionList>
        <S.Options>
          <S.OptionLink to="/mypage">마이페이지</S.OptionLink>
        </S.Options>
        <S.Options>
          <S.OptionLink>로그아웃</S.OptionLink>
        </S.Options>
      </S.OptionList>
    </S.DropdownContainer>
  );
};

export default UserMenuDropdown;
