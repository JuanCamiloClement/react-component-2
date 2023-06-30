import './App.scss'
import { useState } from 'react';
import Card from './components/Card'
import ThankYou from './components/ThankYou';

function App() {

  const numbers = [1,2,3,4,5];

  const [ rating,setRating ] = useState(0);

  const handleCaptureRating = (value) => setRating(value);

  return (
    <>
      <ThankYou
        rating = { rating }
      />
      <Card 
        numbers = { numbers }
        onCaptureRating = { handleCaptureRating }
      />
    </>
  )
}

export default App