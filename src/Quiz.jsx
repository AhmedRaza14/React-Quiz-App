import React from 'react'
import { useState } from 'react'


const Quiz = (props) => {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)


  const handleNext = () => {
    if (index < props.quizData.length - 1) {
      setIndex(index + 1)
    }
    else {
      alert(`      Quiz completed! Your score is ${score} out of ${props.quizData.length}.
      Performance: ${score / props.quizData.length * 100}%.
      Click OK to restart the quiz.`)
      setIndex(0)
      setScore(0)
    }
  }

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
    else {
      alert(`      You Are On The First Question. There Is Nothing Previous`)
    }
  }

  const checkVal = (e) => {
    if(e.target.value === props.quizData[index].answer){
      setScore(score + 1)
    }
  }
  console.log(score)

  return (
    <div
    
    >
        <h1 style={{color:'black',
          fontFamily:'Arial san-serif'
        }}>Quiz-App React</h1>
        
<div>
  
  
    <div key={index}
    style={{
      margin: '20px',
      width: '400px',
      height: '350px',
      backgroundColor: 'white',
      boxShadow: '3px 3px 30px rgba(47, 44, 44, 0.4)',
      fontFamily: 'arial san-serif',
      fontSize: '19px',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      borderRadius: '15px',
      
      // alignItems: 'center'

    }}
    >
      <h3>{props.quizData[index].question}</h3>

      <ul style={{
        listStyle: 'none',
        marginLeft: '36px',
        textAlign: 'left',

      }}>
        <form action="">

        <li><input required type="radio" onChange={checkVal} value={props.quizData[index].options[0]} name='option'/> {props.quizData[index].options[0]}</li>
        <li><input required type="radio" onChange={checkVal} value={props.quizData[index].options[1]} name='option'/> {props.quizData[index].options[1]}</li>
        <li><input required type="radio" onChange={checkVal} value={props.quizData[index].options[2]} name='option'/> {props.quizData[index].options[2]}</li>
        <li><input required type="radio" onChange={checkVal} value={props.quizData[index].options[3]} name='option'/> {props.quizData[index].options[3]}</li>
        </form>
      </ul>
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px'
      }}
      >

      <button
      style={{
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'blue',
        color: 'white',
        width: '120px',
        marginTop: '30px',
        textAlign: 'center'
        // marginLeft: '46px',
      }}
      onClick={handlePrev}
      >Previous</button>
 
      <button
      style={{
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'green',
        color: 'white',
        width: '120px',
        marginTop: '30px',
        // marginLeft: '46px',
      }}
      onClick={handleNext}
      >Next</button>
      </div>
    </div>




      </div>
    </div>






  )}
export default Quiz