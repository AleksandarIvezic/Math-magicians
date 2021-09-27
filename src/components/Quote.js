import React, { useState, useEffect } from 'react';
import getQuote from '../helpers/getQuote';
import '../style/Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const getData = async () => {
    const data = await getQuote();
    setQuote(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="quoteContainer">
      <h2>
        {quote.quote ? `${quote.quote} - ${quote.author}` : 'Loading...'}
      </h2>
    </div>
  );
};

export default Quote;
