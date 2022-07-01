import React from 'react'
 
const Result = ({ term , secretNum }) => {
  let result;
  console.log(secretNum);
  console.log(term);
  if(term){
    if(secretNum > term){
      result = 'You guessed Lower !!!'
      console.log(secretNum);
    }
    else if(secretNum < term){
      result ='You guessed Higher !!!'
    }
    else{
      result ='Yippee, guessed it!!!!'
    }
  }
  return <h3 className='rs'>{result}</h3>
}
 
export default Result