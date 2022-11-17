import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

import './styles/styles.scss';

const form = document.getElementById('form');

form.onsubmit = async event => {
  event.preventDefault();

  const input = form.elements.input;

  alert('Вы отправили запрос на сохранение данных');
  input.value = '';

  await fetch('https://webpack-form-default-rtdb.europe-west1.firebasedatabase.app/data.json', {
    method: 'POST',
    body: JSON.stringify(input.value),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  alert('Ваши данные были сохранены!');
};