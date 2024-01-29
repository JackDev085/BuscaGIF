addEventListener('keydown' ,e =>{
    if(e.key==='Enter'){
        getGifs()
    }
});
async function getGifs() {
  const searchTerm = document.getElementById("searchTerm").value;
  const gifContainer = document.getElementById("gifContainer");

  try {
      const apiKey = "0F6NP2FGWmToOScFt8CBcMQgHCK53Kll"; // Substitua pela sua chave de API do Giphy
      const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`;
      
      const response = await fetch(apiUrl);
      const gifData = await response.json();
      console.log(gifData.data[0].url)

      if (response.status === 200) {
          gifContainer.innerHTML = gifData.data.map((gif,i) => `<div class="card"> <a href="${gifData.data[i].url}" target="_blank"><img src="${gif.images.fixed_width.url}" alt="GIF"></a></div>`).join('');
      } else {
          gifContainer.innerHTML = `<p>Erro ao obter GIFs.</p>`;
      }
  } catch (error) {
      console.error("Erro ao obter GIFs:", error);
      gifContainer.innerHTML = `<p>Erro ao obter GIFs.</p>`;
  }
}
