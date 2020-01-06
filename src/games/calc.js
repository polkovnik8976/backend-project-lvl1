import randomNumber from '../random_number';
import randomSymbols from '../random_symbols';
import run from '..';

const description = 'What is the result of the expression?';


const answer = (firstRandomNumber, symbols, secondRandomNumber) => {
  if (symbols === '-') {
    return `${firstRandomNumber - secondRandomNumber}`;
  }
  if (symbols === '+') {
    return `${firstRandomNumber + secondRandomNumber}`;
  }

  return `${firstRandomNumber * secondRandomNumber}`;
};


const getRound = () => {
  const firstRandomNumber = randomNumber(1, 50);

  const secondRandomNumber = randomNumber(1, 50);

  const symbols = randomSymbols();

  const question = `${firstRandomNumber} ${symbols} ${secondRandomNumber}`;

  const correctAnswer = answer(firstRandomNumber, symbols, secondRandomNumber);

  return { correctAnswer, question };
};

export default () => run(description, getRound);
