import React from 'react'


export default function StartQuiz(props){
    return (
       
            <div className='intro-content'>
                
                <h1 className='title'>Quizzical</h1>
                <div className='description'>Quiz App Built in React</div>
                <div className='btn-container' >
                    <button 
                        className='btn-start-quiz'
                        onClick={props.handleClick}
                        >Start Quiz</button>
                </div>
            </div>
    )
}