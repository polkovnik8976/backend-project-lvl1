import randomNumber from '../utils';
import run from '..';

const description = 'What is the result of the expression?';

const operators = ['-', '+', '*'];

const makeCalculation = (firstRandomNumber, symbol, secondRandomNumber) => {
  switch (symbol) {
    case '-':
      return `${firstRandomNumber - secondRandomNumber}`;
    case '+':
      return `${firstRandomNumber + secondRandomNumber}`;
    case '*':
      return `${firstRandomNumber * secondRandomNumber}`;
    default:
      return null;
  }
};

const getRound = () => {
  const firstRandomNumber = randomNumber(1, 50);
  const secondRandomNumber = randomNumber(1, 50);
  const symbol = operators[randomNumber(0, operators.length - 1)];
  const question = `${firstRandomNumber} ${symbol} ${secondRandomNumber}`;
  const correctAnswer = makeCalculation(firstRandomNumber, symbol, secondRandomNumber);
  return { correctAnswer, question };
};

export default () => run(description, getRound);
