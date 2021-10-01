import { useState } from 'react';
import './App.css';
import CardSection from './components/cards';
import Footer from './components/footer/index.js';
import Header from './components/Header';
import Hero from './components/Hero';
import QuestionSection from './components/questionSection';
import Stats from './components/stats';
import caicon from './icons/ca.svg';
import usicon from './icons/us.svg';
function App() {
  const [country,setCountry] = useState(0);
  const countries=[
      {
          img:usicon,
          name:"US",
          fullname:"United States"
      },
      {
          img:caicon,
          name:"CA",
          fullname:"Canada"
      }
  ]
  return (
    <div>
      <Header country={country} countries={countries} setCountry={setCountry} />
      <Hero country={country} countries={countries} setCountry={setCountry} />
      <CardSection />
      <Stats />
      <QuestionSection />
      <Footer />
    </div>
  );
}

export default App;
