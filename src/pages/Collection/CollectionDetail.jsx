import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import CollectionMovieSearchModal from "./CollectionMovieSearchModal";

const CollectionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const passedCollection = location.state?.collection;
  const initialCollection = passedCollection || {
    id,
    title: id === "1" ? "컬렉션 제목 1" : "컬렉션 제목 2",
    movies:
      id === "1"
        ? [
            { id: 101, title: "영화 제목 1", rating: 4.5 },
            { id: 102, title: "영화 제목 2", rating: 3.8 },
            { id: 103, title: "영화 제목 3", rating: 4.2 },
          ]
        : [],
  };

  const [movies, setMovies] = useState(initialCollection.movies);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => {
    navigate(-1);
  };

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };

  const handleAddMovie = () => {
    setIsModalOpen(true);
  };

  const handleSelectMovies = (selectedMovies) => {
    setMovies([...movies, ...selectedMovies]);
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={handleBack}>←</BackButton>
        <CollectionName>{initialCollection.title}</CollectionName>
        <RightButtons>
          <SearchContainer>
            <SearchInput
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="영화 검색"
            />
            <SearchButton onClick={handleSearch}>🔍</SearchButton>
          </SearchContainer>
          <AddMovieButton onClick={handleAddMovie}>추가하기</AddMovieButton>
        </RightButtons>
      </Header>

      {/* ✅ 영화 리스트 5개씩 한 줄 */}
      <Content>
        {movies.length === 0 ? (
          <EmptyMessage>
            컬렉션이 비어 있어요! 영화를 찾아 컬렉션에 추가해 보세요.
          </EmptyMessage>
        ) : (
          movies.reduce((rows, movie, index) => {
            if (index % 5 === 0) rows.push([]);
            rows[rows.length - 1].push(movie);
            return rows;
          }, []).map((row, rowIndex) => (
            <MovieRow key={rowIndex}>
              {row.map((movie) => (
                <MovieItem key={movie.id}>
                  <MoviePoster />
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieRating>⭐ {movie.rating}/5.0</MovieRating>
                </MovieItem>
              ))}
            </MovieRow>
          ))
        )}
      </Content>

      {isModalOpen && (
        <CollectionMovieSearchModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelectMovies={handleSelectMovies}
        />
      )}
    </PageContainer>
  );
};

export default CollectionDetail;

/* ─── Styled Components ───────────────────────────────────── */
const PageContainer = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const BackButton = styled.button`
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
`;

const CollectionName = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 60.51px;
  margin: 0 20px;
`;

const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  font-size: 20px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  margin-left: 10px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const AddMovieButton = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  background: gray;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

/* ✅ 영화 리스트 5개씩 한 줄로 정렬 */
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 1268px;
  height: auto;
  margin: 0 auto;

  @media (max-width: 1300px) {
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const MovieRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 358px;
  margin-bottom: 20px;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 232px;
  height: 340px;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
`;

const MoviePoster = styled.div`
  width: 232px;
  height: 291px;
  background-color: #ccc;
  border-radius: 10px;
`;

const MovieTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 48.41px;
  text-align: center;
  margin-top: 10px;
  width: 188px;
`;

const MovieRating = styled.div`
  width: 205px;
  height: 41px;
  font-size: 20px;
  font-weight: bold;
  color: #ffd700;
  text-align: center;
  margin-top: 5px;
`;

const EmptyMessage = styled.div`
  font-size: 25px;
  color: #888;
  text-align: center;
  margin-top: 40px;
`;
