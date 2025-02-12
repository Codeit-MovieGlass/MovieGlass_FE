import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

import TopTenList from '@components/TopTenList/TopTenList';
import BallonSection from '@components/Balloon/BallonSection';
import Curation from '@components/Curation/Curation';
import SearchMovie from '@components/SearchMovie/SearchMovie';

// import { TopTenMovieList } from '@components/TopTenList/mock/TopTenMovieList';

import {
  getCurationShuffleData,
  getEmotionCurationData,
  getSearchData,
  getTopTenData,
} from '@api/homeApi';

import * as S from './Home.styled';

const Home = ({ keyword }) => {
  // const [TopTenMovieList, setTopTenMovieList] = useState(null);
  const [curationList, setCurationList] = useState([]);
  const [emotioncuration, setEmotionCuration] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [recommendCuration, setRecommendCuration] = useState([]);
  const [topTenData, setTopTenData] = useState([]);

  //탑텐
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getTopTenData();
        setTopTenData(result.result.top10Data.top10Movies);
        console.log(result.result.top10Data.top10Movies);
      } catch (err) {
        console.error(err.message);
      } finally {
        //
      }
    };
    getData();
  }, []);

  // 큐레이션 셔플
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getCurationShuffleData();
        setCurationList(result.result.shuffled_curations);
      } catch (err) {
        console.error(err.message);
      } finally {
        //
      }
    };
    getData();
  }, []);

  // 감정 큐레이션 불러오기
  const fetchEmotionCuration = useCallback(async () => {
    if (selectedEmoji === '') return;

    try {
      const result = await getEmotionCurationData(selectedEmoji);
      setEmotionCuration(result?.result?.curations?.[0] || null);
    } catch (err) {
      console.error(err.message);
    }
  }, [selectedEmoji]);

  useEffect(() => {
    fetchEmotionCuration();
  }, [fetchEmotionCuration]);

  // 검색 데이터 불러오기
  useEffect(() => {
    if (keyword === '') return;

    const getData = async () => {
      try {
        const result = await getSearchData(keyword);
        setSearchData(result.result.searchResults.search_results);
        setRecommendCuration(result.result.searchResults.recommendations);
        console.log(result.result.searchResults.recommendations);
      } catch (err) {
        console.error(err.message);
      }
    };

    getData();
  }, [keyword]);

  return (
    <S.HomeContainer>
      {keyword === '' ? (
        <>
          {topTenData.length > 0 && <TopTenList movieList={topTenData} />}
          <S.CurationWrapper>
            {selectedEmoji === '' ? (
              <BallonSection selectedEmoji={selectedEmoji} setSelectedEmoji={setSelectedEmoji} />
            ) : (
              <Curation
                curationTitle={emotioncuration.curation_name}
                movieList={emotioncuration.movies}
              />
            )}
            {curationList.map((curation) => (
              <Curation
                key={curation.curation_id}
                curationTitle={curation.curation_name}
                movieList={curation.movies}
              />
            ))}
          </S.CurationWrapper>
        </>
      ) : (
        <S.SearchMovieWrapper>
          <SearchMovie keyword={keyword} searchData={searchData} />
          <Curation curationTitle="비슷한 영화를 추천해드려요" movieList={recommendCuration} />
        </S.SearchMovieWrapper>
      )}
    </S.HomeContainer>
  );
};

Home.propTypes = { keyword: PropTypes.string.isRequired };

export default Home;
