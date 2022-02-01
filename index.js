import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Titles = ({titles}) => <h1>{titles}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({text, value}) => <div>{text} {value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  const handleBadClick = () => setBad(bad+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  
  const statis = good || neutral || bad ? true : false;

  const allCount = (good || neutral || bad ? (good+neutral+bad) : (0))
  const average = (good || neutral || bad ? (((parseFloat(good-bad)/allCount).toFixed(1))) : (0))
  const positive = (good || neutral || bad ? (((parseFloat(((good/allCount)*100)).toFixed(1)))+'%') : (0))

  return (
    <div>
      <Titles titles='Give Feedback'/>
      <Button handleClick={handleGoodClick} text='Good'/>
      <Button handleClick={handleNeutralClick} text='Neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Titles titles='Statistics'/>
      <div>
        {statis ? 
          (<div>
            <Statistics text='Good:' value={good} /> 
            <Statistics text='Neutral:' value={neutral} /> 
            <Statistics text='Bad:' value={bad} />
            <Statistics text='All:' value={allCount} /> 
            <Statistics text='Average:' value={average} /> 
            <Statistics text='Positive:' value={positive} />  
          </div>)
        : 'No feedback given'}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))