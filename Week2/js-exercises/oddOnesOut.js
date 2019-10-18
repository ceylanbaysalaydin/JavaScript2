{
  // function doubleEvenNumbers(numbers) {
  //   const newNumbers = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     if (numbers[i] % 2 === 0) {
  //       newNumbers.push(numbers[i] * 2);
  //     }
  //   }
  //   return newNumbers;
  // }
  // const myNumbers = [1, 2, 3, 4];
  // console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console
}
{
  // Let's rewrite it.
  // Using the map and filter functions, rewrite the doubleEvenNumbers function.
}
{
  function doubleEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(item => item % 2 === 0);
    const doubleEven = evenNumbers.map(item => item * 2);
    return doubleEven;
  }
  const myNumbers = [1, 2, 3, 4];
  console.log(doubleEvenNumbers(myNumbers));
}
