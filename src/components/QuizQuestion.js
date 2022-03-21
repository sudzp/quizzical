import React from "react";

export  default function QuizQuestion(){

    return(
        <div className='quiz-question'>
                <p>How would one say goodbye in Spanish?</p>
                <div className='quiz-answers'>
                   <div> <span>adios</span></div>
                   <div> <span>adios</span></div>
                   <div className='selected'> <span >adios</span></div>
                   <div> <span>adios</span></div>
                </div>
        </div>
    )
}