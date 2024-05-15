import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const citrus = ["lime", "lemon", "Orange"];
// const fruits = ["Apple", "Banana", "Coconut", ... citrus];

// console.log(fruits);


// const fullName = {
//   fName: "James",
//   lName: "Bond"
// };

// const user = {

//   id: 1,
//   ... fullName,
//   username: "jamesbond007",
  
// };

// console.log(user);