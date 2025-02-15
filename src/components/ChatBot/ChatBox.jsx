import { useEffect, useRef, useState } from 'react';
import * as S from './ChatBot.styled';
import PropTypes from 'prop-types';
import { AILogo } from '@icons/AI';
import { postChatbotMessage } from '@api/chatbot';
import Loading from '@components/Loading/Loading';

const ChatBox = ({ setOpenChat, chatbotKey }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '안녕하세요! 영화에 관해 궁금한 점이 있다면 언제든지 물어보세요.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    setLoading(true);
    const userMessage = { text: input, sender: 'user' };

    setMessages((prev) => [...prev, userMessage]); // 사용자의 메시지 추가
    setInput('');

    try {
      const response = await postChatbotMessage({ message: input, thread_id: chatbotKey });

      if (response?.result?.message) {
        const botMessage = { text: response.result.message, sender: 'bot' };

        setMessages((prev) => [...prev, botMessage]); // 챗봇 메시지 추가
        console.log(messages);
      } else {
        console.error('잘못된 챗봇 응답:', response);
      }
    } catch (error) {
      console.error('챗봇 메시지 불러오기 실패: ', error);
    } finally {
      setLoading(false);
    }
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
          <S.MessageContainer key={index}>
            {msg.sender === 'bot' && <AILogo />}
            <S.Message $isUser={msg.sender === 'user'}>{msg.text}</S.Message>
          </S.MessageContainer>
        ))}
        {loading && <Loading />}
        <S.ShowCurrentMessage ref={chatEndRef} /> {/* 항상 최신 메시지를 보이게 함 */}
      </S.ChatWindow>
      <S.ChatInputContainer>
        <S.ChatInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="찾고 있는 영화가 있나요?"
          disabled={loading}
        />
        <S.SendButton disabled={loading} onClick={sendMessage}></S.SendButton>
      </S.ChatInputContainer>
    </S.ChatBoxContainer>
  );
};

ChatBox.propTypes = {
  setOpenChat: PropTypes.any.isRequired,
  chatbotKey: PropTypes.any.isRequired,
};

export default ChatBox;
