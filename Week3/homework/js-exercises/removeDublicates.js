{
  const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
  function removeDuplicates(array) {
    const uniqueLetters = Array.from(new Set(array));
    array.length = 0;
    uniqueLetters.forEach(item => {
      array.push(item);
    });
    return array;
  }
  removeDuplicates(letters);
  console.log(letters);
  //The function should remove duplicate letters. So the result should be:
  //letters === ['a', 'b', 'c', 'd', 'e', 'f'];
}
