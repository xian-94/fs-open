import { useState } from 'react'
import Feedback from './Feedback'
import Statistics from './Statistics'

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  return (
    <div>
      <Feedback onGoodClick={handleGoodClick} onBadClick={handleBadClick} onNeutralClick={handleNeutralClick}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
