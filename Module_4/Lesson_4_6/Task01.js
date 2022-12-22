'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
  const successStudents = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!(arr2.includes(arr1[i]))) {
      successStudents.push(arr1[i]);
    }
  }

  return successStudents;
};

console.log (filter(allStudents, failedStudents));