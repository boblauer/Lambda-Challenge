function helloWorld() {
  return 'Hello World!';
}

function lambdaSchool(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'Lambda School';
  if (num % 3 === 0) return 'Lambda';
  if (num % 5 === 0) return 'School';
  return num;
}

function longestString(strs) {
  return strs.reduce((longestSoFar, s) => {
    if (s.length > longestSoFar.length) {
      return s;
    }

    return longestSoFar;
  }, '');
}

function computeUserAverageAge(users) {
  const agesSummed = users.reduce((runningTotal, user) => {
    return runningTotal + user.age;
  }, 0);

  return Math.round(agesSummed / users.length);
}

module.exports = {
  helloWorld,
  lambdaSchool,
  longestString,
  computeUserAverageAge,
};