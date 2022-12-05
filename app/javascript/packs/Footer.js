import React from 'react';
import ReactDOM from 'react-dom';


function Footer(){
  const myStyle = {
    position:'absolute',
left:'0',
bottom:'0',
right:'0',
    backgroundColor: "#010203",
    boxSizing: "border-box",
  fontFamily: 'Poppins', 
  width: "100%",
  paddingtop: "0.1px",
  height: "160px",
  backgroundRepeat: "no-repeat",
  backgroundsize: 'cover',
  backgroundPosition: "center left",
  color: '#FFFFFF',
  display: "flex",
  textAlign: "left",
  justifyContent: "space-around",
  fontWeight: "bold"
  }
  
  return (
    <div>
    <div style={myStyle} className='footer'>
    <h1 className='h'>Skyline School</h1>
    <div>
    <h2 className='i'>Get Started</h2>
    <p>Home</p>
    <p>Register</p>
    <p>Curriculum</p>
    </div>
    <div>
      <h3>About Us</h3>
      <p>Company Information</p>
      <p>Contact Us</p>
      <p>Reviews</p>
    </div>
    <div>
      <h3>Support</h3>
      <p>FAQ</p>
      <p>Help Desk</p>
      <p>Forums</p>
    </div>
    
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
  
  