import React from 'react'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'

import './App.css';

function App() {

  const [quiz, setQuiz] = React.useState({
    'started' : false
  })


  function startQuiz(){

    let questions = []
     fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple')
        .then(response => response.json())
        .then(results => questions = results )

      setQuiz({'started':true})
      console.log(questions)

    
  }

  return (
    <div className='container'>
      { ! quiz.started &&  <StartQuiz handleClick={startQuiz} /> }
      { quiz.started &&  <Quiz /> }

      
     
     
    </div>
   
  )
}

export default App;
