import React from 'react';
import ReactDOM from 'react-dom';


function Footer(){
  const myStyle = {
  
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  
  }
  
  return (
    <div className="bg-dark text-center text-lg-start">
        <div className="text-center p-3" style={myStyle}>
    © 2020 Copyright:
    <a className="text-dark">MDBootstrap.com</a>
  </div>

    </div>

      
  )
}

  document.addEventListener('DOMContentLoaded', () => {
      ReactDOM.render(
        <Footer />,
        document.getElementById('footer'),
      )
      
    })
  
  