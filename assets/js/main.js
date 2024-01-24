async function getGifs() {
  const searchTerm = document.getElementById("searchTerm").value;
  const gifContainer = document.getElementById("gifContainer");

  try {
      const apiKey = "0F6NP2FGWmToOScFt8CBcMQgHCK53Kll"; // Substitua pela sua chave de API do Giphy
      const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=5`;
      
      const response = await fetch(apiUrl);
      const gifData = await response.json();

      if (response.status === 200) {
          gifContainer.innerHTML = gifData.data.map(gif => `<img src="${gif.images.fixed_width.url}" alt="GIF">`).join('');
      } else {
          gifContainer.innerHTML = `<p>Erro ao obter GIFs.</p>`;
      }
  } catch (error) {
      console.error("Erro ao obter GIFs:", error);
      gifContainer.innerHTML = `<p>Erro ao obter GIFs.</p>`;
  }
}
