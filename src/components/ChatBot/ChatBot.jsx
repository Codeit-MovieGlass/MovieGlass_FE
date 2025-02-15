import { useState } from 'react';
import * as S from './ChatBot.styled';
import { AIButton } from '@icons/AI';
import ChatBox from './ChatBox';
import { getChatbotKey } from '@api/chatbot';

const ChatBot = () => {
  const [openChat, setOpenChat] = useState(false);
  const [chatbotKey, setChatBotKey] = useState('');

  const onClickOpenChat = async () => {
    try {
      const response = await getChatbotKey();
      setChatBotKey(response.result.thread_id);
      console.log(response.result.thread_id);
    } catch (error) {
      console.error('Curation shuffle fetch failed: ', error);
    } finally {
      setOpenChat(true);
    }
  };

  return (
    <S.ChatBotContainer>
      {openChat ? (
        <ChatBox chatbotKey={chatbotKey} setOpenChat={setOpenChat} />
      ) : (
        <AIButton onClick={onClickOpenChat} />
      )}
    </S.ChatBotContainer>
  );
};

export default ChatBot;
