'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      let userAnswer = prompt('Камень, ножницы, бумага?');
      if (!(userAnswer === null)) {
        let computerAnswer = getRandomIntInclusive(1, 3);
        switch (computerAnswer) {
          case 1:
            computerAnswer = 'камень';
            break;
          case 2:
            computerAnswer = 'ножницы';
            break;
          case 3:
            computerAnswer = 'бумага';
            break;
        }
        let gameResult;

        const userAnswerCheck = FIGURES_RUS.filter(item =>
          item.startsWith(userAnswer.toLowerCase()));
        if (userAnswerCheck.length === 0) {
          start();
        } else {
          if (userAnswerCheck[0] === 'камень') {
            switch (computerAnswer) {
              case 'камень':
                gameResult = 'Ничья';
                break;
              case 'ножницы':
                gameResult = 'Вы выиграли';
                result.player += 1;
                break;
              case 'бумага':
                gameResult = 'Компьютер выиграл';
                result.computer += 1;
                break;
            }
            alert(`Компьютер: ${computerAnswer} \nВы: ${userAnswerCheck[0]} \n${gameResult}`);
            start();
          } else {
            if (userAnswerCheck[0] === 'ножницы') {
              switch (computerAnswer) {
                case 'камень':
                  gameResult = 'Компьютер выиграл';
                  result.computer += 1;
                  break;
                case 'ножницы':
                  gameResult = 'Ничья';
                  break;
                case 'бумага':
                  gameResult = 'Вы выиграли';
                  result.player += 1;
                  break;
              }
              alert(`Компьютер: ${computerAnswer} \nВы: ${userAnswerCheck[0]} \n${gameResult}`);
              start();
            } else {
              if (userAnswerCheck[0] === 'бумага') {
                switch (computerAnswer) {
                  case 'камень':
                    gameResult = 'Вы выиграли';
                    result.player += 1;
                    break;
                  case 'ножницы':
                    gameResult = 'Компьютер выиграл';
                    result.computer += 1;
                    break;
                  case 'бумага':
                    gameResult = 'Ничья';
                    break;
                }
                alert(`Компьютер: ${computerAnswer} \nВы: ${userAnswerCheck[0]} \n${gameResult}`);
                start();
              }
            }
          }
        }
      } else {
        userAnswer = confirm('Вы точно хотите выйти?');
        if (userAnswer === true) {
          alert(`Результат: \nВы: ${result.player} \nКомпьютер: ${result.computer}`);
        } else {
          start();
        }
      }
    };
  };
  window.rps = game;
})();
