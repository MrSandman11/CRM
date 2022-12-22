'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
  const prefixNames = [];

  for (let i = 0; i < arr.length; i++) {
    prefixNames.push(prefix.concat(' ', arr[i]));
  }

  return prefixNames;
};

console.log (addPrefix(names, 'Mr'));