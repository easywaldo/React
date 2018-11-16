import React from 'react';
import ReactDOM from 'react-dom';
 
const title = 'Is it working? well done';
 
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);

module.hot.accept();