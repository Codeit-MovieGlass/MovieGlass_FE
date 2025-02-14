import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';
import { ChatBotArrow } from '@icons/Arrow';
import { Send } from '@icons/Send';

export const ChatBotContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  right: ${pxToRem(113)};
  bottom: ${pxToRem(113)};
`;

export const ChatBoxContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;

  right: ${pxToRem(113)};
  bottom: ${pxToRem(113)};
  width: fit-content;
  height: fit-content;

  background: black;
  gap: ${pxToRem(32)};
  overflow: auto;

  padding: ${pxToRem(32)};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_5}
`;

export const ChatBoxClose = styled(ChatBotArrow)`
  display: flex;
  margin-left: auto;
`;

export const ShowCurrentMessage = styled.div``;

export const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;

  width: ${pxToRem(400)};
  height: fit-content;
  max-height: ${pxToRem(400)};

  overflow-y: auto;
  padding: ${pxToRem(10)};

  gap: ${pxToRem(8)};

  /* 스크롤 바 스타일 */
  &::-webkit-scrollbar {
    width: ${pxToRem(4)}; /* 스크롤 바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4}; /* 스크롤 바 색상 */
    border-radius: ${pxToRem(2)};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2}; /* 스크롤 바 배경 */
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  max-width: 80%;
  padding: ${pxToRem(10)};
  background: ${({ theme, $isUser }) =>
    $isUser ? theme.colors.MG_Signature.Primary : theme.colors.MG_Grayscale.Gray_5};
  color: ${({ $isUser }) => ($isUser ? 'white' : 'black')};
  border-radius: ${pxToRem(10)};
  align-self: ${({ $isUser }) => ($isUser ? 'flex-end' : 'flex-start')};
  word-wrap: break-word; /* ensures wrapping */
  overflow-wrap: break-word; /* ensures wrapping */
`;

//인풋
export const ChatInputContainer = styled.div`
  border-radius: 8px;
  border: 1.75px solid ${({ theme }) => theme.colors.MG_Signature.Primary_Light};
  background: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
  height: ${pxToRem(64)};
  display: flex;
  align-items: center;
  gap: ${pxToRem(24)};
`;

export const ChatInput = styled.input`
  background: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  flex: 1;
  padding: ${pxToRem(8)};
  border: none;
  outline: none;
`;

export const SendButton = styled(Send)`
  color: white;
  border: none;
  padding: ${pxToRem(8)} ${pxToRem(12)};
  cursor: pointer;
`;
