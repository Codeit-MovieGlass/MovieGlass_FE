import { useState } from 'react';

import BackToHomeOrMyPage from '@components/BackToHomeOrMyPage/BackToHomeOrMyPage';
import Heart from '@components/Heart/Heart';
import Rating from '@components/Rating/Rating';
import { MagnifierBright } from '@icons/Magnifier';

import { mockLikedMovies } from './mock/mockLikedMovies';

import * as S from './MyLikePage.styled';

const MyLikePage = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredMovies = mockLikedMovies.filter((movie) => {
    const searchLower = query.toLowerCase();
    const titleMatch = movie.title.toLowerCase().includes(searchLower);
    const genreMatch = movie.genre.toLowerCase().includes(searchLower);
    const castMatch = movie.cast.some((actor) => actor.toLowerCase().includes(searchLower));
    return titleMatch || genreMatch || castMatch;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // 검색 로직 추가
  };

  return (
    <S.MyLikePageContainer>
      {/* 1) 마이페이지 (상단 우측) */}
      <S.MyPageRouteSection>
        <BackToHomeOrMyPage type="mypage" />
      </S.MyPageRouteSection>

      {/* 2) 기존 "상단 헤더(제목 + 검색창)" */}
      <S.MyLikePageHeader>
        <S.PageTitle>내가 좋아요 한 작품</S.PageTitle>

        <S.SearchForm onSubmit={handleSearch}>
          <S.SearchInput
            type="text"
            placeholder="제목, 인물, 장르를 검색하세요!"
            value={query}
            onChange={handleSearchChange}
          />
          <S.SearchButton type="submit">
            <MagnifierBright />
          </S.SearchButton>
        </S.SearchForm>
      </S.MyLikePageHeader>
      <S.MainContentDivider />

      {/* 3) 카드 리스트 */}
      <S.LikedMovieList>
        {filteredMovies.map((movie) => (
          <S.LikedMovieListItem key={movie.id}>
            <S.LikedMovieCard>
              <S.PosterImageContainer>
                <S.PosterImage src={movie.poster} alt={movie.title} />
                <S.LikeButtonContainer>
                  <Heart />
                </S.LikeButtonContainer>
              </S.PosterImageContainer>

              <S.LikedMovieInfos>
                <S.LikedMovieTitle>{movie.title}</S.LikedMovieTitle>
                <Rating rating={movie.rating} />
              </S.LikedMovieInfos>
            </S.LikedMovieCard>
          </S.LikedMovieListItem>
        ))}
      </S.LikedMovieList>
    </S.MyLikePageContainer>
  );
};

export default MyLikePage;
