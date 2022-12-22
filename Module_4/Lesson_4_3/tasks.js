'use strict';

const rain = Math.round(Math.random());

if (rain === 1) {
  console.log("Пошёл дождь. Возьмите зонт!");
} else {
  console.log("Дождя нет!");
}



const mathem = +prompt("Введите кол-во баллов по математике");
const russian = +prompt("Введите кол-во баллов по русскому языку");
const inform = +prompt("Введите кол-во баллов по информатике");

const summary = mathem + russian + inform;

if (summary >= 265) {
  console.log("Поздравляю, вы поступили на бюджет!");
} else {
  console.log("К сожалению, вы не поступили");
}



const money = +prompt("Сколько вы хотите снять денег?");

if ((money % 100) > 0) {
  console.log("Банкомат может выдать только сумму кратную 100. Попробуйте снова.");
}