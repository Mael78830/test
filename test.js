window.alert = function() {};

document.addEventListener('DOMContentLoaded', function() {
    const images = document.getElementsByTagName('img');
    while (images.length > 0) {
      images[i].parentNode.removeChild(images[i]);
    }
  });
  
const body = document.querySelector('body');

// Change la couleur de fond du body
body.style.backgroundColor = 'rgb(100, 149, 237)';

// Crée un élément div pour le texte qui défile
const marquee = document.createElement('div');
marquee.style.position = 'absolute';
marquee.style.top = '0';
marquee.style.left = '0';
marquee.style.whiteSpace = 'nowrap';

// Ajoute le texte au marquee
marquee.textContent = 'Le texte qui défile de gauche à droite';

// Ajoute le marquee au body
body.appendChild(marquee);

// Déplace le marquee de gauche à droite
let position = -500;
function move() {
  position++;
  if (position > window.innerWidth) {
    position = -marquee.clientWidth;
  }
  marquee.style.left = position + 'px';
  requestAnimationFrame(move);
}
console.log("Salut");
move();
