import React from 'react';
import ReactDOM from 'react-dom';

function Timer() {
  
  const currentTime = new Date().getHours();
  let greetingText = "";
  const current = new Date();
             // By default US English uses 12hr time with AM/PM
const time = current.toLocaleTimeString("en-US");
  if (currentTime < 12) {
    greetingText = "Good Morning:The time now is " + time; 
  } else if (currentTime < 18) {
    greetingText = "Good Afternoon:The time now is " + time; 
  } else {
    greetingText = "Good Evening:The time now is " + time; 
  }
  return (
   <div>
    <h1 style={{fontSize:'LARGE'}}>

   {greetingText}   
    </h1>
   </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Timer />,
      document.getElementById('timer'),
    )
  })
