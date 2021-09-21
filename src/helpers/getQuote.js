const getQuote = async () => {
  const request = await fetch('https://random-math-quote-api.herokuapp.com/');
  const result = await request.json();
  return result;
};

export default getQuote;
