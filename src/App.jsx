import './App.scss'
import { useState } from 'react';
import Card from './components/Card'
import ThankYou from './components/ThankYou';

function App() {

  const numbers = [1,2,3,4,5];

  const [ rating,setRating ] = useState(0);

  const [ submit,setSubmit] = useState(false);

  const handleCaptureRating = (value) => {
    setRating(value);
    value === 0 ? submit : setSubmit(!submit);
  }

  return (
    <>
      <article className= { submit ? 'show' : 'no-show'}>
        <ThankYou
          rating = { rating }
        />
      </article>
      <article className= { submit ? 'no-show' : 'show'}>
        <Card 
          numbers = { numbers }
          onCaptureRating = { handleCaptureRating }
        />
      </article>
    </>
  )
}

export default App