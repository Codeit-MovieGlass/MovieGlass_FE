import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CollectionModal from "./CollectionModal"; // 모달 컴포넌트의 경로에 맞게 수정

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // 컬렉션 추가 모달 열기
  const handleOpenModal = () => setIsModalOpen(true);

  // 모달에서 전달받은 제목을 사용하여 컬렉션 추가 후 저장
  const handleSaveCollection = (title) => {
    if (title.trim() !== "") {
      setCollections([
        ...collections,
        { id: Date.now(), title, movies: [] },
      ]);
      setIsModalOpen(false);
    }
  };

  // 수정 버튼 대신, 컬렉션 상세페이지로 이동 (전체 컬렉션 객체 전달)
  const handleViewCollectionDetail = (collection) => {
    navigate(`/collection/${collection.id}`, { state: { collection } });
  };

  // 컬렉션 삭제
  const handleDeleteCollection = (id) => {
    if (window.confirm("컬렉션을 삭제하시겠습니까?")) {
      setCollections(collections.filter((col) => col.id !== id));
    }
  };

  return (
    <PageContainer>
      <Header>
        <HeaderTitle>내 컬렉션</HeaderTitle>
        <AddCollectionButton onClick={handleOpenModal}>
          <PlusIcon>+</PlusIcon>
          <AddText>컬렉션 추가하기</AddText>
        </AddCollectionButton>
      </Header>

      <CollectionsList>
        {collections.length === 0 ? (
          <EmptyMessageTop>
            컬렉션이 비어 있어요! 영화를 찾아 컬렉션에 추가해 보세요.
          </EmptyMessageTop>
        ) : (
          collections.map((collection) => (
            <CollectionWrapper key={collection.id}>
              <CollectionHeader>
                <CollectionTitle>{collection.title}</CollectionTitle>
                <EditDeleteContainer>
                  {/* 수정 버튼을 클릭하면 전체 컬렉션 객체를 전달 */}
                  <EditButton
                    onClick={() => handleViewCollectionDetail(collection)}
                  >
                    ✎
                  </EditButton>
                  <DeleteButton
                    onClick={() => handleDeleteCollection(collection.id)}
                  >
                    🗑
                  </DeleteButton>
                </EditDeleteContainer>
              </CollectionHeader>
              <CollectionItems>
                {collection.movies.length > 0 ? (
                  collection.movies.map((movie) => (
                    <MoviePoster
                      key={movie.id}
                      src={movie.imageUrl}
                      alt="영화 포스터"
                    />
                  ))
                ) : (
                  <EmptyMessage>영화를 추가해보세요</EmptyMessage>
                )}
              </CollectionItems>
            </CollectionWrapper>
          ))
        )}
      </CollectionsList>

      {isModalOpen && (
        <CollectionModal
          onSave={handleSaveCollection}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </PageContainer>
  );
};

export default CollectionPage;

/* ─── Styled Components ───────────────────────────────────── */

/* 전체 페이지 컨테이너 */
const PageContainer = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

/* 헤더 영역 */
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 40px auto;
  padding: 0 20px;
`;

/* 헤더 타이틀 */
const HeaderTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 60.51px;
  text-align: left;
  white-space: nowrap;
`;

/* 컬렉션 추가 버튼 */
const AddCollectionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
`;

/* 플러스 아이콘 */
const PlusIcon = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 컬렉션 추가하기 텍스트 */
const AddText = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 36.31px;
  text-align: left;
  white-space: nowrap;
`;

/* 컬렉션 리스트 */
const CollectionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

/* 컬렉션 박스 */
const CollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* 컬렉션 헤더 */
const CollectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 컬렉션 제목 */
const CollectionTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 48.41px;
  text-align: left;
  margin-top: 20px;
`;

/* 수정 및 삭제 버튼 컨테이너 */
const EditDeleteContainer = styled.div`
  display: flex;
  gap: 10px;
`;

/* 수정 버튼 */
const EditButton = styled.button`
  width: 47px;
  height: 47px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

/* 삭제 버튼 */
const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

/* 컬렉션 아이템(영화 포스터) 컨테이너 */
const CollectionItems = styled.div`
  width: 1168px;
  height: 291px;
  display: flex;
  gap: 10px;
  overflow-x: auto;
`;

/* 영화 포스터 */
const MoviePoster = styled.img`
  width: 201px;
  height: 244px;
  object-fit: cover;
  border-radius: 5px;
`;

/* 컬렉션이 비어 있을 경우 메시지 (컬렉션 목록 하단) */
const EmptyMessage = styled.div`
  font-size: 20px;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

/* 컬렉션이 비어 있을 때, 헤더와의 간격을 넓힘 */
const EmptyMessageTop = styled(EmptyMessage)`
  margin-top: 80px;
`;
