import React from 'react';
import '../styles/Home.css';

const infos = [
  {
    id: 1,
    text: 'Math Magician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
  },
  {
    id: 2,
    text: 'If you are too methodical, too fearful, you are not going to win. But the clever thing is to make the calculation correctly about where and when to go over the top. You have got to know when to push it and when to come back.',
  },
  {
    id: 3,
    text: 'Common sense is the measure of the possible; it is composed of experience and prevision; it is calculation applied to life.',
  },
];
const Home = () => (
  <div>
    <section className="Home">
      <h1>Welcome to our Page!</h1>
      {infos.map((info) => <p key={info.id}>{info.text}</p>)}
    </section>
  </div>
);

export default Home;
