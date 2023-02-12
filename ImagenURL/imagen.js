
let url = prompt('Ingrese la URL de la imagen en Google Drive');

      let startIndex = -1;
      let endIndex = -1;

      for (let i = 0; i < url.length; i++) {
        if (url.substring(i, i + 2) === 'd/') {
          startIndex = i + 2;
        } else if (url.substring(i, i + 5) === '/view') {
          endIndex = i;
          break;
        }
      }

      let imageId = url.substring(startIndex, endIndex);

      let root = document.getElementById('root');

      let card = document.createElement('div');
      card.classList.add('card');

      let title = document.createElement('h4');
      title.innerHTML = prompt('Ingrese un nombre a la tarjeta');

      let image = document.createElement('img');
      image.src = `https://drive.google.com/uc?export=view&id=${imageId}`;

      card.appendChild(title);
      card.appendChild(image);
      root.appendChild(card);