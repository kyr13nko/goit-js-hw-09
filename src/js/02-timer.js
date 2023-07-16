import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('button[data-start]');
const input = document.querySelector('input[type="text"]');
// const days = document.querySelector('span[data-days]');
// const hours = document.querySelector('span[data-hours]');
// const minutes = document.querySelector('span[data-minutes]');
// const seconds = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      btnStart.disabled = true;
      window.alert('Please choose a date in the future');
      return;
    }
    btnStart.disabled = false;
  },
};

btnStart.disabled = true;
btnStart.addEventListener('click', onBtnStartClick);

flatpickr('input#datetime-picker', options);

function onBtnStartClick() {
  btnStart.disabled = true;
  input.disabled = true;

  const targetDate = new Date('10/26/2023');

  setInterval(() => {
    const currentDate = Date.now();
    const testDate = targetDate - currentDate;
    console.log(convertMs(testDate).days);
    console.log(convertMs(testDate).hours);
    console.log(convertMs(testDate).minutes);
    console.log(convertMs(testDate).seconds);
  }, 1000);
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

// days.textContent = ``;
// hours.textContent = ``;
// minutes.textContent = ``;
// seconds.textContent = ``;
