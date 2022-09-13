import React from 'react';
import '../styles/Quote.css';

const Qoute = () => {
  const quote = 'Mathematics is not about numbers equations, computations, or algorithms. It is about undersatanding.';
  const author = '-William paul Thurston';
  return (
    <section className="quote-container">
      <p>{quote}</p>
      <span>{author}</span>
    </section>
  );
};

export default Qoute;
