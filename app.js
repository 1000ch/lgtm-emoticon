import { documentReady } from 'https://unpkg.com/html-ready';

const template = `:background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background:
:background::foreground::background::background::background::foreground::foreground::foreground::foreground::background::foreground::foreground::foreground::background::foreground::background::background::background::foreground::background:
:background::foreground::background::background::background::foreground::background::background::background::background::background::foreground::background::background::foreground::foreground::background::foreground::foreground::background:
:background::foreground::background::background::background::foreground::background::foreground::foreground::background::background::foreground::background::background::foreground::background::foreground::background::foreground::background:
:background::foreground::background::background::background::foreground::background::background::foreground::background::background::foreground::background::background::foreground::background::background::background::foreground::background:
:background::foreground::foreground::foreground::background::foreground::foreground::foreground::foreground::background::background::foreground::background::background::foreground::background::background::background::foreground::background:
:background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background::background:`;

documentReady.then(() => {
  const foreground = document.querySelector('#foreground');
  const background = document.querySelector('#background');
  const output  = document.querySelector('#output');

  const replace = () => {
    output.value = template
      .replace(/foreground/g, foreground.value)
      .replace(/background/g, background.value);
  };

  foreground.addEventListener('input', replace);
  background.addEventListener('input', replace);

  replace();
});
