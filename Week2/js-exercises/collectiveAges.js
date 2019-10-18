{
  const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];
  const add = (a, b) => a + b;
  function collectiveAges(array, callback) {
    const ages = array.map(item => item.age);
    const collectiveAge = ages.reduce(callback);
    console.log(`The collective age of the HYF team is: ${collectiveAge}`);
    return collectiveAge;
  }
  const result = collectiveAges(hackYourFutureMembers, add);
  console.log(result);
}
