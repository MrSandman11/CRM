'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const marble = () => {
    const result = {
      player: 5,
      computer: 5,
    };

    const youWon = (userAnswer, computerAnswer) => {
      alert(`Вы выиграли раунд \nВы загадали ${userAnswer} \nКомпьютер выбрал: ${computerAnswer} \nКоличество шариков: \nИгрок: ${result.player} \nКомпьютер: ${result.computer}`);
    };

    const youLose = (userAnswer, computerAnswer) => {
      alert(`Вы проиграли раунд \nВы загадали ${userAnswer} \nКомпьютер выбрал: ${computerAnswer} \nКоличество шариков: \nИгрок: ${result.player} \nКомпьютер: ${result.computer}`);
    };

    return function startGame() {
      let oneMoreGame;

      const oneMoreGameStart = () => {
        if (oneMoreGame === true) {
          result.computer = 5;
          result.player = 5;
          startGame();
        }
      };

      const startCompTurn = () => {
        let userAnswer = confirm(`Количество шариков: \nИгрок: ${result.player} \nКомпьютер: ${result.computer} \nКомпьютер загадал число. \nЧисло четное?`);
        switch (userAnswer) {
          case true:
            userAnswer = 'чет';
            break;
          case false:
            userAnswer = 'нечет';
            break;
        }
        let computerAnswer = getRandomIntInclusive(1, result.computer);
        let computerAnswerParity;
        if (computerAnswer % 2) {
          computerAnswerParity = 'нечет';
        } else {
          computerAnswerParity = 'чет';
        }
        if (computerAnswerParity === userAnswer) {
          result.player += computerAnswer;
          result.computer -= computerAnswer;
          if (result.player > 10) {
            result.computer = 0;
            result.player = 10;
          }
          youWon(userAnswer, computerAnswer);
        } else {
          result.player -= computerAnswer;
          result.computer += computerAnswer;
          if (result.computer > 10) {
            result.computer = 10;
            result.player = 0;
          }
          youLose(userAnswer, computerAnswer);
        }
        if (result.player >= 10) {
          oneMoreGame = confirm('Вы забрали все шарики у компьютера и выиграли \nСыграем еще разок?');
          oneMoreGameStart();
        } else {
          if (result.computer >= 10) {
            oneMoreGame = confirm('Компьютер забрал у вас все шарики и выиграл \nСыграем еще разок?');
            oneMoreGameStart();
          } else {
            startUserTurn();
          }
        }
      };

      const startUserTurn = () => {
        let userAnswer = +prompt(`Количество шариков: \nИгрок: ${result.player} \nКомпьютер: ${result.computer} \nЗагадайте число от 1 до ${result.player}`);
        let computerAnswer = getRandomIntInclusive(1, 2);
        switch (computerAnswer) {
          case 1:
            computerAnswer = 'чет';
            break;
          case 2:
            computerAnswer = 'нечет';
            break;
        }
        let userAnswerParity;
        if (userAnswer % 2) {
          userAnswerParity = 'нечет';
        } else {
          userAnswerParity = 'чет';
        }
        if (computerAnswer === userAnswerParity) {
          result.player -= userAnswer;
          result.computer += userAnswer;
          if (result.computer > 10) {
            result.computer = 10;
            result.player = 0;
          }
          youLose(userAnswer, computerAnswer);
        } else {
          result.player += userAnswer;
          result.computer -= userAnswer;
          if (result.player > 10) {
            result.computer = 0;
            result.player = 10;
          }
          youWon(userAnswer, computerAnswer);
        }
        if (result.player >= 10) {
          oneMoreGame = confirm('Вы забрали все шарики у компьютера и выиграли \nСыграем еще разок?');
          oneMoreGameStart();
        } else {
          if (result.computer >= 10) {
            oneMoreGame = confirm('Компьютер забрал у вас все шарики и выиграл \nСыграем еще разок?');
            oneMoreGameStart();
          } else {
            startCompTurn();
          }
        }
      };

      const rps = () => {
        let userAnswer = prompt('Для определения первого хода в игре "Марблы" сыграем в "Камень, ножницы, бумага?"');
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

          const gameResultCheck = () => {
            alert(`Компьютер: ${computerAnswer} \nВы: ${userAnswerCheck[0]} \n${gameResult}`);
            switch (gameResult) {
              case 'Ничья':
                rps();
                break;
              case 'Вы выиграли':
                startUserTurn();
                break;
              case 'Компьютер выиграл':
                startCompTurn();
                break;
            }
          };

          const userAnswerCheck = FIGURES_RUS.filter(item =>
            item.startsWith(userAnswer.toLowerCase()));
          if (userAnswerCheck.length === 0) {
            rps();
          } else {
            if (userAnswerCheck[0] === 'камень') {
              switch (computerAnswer) {
                case 'камень':
                  gameResult = 'Ничья';
                  break;
                case 'ножницы':
                  gameResult = 'Вы выиграли';
                  break;
                case 'бумага':
                  gameResult = 'Компьютер выиграл';
                  break;
              }
              gameResultCheck();
            } else {
              if (userAnswerCheck[0] === 'ножницы') {
                switch (computerAnswer) {
                  case 'камень':
                    gameResult = 'Компьютер выиграл';
                    break;
                  case 'ножницы':
                    gameResult = 'Ничья';
                    break;
                  case 'бумага':
                    gameResult = 'Вы выиграли';
                    break;
                }
                gameResultCheck();
              } else {
                if (userAnswerCheck[0] === 'бумага') {
                  switch (computerAnswer) {
                    case 'камень':
                      gameResult = 'Вы выиграли';
                      break;
                    case 'ножницы':
                      gameResult = 'Компьютер выиграл';
                      break;
                    case 'бумага':
                      gameResult = 'Ничья';
                      break;
                  }
                  gameResultCheck();
                }
              }
            }
          }
        } else {
          userAnswer = confirm('Вы точно хотите выйти?');
          if (!(userAnswer === true)) {
            rps();
          }
        }
      };

      rps();
    };
  };

  window.game = marble;
})();
