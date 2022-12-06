import React from 'react';
import ReactDOM from 'react-dom';


function Footer(){
  const myStyle = {
    position:'absolute',
    left:'0',
    bottom:'0',
    right:'0',
  
    // backgroundColor: "rgba(0, 0, 0, 0.2)"
  
  }
  
  return (
    <div className="bg-dark text-center text-lg-start">
        <div className="text-center p-3 bg-dark text-light" style={myStyle}>
    © 2020 Copyright:
    <a className="text-light">MDBootstrap.com</a>
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
  
  