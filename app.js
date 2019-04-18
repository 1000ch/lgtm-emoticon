const template = {
  "a": [
      [true, true, true],
      [true, false, true],
      [true, true, true],
      [true, false, true],
      [true, false, true]
  ],
  "b": [
      [true, true, true, true],
      [true, false, false, true],
      [true, true, true, false],
      [true, false, false, true],
      [true, true, true, true]
  ],
  "c": [
      [true, true, true],
      [true, false, false],
      [true, false, false],
      [true, false, false],
      [true, true, true]
  ],
  "d": [
      [true, true, true, false],
      [true, false, false, true],
      [true, false, false, true],
      [true, false, false, true],
      [true, true, true, false]
  ],
  "e": [
      [true, true, true, true],
      [true, false, false, false],
      [true, true, true, false],
      [true, false, false, false],
      [true, true, true, true]
  ],
  "f": [
      [true, true, true, true],
      [true, false, false, false],
      [true, true, true, false],
      [true, false, false, false],
      [true, false, false, false]
  ],
  "g": [
    [true, true, true, true],
    [true, false, false, false],
    [true, false, true, true],
    [true, false, false, true],
    [true, true, true, true]
  ],
  "h": [
    [true, false, false, true],
    [true, false, false, true],
    [true, true, true, true],
    [true, false, false, true],
    [true, false, false, true]
  ],
  "i": [
    [ true ],
    [ true ],
    [ true ],
    [ true ],
    [ true ]
  ],
  "j": [
    [false, false, true],
    [false, false, true],
    [false, false, true],
    [true, false, true],
    [true, true, true]
  ],
  "k": [
    [true, false, false, true],
    [true, false, true, false],
    [true, true, false, false],
    [true, false, true, false],
    [true, false, false, true]
  ],
  "l": [
    [true, false, false],
    [true, false, false],
    [true, false, false],
    [true, false, false],
    [true, true, true]
  ],
  "m": [
    [true, false, false, false, true],
    [true, true, false, true, true],
    [true, false, true, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true]
  ],
  "n": [
    [true, false, false, false, true],
    [true, true, false, false, true],
    [true, false, true, false, true],
    [true, false, false, true, true],
    [true, false, false, false, true]
  ],
  "o": [
    [true, true, true],
    [true, false, true],
    [true, false, true],
    [true, false, true],
    [true, true, true]
  ],
  "p": [
    [true, true, true],
    [true, false, true],
    [true, true, true],
    [true, false, false],
    [true, false, false]
  ],
  "q": [
    [true, true, true, false],
    [true, false, true, false],
    [true, false, true, false],
    [true, false, true, false],
    [true, true, true, true]
  ],
  "r": [
    [true, true, true, false],
    [true, false, false, true],
    [true, true, true, false],
    [true, false, false, true],
    [true, false, false, true]
  ],
  "s": [
    [true, true, true, true],
    [true, false, false, false],
    [true, true, true, true],
    [false, false, false, true],
    [true, true, true, true]
  ],
  "t": [
    [true, true, true],
    [false, true, false],
    [false, true, false],
    [false, true, false],
    [false, true, false],
  ],
  "u": [
    [true, false, true],
    [true, false, true],
    [true, false, true],
    [true, false, true],
    [true, true, true]
  ],
  "v": [
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, false, true, false],
    [false, false, true, false, false]
  ],
  "w": [
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, true, false, true],
    [true, true, false, true, true],
    [true, false, false, false, true]
  ],
  "x": [
    [true, false, false, false, true],
    [false, true, false, true, false],
    [false, false, true, false, false],
    [false, true, false, true, false],
    [true, false, false, false, true]
  ],
  "y": [
    [true, false, false, false, true],
    [false, true, false, true, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false]
  ],
  "z": [
    [true, true, true, true, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
    [true, true, true, true, true]
  ]
};

window.onload = e => {
  const word = document.querySelector('#word');
  const foreground = document.querySelector('#foreground');
  const background = document.querySelector('#background');
  const output  = document.querySelector('#output');
  const alert  = document.querySelector('#alert');

  let matrix = [];

  const reset = () => {
    alert.textContent = '';
    buildMatrix();
    replace();
  }

  const buildMatrix = () => {
    matrix = [];
    matrix.push(
      [false],
      [false],
      [false],
      [false],
      [false],
      [false],
      [false]
    );

    if (word.value) {
      word.value.split('').forEach(char => {
        const letter = template[char.toLowerCase()];
        let fill = [];
    
        if (letter) {
          for(let i = 0; i < letter[0].length; i++) {
            fill.push(false);
          }
          matrix[0].push(...fill);
          for(let row in letter) {
            matrix[Number(row) + 1].push(...letter[Number(row)]);
          }
          matrix[6].push(...fill);
          matrix.forEach((row) => row.push(false));
        } else {
          alert.textContent = '(Oops! That character is not supported!)';
          matrix = [];
        }
      });
    } else {
      matrix = [];
    }
  }
  
  const replace = () => {
    let text = '';
    matrix.forEach(row => {
      row.forEach(item => {
        item ? text += `:${foreground.value}:` : text += `:${background.value}:`;
      });
      text += '\n';
    });

    output.value = text;
  };


  word.addEventListener('input', reset);
  foreground.addEventListener('input', replace);
  background.addEventListener('input', replace);

  reset();
};

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('service-worker.js', {
    scope: location.pathname
  }).catch(error => console.error(error));
}
