import randomNumber from '../utils';
import run from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const preQuestion = (firstRandomNumberOfSequence, hiddenRandomNumberOfSequence,
  length, differenceOfNumbers) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    const numberOfProgress = firstRandomNumberOfSequence + (differenceOfNumbers * i);
    result = i === hiddenRandomNumberOfSequence ? `${result}${'..,'}` : `${result}${numberOfProgress},`;
  }
  return result.split(',').join('  ');
};

const getRound = () => {
  const differenceOfNumbers = randomNumber(1, 17);
  const firstRandomNumberOfSequence = randomNumber();
  const hiddenRandomNumberOfSequence = randomNumber(0, progressionLength - 1);
  const question = preQuestion(firstRandomNumberOfSequence, hiddenRandomNumberOfSequence,
    progressionLength, differenceOfNumbers);
  const correctAnswer = `${firstRandomNumberOfSequence + ((hiddenRandomNumberOfSequence * differenceOfNumbers))}`;
  return { correctAnswer, question };
};

export default () => run(description, getRound);
