fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  .then(response => response.json())
  .then(data => {
    data.forEach(cat => {
      document.write(`<img src='${cat.url}' width='200'/> <br />`);
    });
  })
  .catch(error => console.error('Ocorreu um erro:', error));
