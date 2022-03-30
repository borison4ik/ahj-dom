import goblin from '../img/goblin.png';

window.onload = () => {
  const AREA = document.querySelector('.area');
  const SIZE = 4;
  const SPEED = 500;
  let RND = 0;
  let IMG_FACE = null;
  let CELL = null;

  drowMap();
  animate();

  // drow map
  function drowMap() {
    for (let i = 0; i < SIZE ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.id = i;
      AREA.appendChild(cell);
    }
  }
  // drow Image
  function drowImage() {
    if(CELL) CELL.innerHTML = '';
    IMG_FACE = new Image();
    IMG_FACE.src = goblin;
    RND = generateRandomNumber();
    CELL = AREA.querySelector(`[data-id="${RND}"]`);
    CELL.insertAdjacentElement('afterbegin', IMG_FACE);
  }
  // generate random number
  function generateRandomNumber() {
    let number = Math.floor(Math.random() * SIZE ** 2);
    if(number === RND) {
      do {
        number = Math.floor(Math.random() * SIZE ** 2);
      } while (number === RND);
    }
    return number;
  }
  // animate
  function animate() {
    setTimeout(() => {
      drowImage();
      animate();
    }, SPEED);
  }
};
