import { useEffect, useState } from 'react';

import { getUserLikedMovies } from '@api/mypage';

import BackToHomeOrMyPage from '@components/BackToHomeOrMyPage/BackToHomeOrMyPage';
import Heart from '@components/Heart/Heart';
import Rating from '@components/Rating/Rating';
import { MagnifierBright } from '@icons/Magnifier';

import * as S from './MyLikePage.styled';

const MyLikePage = () => {
  const [query, setQuery] = useState('');
  const [searchLikedMovies, setSearchLikedMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setIsSearching(false);
  };

  const normalizeKorean = (text) => {
    return text ? text.normalize('NFC').toLowerCase() : '';
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredMovies = likedMovies.filter((movie) => {
      const searchLower = normalizeKorean(query);
      const titleMatch = normalizeKorean(movie.movie_name).includes(searchLower);
      const genreMatch = normalizeKorean(movie.production_genre || '').includes(searchLower);
      // const castMatch = (movie.cast || '').some((actor) =>
      //   normalizeKorean(actor).includes(searchLower)
      // );
      return titleMatch || genreMatch;
    });

    setIsSearching(true);
    setSearchLikedMovies(filteredMovies);
  };

  // 좋아요한 영화 목록 가져오기
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const getLikedMovies = async () => {
      try {
        const likedMovieList = await getUserLikedMovies('/api/liked-movies');
        console.log(likedMovieList);

        if (likedMovieList.length > 0) {
          setLikedMovies(likedMovieList);
        } else {
          setLikedMovies([]);
        }
      } catch (error) {
        console.error('Error fetching liked movies:', error);
        setLikedMovies([]);
      }
    };

    getLikedMovies();
  }, []);

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
        {isSearching
          ? searchLikedMovies.map((movie) => (
              // key 값으로 id 값 필요 (추후 반영)
              <S.LikedMovieListItem key={movie.movie_name}>
                <S.LikedMovieCard>
                  <S.PosterImageContainer>
                    <S.PosterImage src={movie.production_image} alt={movie.movie_name} />
                    <S.LikeButtonContainer>
                      <Heart initialLiked={true} />
                    </S.LikeButtonContainer>
                  </S.PosterImageContainer>

                  <S.LikedMovieInfos>
                    <S.LikedMovieTitle>{movie.movie_name}</S.LikedMovieTitle>
                    {/* 현재 rating 값이 서버에서 전달되지 않음 (추후 반영 필요) */}
                    <Rating rating={movie.rating} />
                  </S.LikedMovieInfos>
                </S.LikedMovieCard>
              </S.LikedMovieListItem>
            ))
          : likedMovies.map((movie) => (
              // key 값으로 id 값 필요 (추후 반영)
              <S.LikedMovieListItem key={movie.movie_name}>
                <S.LikedMovieCard>
                  <S.PosterImageContainer>
                    <S.PosterImage src={movie.production_image} alt={movie.movie_name} />
                    <S.LikeButtonContainer>
                      <Heart initialLiked={true} />
                    </S.LikeButtonContainer>
                  </S.PosterImageContainer>

                  <S.LikedMovieInfos>
                    <S.LikedMovieTitle>{movie.movie_name}</S.LikedMovieTitle>
                    {/* 현재 rating 값이 서버에서 전달되지 않음 (추후 반영 필요) */}
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
