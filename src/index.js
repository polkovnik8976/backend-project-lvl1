import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const welcome = 'Welcome to the Brain Games!\n';

const roundsCount = 3;

export default (description, getDataGame) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}!\n`);

  const iter = (round) => {
    if (round > roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const { correctAnswer, question } = getDataGame();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. `);
      console.log(`Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(round + 1);
  };

  return iter(1);
};


export { getUserName, welcome };
