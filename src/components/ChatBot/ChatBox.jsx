import { useEffect, useRef, useState } from 'react';
import * as S from './ChatBot.styled';
import PropTypes from 'prop-types';
import { AILogo } from '@icons/AI';

const ChatBox = ({ setOpenChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null); // 스크롤을 위한 ref

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
    setInput('');
  };

  const onClickCloseChat = () => {
    setOpenChat(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 줄 바꿈 방지
      sendMessage();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <S.ChatBoxContainer>
      <S.ChatBoxClose onClick={onClickCloseChat} />
      <S.ChatWindow>
        {messages.map((msg, index) => (
          <>
            {msg.sender === 'bot' && <AILogo />}
            <S.Message key={index} $isUser={msg.sender === 'user'}>
              {msg.text}
            </S.Message>
          </>
        ))}
        <S.ShowCurrentMessage ref={chatEndRef} /> {/* 항상 최신 메시지를 보이게 함 */}
      </S.ChatWindow>
      <S.ChatInputContainer>
        <S.ChatInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="찾고 있는 영화가 있나요?"
        />
        <S.SendButton onClick={sendMessage}>전송</S.SendButton>
      </S.ChatInputContainer>
    </S.ChatBoxContainer>
  );
};

ChatBox.propTypes = {
  setOpenChat: PropTypes.any.isRequired,
};

export default ChatBox;
