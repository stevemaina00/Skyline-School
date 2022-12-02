import React from 'react';
import ReactDOM from 'react-dom';

function Timer() {
  return (
    <div>Timer {employees.name}</div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Timer />,
      document.getElementById('timer'),
    )
  })