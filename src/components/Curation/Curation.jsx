import * as S from './Curation.styled';
import CurationData from '../../Mock/CurationData';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Curation = ({ CurationTitle }) => {
  const [mIdx, setMIdx] = useState(0);
  const TOTALMOVIES = 10;
  const SHOWINGMOVIES = 5;

  const OnClickPrev = () => {
    if (mIdx !== 0) {
      setMIdx((prev) => prev - 1);
    }
  };

  const OnClickNext = () => {
    if (mIdx !== TOTALMOVIES - SHOWINGMOVIES) {
      setMIdx((prev) => prev + 1);
    }
  };

  return (
    <S.CurationContainer>
      <S.LeftArrow onClick={OnClickPrev} />
      <S.MovieListContainer>
        <S.CurationTitle>{CurationTitle}</S.CurationTitle>
        <S.MovieContainer>
          {CurationData.slice(mIdx, SHOWINGMOVIES + mIdx).map((movie, index) => (
            <S.MovieImg
              key={index}
              Url={movie.imageUrl}
              isFirst={index === 0}
              isLast={index === SHOWINGMOVIES - 1}
            />
          ))}
        </S.MovieContainer>
      </S.MovieListContainer>
      <S.RightArrow onClick={OnClickNext} />
    </S.CurationContainer>
  );
};

Curation.propTypes = {
  CurationTitle: PropTypes.string.isRequired,
};

Curation.defaultProps = {
  CurationTitle: '이런영화는 어때요?',
};

export default Curation;
