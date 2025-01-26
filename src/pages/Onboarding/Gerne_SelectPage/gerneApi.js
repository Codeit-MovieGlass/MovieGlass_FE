export const sendGenresToBackend = async (selectedGenres) => {
    try {
      const response = await fetch("http://your-backend-url/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ genres: selectedGenres }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }
  
      const data = await response.json();
      return data; // 추천 데이터를 반환
    } catch (error) {
      console.error("Error sending genres to backend:", error);
      throw error; // 에러를 호출한 곳으로 전달
    }
  };
  