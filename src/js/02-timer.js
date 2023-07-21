import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const input = document.querySelector('input[type="text"]');

const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const btnStart = document.querySelector('button[data-start]');
btnStart.addEventListener('click', onBtnStartClick);
btnStart.disabled = true;

let targetDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      btnStart.disabled = true;
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    btnStart.disabled = false;
    targetDate = fp.selectedDates[0];
    Notiflix.Notify.success('A date selected successfully');
  },
};

const fp = flatpickr(input, options);

function makeTimer() {
  const intervalID = setInterval(() => {
    const currentDate = Date.now();
    const timerDate = targetDate - currentDate;

    days.textContent = addLeadingZero(convertMs(timerDate).days);
    hours.textContent = addLeadingZero(convertMs(timerDate).hours);
    minutes.textContent = addLeadingZero(convertMs(timerDate).minutes);
    seconds.textContent = addLeadingZero(convertMs(timerDate).seconds);

    if (timerDate < 1000) {
      clearInterval(intervalID);

      input.disabled = false;
      Notiflix.Notify.success("Time's up");
    }
  }, 1000);
}

function onBtnStartClick() {
  btnStart.disabled = true;
  input.disabled = true;
  makeTimer();
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
