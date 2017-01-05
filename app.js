const darkTemplate = `:black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:
:black_large_square::squirrel::black_large_square::black_large_square::black_large_square::squirrel::squirrel::squirrel::squirrel::black_large_square::squirrel::squirrel::squirrel::black_large_square::squirrel::black_large_square::black_large_square::black_large_square::squirrel::black_large_square:
:black_large_square::squirrel::black_large_square::black_large_square::black_large_square::squirrel::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::squirrel::black_large_square::black_large_square::squirrel::squirrel::black_large_square::squirrel::squirrel::black_large_square:
:black_large_square::squirrel::black_large_square::black_large_square::black_large_square::squirrel::black_large_square::squirrel::squirrel::black_large_square::black_large_square::squirrel::black_large_square::black_large_square::squirrel::black_large_square::squirrel::black_large_square::squirrel::black_large_square:
:black_large_square::squirrel::black_large_square::black_large_square::black_large_square::squirrel::black_large_square::black_large_square::squirrel::black_large_square::black_large_square::squirrel::black_large_square::black_large_square::squirrel::black_large_square::black_large_square::black_large_square::squirrel::black_large_square:
:black_large_square::squirrel::squirrel::squirrel::black_large_square::squirrel::squirrel::squirrel::squirrel::black_large_square::black_large_square::squirrel::black_large_square::black_large_square::squirrel::black_large_square::black_large_square::black_large_square::squirrel::black_large_square:
:black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:`;
const lightTemplate = `:white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:
:white_large_square::squirrel::white_large_square::white_large_square::white_large_square::squirrel::squirrel::squirrel::squirrel::white_large_square::squirrel::squirrel::squirrel::white_large_square::squirrel::white_large_square::white_large_square::white_large_square::squirrel::white_large_square:
:white_large_square::squirrel::white_large_square::white_large_square::white_large_square::squirrel::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::squirrel::white_large_square::white_large_square::squirrel::squirrel::white_large_square::squirrel::squirrel::white_large_square:
:white_large_square::squirrel::white_large_square::white_large_square::white_large_square::squirrel::white_large_square::squirrel::squirrel::white_large_square::white_large_square::squirrel::white_large_square::white_large_square::squirrel::white_large_square::squirrel::white_large_square::squirrel::white_large_square:
:white_large_square::squirrel::white_large_square::white_large_square::white_large_square::squirrel::white_large_square::white_large_square::squirrel::white_large_square::white_large_square::squirrel::white_large_square::white_large_square::squirrel::white_large_square::white_large_square::white_large_square::squirrel::white_large_square:
:white_large_square::squirrel::squirrel::squirrel::white_large_square::squirrel::squirrel::squirrel::squirrel::white_large_square::white_large_square::squirrel::white_large_square::white_large_square::squirrel::white_large_square::white_large_square::white_large_square::squirrel::white_large_square:
:white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:`;

const replaceDark = emociton => darkTemplate.replace(/squirrel/g, emociton);
const replaceLight = emociton => lightTemplate.replace(/squirrel/g, emociton);

window.onload = e => {
  const emoticonInput  = document.querySelector('#emoticon-input');
  const darkOutput = document.querySelector('#dark-output');
  const lightOutput = document.querySelector('#light-output');

  darkOutput.value = darkTemplate;
  lightOutput.value = lightTemplate;
  emoticonInput.addEventListener('input', e => {
    darkOutput.value = replaceDark(emoticonInput.value);
    lightOutput.value = replaceLight(emoticonInput.value);
  });
};

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('service-worker.js', {
    scope: '/lgtm-emoticon/'
  }).catch(error => console.error(error));
}
