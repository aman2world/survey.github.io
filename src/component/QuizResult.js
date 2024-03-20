import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Thankyou Your Feedback submitted
    </div>
    <button id="next-button" onClick={props.tryAgain}>Finish</button>
    </>
  )
}

export default QuizResult