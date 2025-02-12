import PropTypes from 'prop-types';

import BackToHome from '@components/BackToHome/BackToHome';

import * as S from './NoSearchData.styled';

const NoSearchData = ({ keyword }) => {
  return (
    <S.NoSearchDataContainer>
      <S.SearchMovieText>
        <span className="keyword">‘{keyword}’</span> 에 대한 검색 내용이 없습니다. <br />
        다른 단어로 검색해보세요.
      </S.SearchMovieText>

      {/* 메인으로 */}
      <BackToHome />
    </S.NoSearchDataContainer>
  );
};

NoSearchData.propTypes = { keyword: PropTypes.string.isRequired };

export default NoSearchData;
