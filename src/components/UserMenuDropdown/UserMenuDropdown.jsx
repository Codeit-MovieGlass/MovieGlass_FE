import * as S from './UserMenuDropdown.styled';

const UserMenuDropdown = () => {
  return (
    <S.DropdownContainer>
      <S.OptionList>
        <S.Options>마이페이지</S.Options>
        <S.Options>로그아웃</S.Options>
      </S.OptionList>
    </S.DropdownContainer>
  );
};

export default UserMenuDropdown;
