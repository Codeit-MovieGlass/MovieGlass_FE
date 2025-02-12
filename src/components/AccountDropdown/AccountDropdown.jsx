import PropTypes from 'prop-types';

import * as S from './AccountDropdown.styled';

const AccountDropdown = ({ handleAccountDropdown, handleQuitModalOpen }) => {
  const handleWithdrawlClick = () => {
    handleAccountDropdown();
    handleQuitModalOpen();
  };

  return (
    <S.AccountDropdownList>
      <S.AccountDropdownItem>
        <S.AccountDropdownItemLink onClick={handleAccountDropdown}>
          로그아웃
        </S.AccountDropdownItemLink>
      </S.AccountDropdownItem>
      <S.AccountDropdownItem>
        <S.AccountDropdownItemLink
          onClick={handleAccountDropdown}
          href="mailto: movieglass@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          메일로 문의하기
        </S.AccountDropdownItemLink>
      </S.AccountDropdownItem>
      <S.AccountDropdownItem>
        <S.AccountDropdownItemLink onClick={handleWithdrawlClick} $isQuit={true}>
          탈퇴하기
        </S.AccountDropdownItemLink>
      </S.AccountDropdownItem>
    </S.AccountDropdownList>
  );
};

AccountDropdown.propTypes = {
  handleAccountDropdown: PropTypes.func.isRequired,
  handleQuitModalOpen: PropTypes.func.isRequired,
};

export default AccountDropdown;
