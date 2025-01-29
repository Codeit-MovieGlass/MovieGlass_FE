import * as S from './Curation.styled';
import CurationData from '../../Mock/CurationData';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const breakpoints = {
  mobile: 660,
  tablet: 932,
  desktop: 1198,
  largeDesktop: 1470,
};

const Curation = ({ CurationTitle }) => {
  const [visibleImages, setVisibleImages] = useState(5); // 기본값: 5개

  // 창 크기에 따라 visibleImages를 업데이트
  const updateVisibleImages = () => {
    const width = window.innerWidth;

    if (width >= breakpoints.largeDesktop) {
      setVisibleImages(5); // Large Desktop
    } else if (width >= breakpoints.desktop) {
      setVisibleImages(4); // Desktop
    } else if (width >= breakpoints.tablet) {
      setVisibleImages(3); // Tablet
    } else {
      setVisibleImages(2); // Mobile
    }
  };

  useEffect(() => {
    updateVisibleImages(); // 초기화
    window.addEventListener('resize', updateVisibleImages); // 리스너 추가

    return () => {
      window.removeEventListener('resize', updateVisibleImages); // 정리
    };
  }, []);

  return (
    <S.CurationContainer>
      <S.LeftArrow />
      <S.MovieListContainer>
        <S.CurationTitle>{CurationTitle}</S.CurationTitle>
        <S.MovieContainer>
          {CurationData.slice(0, visibleImages).map((movie, index) => (
            <S.MovieImg
              key={index}
              Url={movie.imageUrl}
              isFirst={index === 0}
              isLast={index === visibleImages - 1}
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
