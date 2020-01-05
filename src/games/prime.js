import randomNumber from '../random_number';
import run from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const answer = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};


const getRound = () => {
  const question = randomNumber(1, 50);
  const correctAnswer = answer(question) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => run(description, getRound);
