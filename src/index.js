// Import the React and ReactDOM libraries
//'React' knows what a component is and how to make components work together.
//'ReactDOM' knows how to take a component and make it show up in the DOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
// A component can be a function or a class
const App = function () {
    return <div>Hi there!</div>;
};

// Take the React Component and show it on the screen
ReactDOM.render (
    <App/>,
    document.querySelector('#root')
);
