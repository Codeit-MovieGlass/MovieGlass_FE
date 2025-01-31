// @pages/Onboarding/Gerne_SelectPage/gerne_select.jsx
/*
<해야할 일>
-장르 선택 후 데이터 백엔드로 보내는 기능
*/

import React,{useState} from 'react'

import *as S from './GerneSelection.styled';

const GerneSelectionPage = () => {
    //장르 목록
    const gernes=[{id:1, name: '드라마/감동'}, 
        {id:2, name:'스릴/긴장'}, {id:3, name:'모험/판타지'}
        ,{id:4, name:'역사/시대극'},{id:5, name:'코미디/즐거움'}
        ,{id:6, name:'다큐멘터리/현실기반'},{id:7, name:'예술/창의적'}
        ,{id:8, name:'로맨스/성인'}, {id:9, name:'액션/자극'}
    ]
    
    //장르 선택 로직
    const [selectedGenres, setSelectedGenres] = useState([]);
    const handleGenreClick=(genreId)=>{
        if(selectedGenres.includes(genreId)){
            setSelectedGenres(selectedGenres.filter((id)=>id !==genreId))
        }else if (selectedGenres.length<2){
            setSelectedGenres([...selectedGenres,genreId]);
        }
    }

    return (
      <S.GenreSelectionFrame>
        <S.GenreSelectionContainer style={{position:'relative'}} >
          <S.GenreSelectionText >좋아하는 영화 장르 두 개를 골라주세요.</S.GenreSelectionText>
          <S.GenreList>
            {gernes.map((gerne)=>(
                    <S.Genre style={{backgroundColor: selectedGenres.includes(gerne.id)
                        ? 'var(--Primary, #7E37F9)'
                        : 'transparent',
                      cursor: 'pointer',}} key={gerne.id}
                    onClick={()=>handleGenreClick(gerne.id)}>
                    <S.S style={{color: selectedGenres.includes(gerne.id) ? 'white' : 'var(--Primary, #7E37F9)',}}>{gerne.name}</S.S>
                    </S.Genre>
                ))
            } 
          </S.GenreList>
          {selectedGenres.length === 2 &&<div>
            <button style={{position:'absolute',right:'78px',bottom:'37px'
            }} onClick={()=>{}}>
               <S.RightArrow></S.RightArrow>
            </button>
          </div>}
        </S.GenreSelectionContainer>
      </S.GenreSelectionFrame>
    );
  };
  
  export default GerneSelectionPage; // 기본 내보내기
  