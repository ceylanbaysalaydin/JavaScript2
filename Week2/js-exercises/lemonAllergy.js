{
  const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
  const takeOutLemon = array => {
    const outLemon = array.filter(item => item !== 'Lemon');
    return `My mom bought me a fruit basket, containing ${outLemon.join(', ')}!`;
  };
  console.log(takeOutLemon(fruitBasket));
}
