import readlineSync from 'readline-sync';


const roundsCount = 3;

export default (description, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const { correctAnswer, question } = getDataGame();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. `);
      console.log(`Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
