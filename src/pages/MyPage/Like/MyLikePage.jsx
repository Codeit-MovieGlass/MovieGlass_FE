import { useState } from 'react';

import Like from '@components/Like/Like';
import Rating from '@components/Rating/Rating';
import { Magnifier } from '@icons/Magnifier';
import { HomeIcon } from '@icons/Home.js';

import * as S from './MyLikePage.styled';

const mockLikedMovies = [
  {
    id: 1,
    title: '암리킬',
    poster: 'https://i.pinimg.com/736x/c1/e0/bb/c1e0bb8f0e87ab4a551691229f4db6e9.jpg',
    rating: 4,
    genre: '액션',
    cast: ['박지성'],
  },
  {
    id: 2,
    title: '(영화입니다)',
    poster: 'https://i.pinimg.com/736x/c1/e0/bb/c1e0bb8f0e87ab4a551691229f4db6e9.jpg',
    rating: 5,
    genre: '드라마',
    cast: ['손흥민'],
  },
  {
    id: 3,
    title: '(안녕)',
    poster: 'https://i.pinimg.com/736x/c1/e0/bb/c1e0bb8f0e87ab4a551691229f4db6e9.jpg',
    rating: 3,
    genre: '코미디',
    cast: ['김민제'],
  },
  {
    id: 4,
    title: '(사과)',
    poster: 'https://i.pinimg.com/736x/c1/e0/bb/c1e0bb8f0e87ab4a551691229f4db6e9.jpg',
    rating: 2,
    genre: '스릴러',
    cast: ['이강인'],
  },
  {
    id: 5,
    title: '(바나나)',
    poster: 'https://i.pinimg.com/736x/c1/e0/bb/c1e0bb8f0e87ab4a551691229f4db6e9.jpg',
    rating: 4.5,
    genre: '로맨스',
    cast: ['이승우'],
  },
];

const MyLikePage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredMovies = mockLikedMovies.filter((movie) => {
    const searchLower = searchValue.toLowerCase();
    const titleMatch = movie.title.toLowerCase().includes(searchLower);
    const genreMatch = movie.genre.toLowerCase().includes(searchLower);
    const castMatch = movie.cast.some((actor) => actor.toLowerCase().includes(searchLower));
    return titleMatch || genreMatch || castMatch;
  });

  return (
    <S.CollectionContainer>
      {/* 1) 마이페이지 (상단 우측) */}
      <S.TopBar>
        <S.MypageLink to="/mypage">
          <HomeIcon /> 마이페이지
        </S.MypageLink>
      </S.TopBar>

      {/* 2) 기존 "상단 헤더(제목 + 검색창)" */}
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

export default MyLikePage;
