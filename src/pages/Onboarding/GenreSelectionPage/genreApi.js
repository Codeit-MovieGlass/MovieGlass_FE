/*장르 데이터 백엔드 연동 추후에 수정

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
      return data; 
    } catch (error) {
      console.error("Error sending genres to backend:", error);
      throw error; 
    }
  };*/
  