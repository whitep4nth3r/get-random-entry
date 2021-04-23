"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomEntry = getRandomEntry;
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomEntry(array) {
  return array[getRandomInt(0, array.length - 1)];
}