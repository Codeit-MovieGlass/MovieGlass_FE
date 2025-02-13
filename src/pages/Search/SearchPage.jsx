import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { getSearchData } from '@api/home';

import SearchMovie from '@components/SearchMovie/SearchMovie';
import Curation from '@components/Curation/Curation';

import * as S from './SearchPage.styled';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [searchData, setSearchData] = useState([]);
  const [recommendCuration, setRecommendCuration] = useState([]);

  useEffect(() => {
    const getSearchResult = async () => {
      try {
        const response = await getSearchData(query);
        // console.log(response);

        setSearchData(response?.search_results || []);
        setRecommendCuration(response?.recommendations || []);
      } catch (error) {
        console.error('검색 결과 가져오기 실패:', error);
      }
    };

    getSearchResult();
  }, [query]);

  return (
    <S.SearchPageContainer>
      <SearchMovie query={query} searchedResult={searchData} />
      {searchData?.length > 0 && (
        <Curation curationTitle="비슷한 영화를 추천해드려요" movieList={recommendCuration} />
      )}
    </S.SearchPageContainer>
  );
};

export default SearchPage;
