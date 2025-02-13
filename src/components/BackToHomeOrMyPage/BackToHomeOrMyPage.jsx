import PropTypes from 'prop-types';

import { HomeIcon } from '@icons/HomeIcon';

import * as S from './BackToHomeOrMyPage.styled';

const BackToHomeOrMyPage = ({ type }) => {
  return (
    <S.BackToHomeLink href={type === 'home' ? '/' : `/${type}`}>
      <S.HomeIconBox>
        <HomeIcon />
      </S.HomeIconBox>
      <S.BackToHomeText>{type === 'home' ? '메인으로' : '마이페이지'}</S.BackToHomeText>
    </S.BackToHomeLink>
  );
};

BackToHomeOrMyPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BackToHomeOrMyPage;
