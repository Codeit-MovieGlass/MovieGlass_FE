/*
-추후에 할 일
장르 선택 후 데이터 백엔드로 보내는 기능
*/

import { useState } from 'react';
import { useNavigate } from 'react-router';

import { handleNext } from '@api/genre';

import { NextArrow } from '@icons/Arrow';

import * as S from './GenreSelection.styled';

// 장르 목록
const gernes = [
  { id: 1, name: '드라마' },
  { id: 2, name: '스릴러/공포' },
  { id: 3, name: '모험/판타지' },
  { id: 4, name: '코미디' },
  { id: 5, name: '로맨스' },
  { id: 6, name: '다큐멘터리' },
  { id: 7, name: '액션/범죄' },
  { id: 8, name: '뮤지컬' },
  { id: 9, name: '애니메이션' },
];

const GenreSelectionPage = () => {
  const navigate = useNavigate();

  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreClick = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else if (selectedGenres.length < 2) {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  return (
    <S.GenreSelectionContainer>
      <S.GenreSelectionFrame>
        <S.GenreSelectionText>좋아하는 영화 장르 두 개를 골라주세요.</S.GenreSelectionText>
        <S.GenreList>
          {gernes.map((gerne) => (
            <S.GenreItem key={gerne.id}>
              <S.GenreButton
                $selected={selectedGenres.includes(gerne.id)}
                $initial={selectedGenres.length <= 1}
                onClick={() => handleGenreClick(gerne.id)}
              >
                {gerne.name}
              </S.GenreButton>
            </S.GenreItem>
          ))}
        </S.GenreList>

        <S.NextButtonContainer>
          <S.NextButton
            $selected={selectedGenres.length == 2}
            onClick={() => handleNext(selectedGenres, gernes, navigate)}
          >
            <NextArrow />
          </S.NextButton>
        </S.NextButtonContainer>
      </S.GenreSelectionFrame>
    </S.GenreSelectionContainer>
  );
};

export default GenreSelectionPage;
