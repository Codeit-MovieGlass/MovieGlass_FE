import { useState } from 'react';

import Rating from '@components/Rating/Rating';
import Heart from '@components/Heart/Heart';
import ViewCount from '@components/ViewCount/ViewCount';
import OTTLink from '@components/OTTLink/OTTLink';

import * as S from './MovieModal.styled';

const movieInfos = {
  title: '탑건: 매버릭',
  rating: 4.5,
  like: true,
  viewCount: 1000,
  infos: {
    title: '탑건: 매버릭',
    genre: ['액션', '드라마'],
    keyword: ['힝공', '전투기', '파일럿'],
    director: '조셉 코신스키',
    actor:
      '톰 크루즈, 마일스 텔러, 제니퍼 코넬리,존 햄, 글렌 포웰, 루이스 풀먼,에드 해리스, 발 킬머',
    releaseDate: '2022-05-25',
    runtime: '2시간 10분',
    ageLimit: '12',
    synopsis:
      '최고의 파일럿이자 전설적인 에이스, 매버릭(톰 크루즈) 은 수십 년간 최전방에서 활약했지만, 여전히 규칙을 깨며 자신만의 방식으로 살아간다. 그는 탑건(TOPGUN) 출신의 젊은 조종사들을 가르치는 훈련 교관으로 복귀하지만, 그 중 한 명이 과거 전우의 아들이자 자신을 원망하는 루스터(마일스 텔러) 이다. 한편, 국가를 위협하는 새로운 미션이 주어지고, 이들은 성공 확률이 극히 낮은 작전에 투입된다.전투기를 타고 운명을 건 미션에 나서는 매버릭과 젊은 조종사들, 과연 그들은 불가능을 가능으로 만들 수 있을 것인가?',
  },
};

const MovieModal = () => {
  // 선택된 탭 정보 상태 관리
  const infoTabs = ['정보', '관람평'];

  const [selectedTab, setSelectedTab] = useState('정보');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <S.MovieModalContainer>
      <S.MovieTrailerSection>
        <S.MovieTrailerImage
          src="https://i.pinimg.com/736x/b3/10/43/b31043d69ad59d096d17a3b6652a387f.jpg"
          alt="Movie Trailer"
        />
      </S.MovieTrailerSection>
      <S.MetaDataSection>
        {/* 평점, 좋아요, 조회수 */}
        <S.RatingLikeViewCountContainer>
          <S.RatingContainer>
            <Rating rating={movieInfos.rating} />
            <S.RatingText>
              {movieInfos.rating}
              <span className="total-rating"> / 5.0</span>
            </S.RatingText>
          </S.RatingContainer>

          <S.LikeViewCountContainer>
            <Heart initialLiked={movieInfos.like} />
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
      <S.MovieInfoSection>
        {/* 영화 제목, 러닝타임, 개봉일 정보 */}
        <S.MovieTitleInfoSection>
          <S.MovieTitle>{movieInfos.title}</S.MovieTitle>
          <S.MovieRunningTimeReleaseDateContainer>
            <S.MovieRunningTime>러닝타임 {movieInfos.infos.runtime}</S.MovieRunningTime>
            <S.MovieReleaseDate>{movieInfos.infos.releaseDate}</S.MovieReleaseDate>
          </S.MovieRunningTimeReleaseDateContainer>
        </S.MovieTitleInfoSection>

        {/* 출연진, 장르, 등급, 키워드 */}
        <S.CastGenreSection>
          {/* 출연진 */}
          <S.CastContainer>
            <S.CastTitle>출연진</S.CastTitle>
            <S.CastActors>{movieInfos.infos.actor}</S.CastActors>
          </S.CastContainer>

          {/* 관람 등급, 장르 및 키워드 */}
          <S.AgeRatingGenreContainer>
            <S.AgeRatingIcon
              src={`/AgeRating/${movieInfos.infos.ageLimit}.svg`}
              alt={`${movieInfos.infos.ageLimit}세 이상 관람가`}
            />
            <S.GenreKeywordContainer>
              <S.GenreKeywordList>
                {movieInfos.infos.genre.map((genre) => (
                  <S.GenreKeywordItem key={genre}>
                    <S.GenreInfo>#{genre}</S.GenreInfo>
                  </S.GenreKeywordItem>
                ))}
              </S.GenreKeywordList>

              <S.GenreKeywordList>
                {movieInfos.infos.keyword.map((keyword) => (
                  <S.GenreKeywordItem key={keyword}>
                    <S.KeywordInfo>#{keyword}</S.KeywordInfo>
                  </S.GenreKeywordItem>
                ))}
              </S.GenreKeywordList>
            </S.GenreKeywordContainer>
          </S.AgeRatingGenreContainer>
        </S.CastGenreSection>

        {/* 영화 줄거리 */}
        <S.SynopsisSection>
          <S.SynopsisTitle>줄거리</S.SynopsisTitle>
          <S.SynopsisContent>{movieInfos.infos.synopsis}</S.SynopsisContent>
        </S.SynopsisSection>
      </S.MovieInfoSection>
    </S.MovieModalContainer>
  );
};

export default MovieModal;
