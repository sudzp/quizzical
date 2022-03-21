import React from 'react'
import QuizQuestion from './QuizQuestion'
function Quiz(){
    return (
        <div className="quiz">

           
            <QuizQuestion />
            <QuizQuestion />
            <QuizQuestion />
            <QuizQuestion />
            <QuizQuestion />
            

            

            <div className='check-answer'>
                <div>Check Answer</div> 
            </div>
        </div>
    )
}

export default Quiz