import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
    return(
        <div>
         <h1>
         <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
         </h1>
        </div>
    )}

  document.addEventListener('DOMContentLoaded', () => {
      ReactDOM.render(
        <Footer />,
        document.getElementById('footer'),
      )
      
    })
  
  