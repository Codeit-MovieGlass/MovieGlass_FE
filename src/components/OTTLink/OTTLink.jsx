import { useState } from 'react';

import MoreModal from './MoreModal';

import * as S from './OTTLink.styled';

const OTTLink = () => {
  // 추후 API Response로 받아서 사용
  const ottServices = ['netflix', 'disneyplus', 'watcha', 'tving', 'coupangplay'];

  // 더보기 모달 내 OTT 리스트 이름 변환
  const transformedOTTList = {
    netflix: 'Netflix',
    disneyplus: 'Disney+',
    watcha: 'Watcha',
    tving: 'TVING',
    coupangplay: '쿠팡플레이',
  };

  // 변환된 OTT 리스트 배열
  const OTTListNames = ottServices.map((service) => transformedOTTList[service]);

  const [isMoreOTTModalOpen, setIsMoreOTTModalOpen] = useState(false);

  const handleMoreOTTModal = () => {
    setIsMoreOTTModalOpen(!isMoreOTTModalOpen);
  };

  return (
    <S.OTTLinkContainer>
      <S.OTTLinkTitle>Where to Watch</S.OTTLinkTitle>
      <S.OTTIconContainer>
        {ottServices.slice(0, 3).map((ott, index) => (
          <S.OTTLinkIcon key={index} src={`/OTT/${ott}.png`} alt={ott} />
        ))}
        {ottServices.length > 3 && (
          <S.MoreModalWrapper onClick={handleMoreOTTModal}>
            <S.MoreOTTIcon src="/OTT/moreOtt.svg" alt="moreOtt" />
            {isMoreOTTModalOpen && <MoreModal ottServices={OTTListNames.slice(3)} />}
          </S.MoreModalWrapper>
        )}
      </S.OTTIconContainer>
    </S.OTTLinkContainer>
  );
};

export default OTTLink;
