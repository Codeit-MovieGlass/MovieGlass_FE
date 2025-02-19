import PropTypes from 'prop-types';

import { useState } from 'react';

import * as S from './SpoilerToggle.styled';

const SpoilerToggle = ({ forRead = false }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <S.SpoilerToggleWrapper>
      <S.SpoilerToggleLabel>{forRead ? '스포일러 가리기' : '스포일러'}</S.SpoilerToggleLabel>
      <S.SpoilerToggleContainer onClick={toggleSwitch} $isOn={isOn}>
        {isOn && <S.OnOff>ON</S.OnOff>}
        <S.Toggle layout transition={{ type: 'spring', visualDuration: 0.2, bounce: 0.2 }} />
        {!isOn && <S.OnOff>OFF</S.OnOff>}
      </S.SpoilerToggleContainer>
    </S.SpoilerToggleWrapper>
  );
};

SpoilerToggle.propTypes = {
  forRead: PropTypes.bool,
};

export default SpoilerToggle;
