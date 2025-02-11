import React, { useState } from "react";
import styled from "styled-components";

const CollectionMovieSearchModal = ({ isOpen, onClose, onSelectMovies }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "영화 제목 1",
      poster: "https://via.placeholder.com/134x184",
      selected: false,
    },
    {
      id: 2,
      title: "영화 제목 2",
      poster: "https://via.placeholder.com/134x184",
      selected: false,
    },
  ]);

  // 영화 검색 (필요 시 API 요청 또는 필터링 로직 추가)
  const handleSearch = () => {
    console.log("검색 실행:", searchQuery);
    // 예를 들어, API 요청 후 movies 업데이트 가능
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // 영화 선택: 선택 여부 토글
  const toggleMovieSelection = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, selected: !movie.selected } : movie
      )
    );
  };

  // 선택된 영화 목록
  const selectedMovies = movies.filter((movie) => movie.selected);

  return isOpen ? (
    <Backdrop>
      <ModalContainer>
        <Title>영화 찾기</Title>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="영화 제목을 입력하세요."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SearchButton onClick={handleSearch}>🔍</SearchButton>
        </SearchBar>
        <MovieList>
          {movies.map((movie) => (
            <MovieItemContainer key={movie.id}>
              <SelectBox onClick={() => toggleMovieSelection(movie.id)}>
                {movie.selected && "✔"}
              </SelectBox>
              <MoviePoster src={movie.poster} alt={movie.title} />
              <MovieInfo>
                <MovieTitleText>{movie.title}</MovieTitleText>
                <MovieSubtitle>영화 시놉시스</MovieSubtitle>
              </MovieInfo>
            </MovieItemContainer>
          ))}
        </MovieList>
        <AddButton onClick={() => onSelectMovies(selectedMovies)}>
          영화 {selectedMovies.length}개 추가하기
        </AddButton>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContainer>
    </Backdrop>
  ) : null;
};

export default CollectionMovieSearchModal;

/* ─── Styled Components ───────────────────────────────────── */
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 645px;
  height: 821px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 44px;
  font-size: 18px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  width: 44px;
  height: 44px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
`;

const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  overflow-y: auto;
`;

const MovieItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
`;

const SelectBox = styled.div`
  width: 44px;
  height: 44px;
  border: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
`;

const MoviePoster = styled.img`
  width: 134px;
  height: 184px;
  border-radius: 5px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MovieTitleText = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const MovieSubtitle = styled.p`
  font-size: 14px;
  color: gray;
`;

const AddButton = styled.button`
  width: 436px;
  height: 73px;
  font-size: 18px;
  font-weight: bold;
  background: #ccc;
  border: none;
  margin-top: 30px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
