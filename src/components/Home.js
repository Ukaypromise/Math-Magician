import React from 'react';
import '../styles/Home.css';

const info = 'ipsum dolor sit amet consectetur, adipisicing elit. Odio error inventore perferendis dolorum rem blanditiis cupiditate impedit cum debitis nobis!';
const Home = () => (
  <div>
    <section className="Home">
      <h1>Welcome to our Page!</h1>
      <p>{info}</p>
      <p>{info}</p>
      <p>{info}</p>
    </section>
    <footer>
      <p className="footer">Designed by Promise Uka</p>
    </footer>
  </div>
);

export default Home;
