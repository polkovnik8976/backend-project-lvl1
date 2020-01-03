export default () => {
  const randomNumber = Math.floor(Math.random() * Math.floor(3));
  if (randomNumber === 0) {
    return '+';
  }
  if (randomNumber === 1) {
    return '-';
  }
  return '*';
};
