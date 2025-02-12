import PropTypes from 'prop-types';

import TopTenList from '@components/TopTenList/TopTenList';
import BallonSection from '@components/Balloon/BallonSection';
import Curation from '@components/Curation/Curation';

import * as S from './Home.styled';
import SearchMoive from '@components/SearchMovie/SearchMovie';
import { TopTenMovieList } from '@components/TopTenList/mock/TopTenMovieList';
import { useCallback, useEffect, useState } from 'react';
import {
  getCurationShuffleData,
  getEmotionCurationData,
  getSearchData,
  getTopTenData,
} from '@api/homeApi';

const Home = ({ keyword }) => {
  // const [TopTenMovieList, setTopTenMovieList] = useState(null);
  const [curationList, setCurationList] = useState([]);
  const [emotioncuration, setEmotionCuration] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [recommendCuration, setRecommendCuration] = useState([]);

  // //탑텐
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const result = await getTopTenData();
  //       setCurationList(result);
  //     } catch (err) {
  //       console.error(err.message);
  //     } finally {
  //       //
  //     }
  //   };
  //   getData();
  // }, []);

  //큐레이션 셔플
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

  //감정 큐레이션 불러오기
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

  //검색 데이터 불러오기
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
      } finally {
        //
      }
    };

    getData();
  }, [keyword]);

  return (
    <S.HomeContatiner>
      {keyword === '' ? (
        <>
          <TopTenList movieList={TopTenMovieList} />
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
          <SearchMoive keyword={keyword} searchData={searchData} />
          <Curation curationTitle={'비슷한 영화를 추천해드려요'} movieList={recommendCuration} />
        </S.SearchMovieWrapper>
      )}
    </S.HomeContatiner>
  );
};

Home.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default Home;
