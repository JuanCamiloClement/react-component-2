import './App.scss'
import Card from './components/Card'
import ThankYou from './components/ThankYou';

function App() {

  const numbers = [1,2,3,4,5];

  return (
    <>
      <ThankYou />
      <Card 
        numbers = { numbers }
      />
    </>
  )
}

export default App