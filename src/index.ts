function getRandomInt(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

export function getRandomEntry<A extends Array<any>>(array: A): A[number] {
  return array[getRandomInt(0, array.length - 1)];
}
