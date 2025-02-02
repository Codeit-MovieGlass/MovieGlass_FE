import * as S from './Curation.styled';
import CurationData from '../../Mock/CurationData';
import PropTypes from 'prop-types';

const Curation = ({ CurationTitle }) => {
  const MOVIES = 5;

  return (
    <S.CurationContainer>
      <S.LeftArrow />
      <S.MovieListContainer>
        <S.CurationTitle>{CurationTitle}</S.CurationTitle>
        <S.MovieContainer>
          {CurationData.slice(0, MOVIES).map((movie, index) => (
            <S.MovieImg
              key={index}
              Url={movie.imageUrl}
              isFirst={index === 0}
              isLast={index === MOVIES - 1}
            />
          ))}
        </S.MovieContainer>
      </S.MovieListContainer>
      <S.RightArrow />
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
