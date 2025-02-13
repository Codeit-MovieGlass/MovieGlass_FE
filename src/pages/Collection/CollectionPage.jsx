import React, { useState, useEffect } from 'react';
import * as S from './CollectionPage.styled';
import { Magnifier } from '@icons/Magnifier';
import Like from '@components/Like/Like';
import Rating from '@components/Rating/Rating';
import { HomeIcon } from '@icons/HomeIcon';
import { getLikedMovies } from '../../api/movieApi'; // API 함수 import

const CollectionPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [likedMovies, setLikedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // 컴포넌트 마운트 시 API를 통해 좋아요 누른 작품 데이터 가져오기
  useEffect(() => {
    const fetchLikedMovies = async () => {
      try {
        const movies = await getLikedMovies();
        setLikedMovies(movies);
      } catch (err) {
        setError(err.message || '좋아요 작품 데이터를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchLikedMovies();
  }, []);

  // 검색어 필터링 (필요한 경우 속성명과 로직을 조정)
  const filteredMovies = likedMovies.filter((movie) => {
    const searchLower = searchValue.toLowerCase();
    const titleMatch = movie.title.toLowerCase().includes(searchLower);
    const genreMatch = movie.genre.toLowerCase().includes(searchLower);
    // cast 정보는 빈 배열이므로 별도 처리 필요 없음
    return titleMatch || genreMatch;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <S.CollectionContainer>
      {/* 1) 마이페이지 (상단 우측) */}
      <S.TopBar>
        <S.MypageLink to="/mypage">
          <HomeIcon /> 마이페이지
        </S.MypageLink>
      </S.TopBar>

      {/* 2) 상단 헤더 (제목 + 검색창) */}
      <S.CollectionHeader>
        <S.PageTitle>내가 좋아요 한 작품</S.PageTitle>
        <S.SearchBox>
          <S.SearchInput
            type="text"
            placeholder="제목, 인물, 장르를 검색하세요!"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <S.SearchButton type="submit">
            <Magnifier />
          </S.SearchButton>
        </S.SearchBox>
      </S.CollectionHeader>

      {/* 3) 카드 리스트 */}
      <S.CardGrid>
        {filteredMovies.map((movie) => (
          <S.Card key={movie.id}>
            <S.PosterContainer>
              <S.Poster src={movie.poster} alt={movie.title} />
              <S.LikeButtonWrapper>
                <Like />
              </S.LikeButtonWrapper>
            </S.PosterContainer>
            <S.MovieInfo>
              <S.MovieTitle>{movie.title}</S.MovieTitle>
              <Rating rating={movie.rating} />
            </S.MovieInfo>
          </S.Card>
        ))}
      </S.CardGrid>
    </S.CollectionContainer>
  );
};

export default CollectionPage;
