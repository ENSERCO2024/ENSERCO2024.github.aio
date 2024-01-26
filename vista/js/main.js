document.addEventListener('DOMContentLoaded', function () {
  let key = '6dca470d89204a7bb94f62de64198ac6';
  let pais = 'es';
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=6dca470d89204a7bb94f62de64198ac6`;
  let noticiasContainer = document.getElementById("noticias-container");
  let noticiaDestacadaContainer = document.getElementById("noticia-destacada");

  fetch(url)
      .then(respuesta => respuesta.json())
      .then(datos => {
          console.log(datos);
          let primeraNoticia = datos.articles[0];
          if (primeraNoticia && primeraNoticia.urlToImage) {
              let noticiaHTML = `<div>
                                  <img style="max-width:800px" src="${primeraNoticia.urlToImage.replace(/^http:/, 'https:')}"><br>
                                  <h1>${primeraNoticia.title}</h1>
                                  <h2>${primeraNoticia.description}</h2>
                                  <h3>${primeraNoticia.url}</h3>
                                  </div>`;
              // Inserta la noticia directamente en el contenedor específico
              noticiaDestacadaContainer.innerHTML = noticiaHTML;
          }
      })
      .catch(error => {
          console.error('Error al realizar la solicitud:', error);
      });
});