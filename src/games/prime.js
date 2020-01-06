import randomNumber from '../random_number';
import run from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const isPrime = (value) => {
  if (value < 2) {
    return false;
  }
  for (let i = 2; i <= value / 2; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};


const getRound = () => {
  const question = randomNumber();

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { correctAnswer, question };
};

export default () => run(description, getRound);
