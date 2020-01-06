import randomNumber from '../random_number';
import run from '..';

const description = 'What number is missing in the progression?';


const getRound = () => {
  const differenceOfNumbers = 3;

  const quantityOfNumbers = 10;

  const firstRandomNumberOfSequence = randomNumber();


  const hiddenRandomNumberOfSequence = randomNumber(1, quantityOfNumbers);

  const preQuestion = () => {
    let result = '';


    for (let i = firstRandomNumberOfSequence;
      i < firstRandomNumberOfSequence + (quantityOfNumbers * differenceOfNumbers);
      i += differenceOfNumbers) {
      if (i === firstRandomNumberOfSequence + ((hiddenRandomNumberOfSequence * differenceOfNumbers)
     - differenceOfNumbers)) {
        result += '..,';
      } else { result += `${i},`; }
    }

    return result.split(',').join('  ');
  };

  const question = preQuestion(firstRandomNumberOfSequence, hiddenRandomNumberOfSequence,
    quantityOfNumbers, differenceOfNumbers);


  const correctAnswer = `${firstRandomNumberOfSequence + ((hiddenRandomNumberOfSequence * differenceOfNumbers)
  - differenceOfNumbers)}`;

  return { correctAnswer, question };
};

export default () => run(description, getRound);
