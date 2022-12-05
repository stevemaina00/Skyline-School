import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../packs/App.css'

function Footer(){
  const myStyle = {
    backgroundColor: "#454545",
    boxSizing: "border-box",
  fontFamily: 'Poppins', 
  width: "100%",
  paddingtop: "0.1px",
  height: "250px",
  backgroundRepeat: "no-repeat",
  backgroundsize: 'cover',
  backgroundPosition: "center left",
  color: '#FFFFFF',
  display: "flex",
  textAlign: "left",
  justifyContent: "space-around",
  fontWeight: "bold"
  }
  const copy = {
    color: "#FFFFFF",
    marginTop: "-30px",
    marginLeft: "450px",
    fontfamily: 'Poppins',
    fontWeight: "bold"

  }
  return (
    <div>
    <div style={myStyle} className='footer'>
    <h1 className='h'>Gig-Finder</h1>
    <div>
    <h2 className='i'>Get Started</h2>
    <p>Home</p>
    <p>Register</p>
    <p>Job Listings</p>
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
  <p style={copy} className='copy'>@All rights deserved,terms and condition applied.</p>
  </div>
      
  )
}

  document.addEventListener('DOMContentLoaded', () => {
      ReactDOM.render(
        <Footer />,
        document.getElementById('footer'),
      )
      
    })
  
  