'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function dialog(x, attempt) {
  function question() {
    const a = prompt('Угадай число от 1 до 100');

    if (a == 0 || a === null) {
      alert('Игра окончена.');
    } else if (!isNumber(a)) {
      alert('Введите число');
      question();
    } else if (attempt === 1) {
      let attemptNo = +confirm('Попытки закончились, хотите сыграть еще?');
      attemptNo === 1 ? dialog(57, 10) : alert('Игра окончена.');
    } else if (a < x && attempt > 1) {
      attempt--;
      alert(`Pагаданное число больше, осталось попыток ${attempt}`);
      question();
    } else if (a > x && attempt > 1) {
      attempt--;
      alert(`Загаданное число меньше, осталось попыток ${attempt}`);
      question();
    } else if (a == x && attempt > 1) {
      let win = +confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      win === 1 ? dialog(57, 10) : alert('Игра окончена.');
    }
  }
  question();
}
dialog(57, 10);
