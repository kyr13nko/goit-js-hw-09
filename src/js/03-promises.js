import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const { delay, step, amount } = event.currentTarget.elements;

  if (delay.value < 0 && delay.value) {
    // alert('❌ The field value must be a positive number or 0');
    Notiflix.Notify.failure(
      '❌ The field value must be a positive number or 0'
    );
    delay.value = 0;
  }

  if (step.value < 0 && step.value) {
    // alert('❌ The field value must be a positive number or 0');
    Notiflix.Notify.failure(
      '❌ The field value must be a positive number or 0'
    );
    step.value = 0;
  }

  if (amount.value <= 0 && amount.value) {
    // alert('❌ The field value must be a positive number');
    Notiflix.Notify.failure('❌ The field value must be a positive number');
    amount.value = 1;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.target.elements;

  let currentDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    currentDelay += Number(step.value);
  }

  event.target.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
