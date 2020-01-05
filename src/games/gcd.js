import randomNumber from '../random_number';
import run from '..';

const description = 'Find the greatest common divisor of given numbers.';

const answer = (firstRandomNumber, secondRandomNumber) => {
  if (secondRandomNumber === 0) {
    return `${firstRandomNumber}`;
  }
  return answer(secondRandomNumber, firstRandomNumber % secondRandomNumber);
};


const getRound = () => {
  const firstRandomNumber = randomNumber(1, 50);
  const secondRandomNumber = randomNumber(1, 50);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = answer(firstRandomNumber, secondRandomNumber);
  return { correctAnswer, question };
};

export default () => run(description, getRound);
