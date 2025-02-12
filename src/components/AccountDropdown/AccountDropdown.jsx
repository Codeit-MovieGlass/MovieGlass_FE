import * as S from './AccountDropdown.styled';

const AccountDropdown = () => {
  return (
    <S.AccountDropdownList>
      <S.AccountDropdownItem>
        <S.AccountDropdownItemLink>로그아웃</S.AccountDropdownItemLink>
      </S.AccountDropdownItem>
      <S.AccountDropdownItem>
        <S.AccountDropdownItemLink
          href="mailto: movieglass@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          메일로 문의하기
        </S.AccountDropdownItemLink>
      </S.AccountDropdownItem>
      <S.AccountDropdownItem>
        <S.AccountDropdownItemLink $isQuit={true}>탈퇴하기</S.AccountDropdownItemLink>
      </S.AccountDropdownItem>
    </S.AccountDropdownList>
  );
};

export default AccountDropdown;
