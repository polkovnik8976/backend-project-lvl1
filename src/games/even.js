import randomNumber from '../random_number';
import run from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;


const getRound = () => {
  const question = randomNumber();

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { correctAnswer, question };
};

export default () => run(description, getRound);
