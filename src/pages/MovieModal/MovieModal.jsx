import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

import Rating from '@components/Rating/Rating';
import Heart from '@components/Heart/Heart';
import ViewCount from '@components/ViewCount/ViewCount';
import OTTLink from '@components/OTTLink/OTTLink';
import MovieInfoTab from './InfoTab/MovieInfoTab';
import MovieReviewTab from './ReviewTab/MovieReviewTab';
import ModalWrapper from '@components/Modal/Wrapper/ModalWrapper';

import * as S from './MovieModal.styled';

// const movieInfos = {
//   rating: 4.5,
//   like: true,
//   viewCount: 1000,
//   infos: {
//     title: '탑건: 매버릭',
//     genre: ['액션', '드라마'],
//     keyword: ['항공', '전투기', '파일럿'],
//     director: '조셉 코신스키',
//     actor:
//       '톰 크루즈, 마일스 텔러, 제니퍼 코넬리,존 햄, 글렌 포웰, 루이스 풀먼,에드 해리스, 발 킬머',
//     releaseDate: '2022-05-25',
//     runtime: '2시간 10분',
//     ageLimit: '12',
//     synopsis:
//       '최고의 파일럿이자 전설적인 에이스, 매버릭(톰 크루즈) 은 수십 년간 최전방에서 활약했지만, 여전히 규칙을 깨며 자신만의 방식으로 살아간다. 그는 탑건(TOPGUN) 출신의 젊은 조종사들을 가르치는 훈련 교관으로 복귀하지만, 그 중 한 명이 과거 전우의 아들이자 자신을 원망하는 루스터(마일스 텔러) 이다. 한편, 국가를 위협하는 새로운 미션이 주어지고, 이들은 성공 확률이 극히 낮은 작전에 투입된다.전투기를 타고 운명을 건 미션에 나서는 매버릭과 젊은 조종사들, 과연 그들은 불가능을 가능으로 만들 수 있을 것인가?',
//   },
// };

const MovieModal = ({ movieModalData }) => {
  // 선택된 탭 정보 상태 관리
  const infoTabs = ['정보', '관람평'];

  console.log('movieModalData: ', movieModalData);

  const [selectedTab, setSelectedTab] = useState('정보');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  // 영화 모달 닫기
  const [searchParams, setSearchParams] = useSearchParams();

  const movieModalRef = useRef(null);

  const handleMovieModalClose = () => {
    searchParams.delete('movieId');
    setSearchParams(searchParams);
  };

  return (
    <ModalWrapper isMovieModal={true} handleMovieModalClose={handleMovieModalClose}>
      <S.MovieModalContainer ref={movieModalRef}>
        <S.MovieTrailerSection>
          <S.MovieTrailerImage src={movieModalData?.horizontal_image} alt="Movie Trailer" />
        </S.MovieTrailerSection>
        <S.MetaDataSection>
          {/* 평점, 좋아요, 조회수 */}
          <S.RatingLikeViewCountContainer>
            <S.RatingContainer>
              <Rating rating={movieModalData?.averageRating} />
              <S.RatingText>
                {movieModalData.averageRating}
                <span className="total-rating"> / 5.0</span>
              </S.RatingText>
            </S.RatingContainer>

            <S.LikeViewCountContainer>
              <Heart initialLiked={movieModalData?.like} />
              <ViewCount />
            </S.LikeViewCountContainer>
          </S.RatingLikeViewCountContainer>

          {/* OTT Link */}
          <OTTLink />
        </S.MetaDataSection>
        {/* 정보, 관람평 선택 탭 */}
        <S.InfoTabSection>
          <S.InfoTabList>
            {infoTabs.map((tabName) => (
              <S.InfoTabItem key={tabName}>
                <S.InfoTabButton
                  onClick={() => handleTabClick(tabName)}
                  $isSelected={selectedTab === tabName}
                >
                  {tabName}
                </S.InfoTabButton>
              </S.InfoTabItem>
            ))}
          </S.InfoTabList>
        </S.InfoTabSection>

        {/* 영화 정보 표시 영역 */}
        {selectedTab === '정보' ? <MovieInfoTab movieInfos={movieModalData} /> : <MovieReviewTab />}
      </S.MovieModalContainer>
    </ModalWrapper>
  );
};

MovieModal.propTypes = {
  movieModalData: PropTypes.object,
};

export default MovieModal;
