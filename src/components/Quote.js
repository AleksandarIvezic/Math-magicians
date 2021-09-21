import React, { useState, useEffect } from 'react';
import getQuote from '../helpers/getQuote';

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
      <h3>
        {`${quote.quote} - ${quote.author}`}
      </h3>
    </div>
  );
};

export default Quote;
