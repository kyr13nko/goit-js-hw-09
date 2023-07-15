const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

const BGCOLOR_CHANGE_KEY = 1000;
let timerId = null;

refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, BGCOLOR_CHANGE_KEY);

  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function onBtnStopClick() {
  clearInterval(timerId);

  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
