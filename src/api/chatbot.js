import api from './api';

export const getChatbotKey = async () => {
  try {
    const response = await api.post('/aichat/session');
    // console.log('챗봇 키 응답 데이터:', response);
    return response.data;
  } catch (error) {
    console.error('챗봇 키 데이터 가져오기 실패:', error);
    return null;
  }
};

export const postChatbotMessage = async ({ thread_id, message }) => {
  console.log(message);

  try {
    const response = await api.post('/aichat/chat', { thread_id, message });
    // console.log('챗봇 메시지 응답 데이터:', response);
    return response.data;
  } catch (error) {
    console.error('챗봇 메시지 가져오기 실패:', error);
    return null;
  }
};
