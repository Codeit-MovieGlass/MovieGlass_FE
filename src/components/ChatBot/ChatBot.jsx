import { useState } from 'react';
import * as S from './ChatBot.styled';
import { AIButton } from '@icons/AI';
import ChatBox from './ChatBox';

const ChatBot = () => {
  const [openChat, setOpenChat] = useState(false);

  const onClickOpenChat = () => {
    setOpenChat(true);
  };

  return (
    <S.ChatBotContainer>
      {openChat ? <ChatBox setOpenChat={setOpenChat} /> : <AIButton onClick={onClickOpenChat} />}
    </S.ChatBotContainer>
  );
};

export default ChatBot;
