// Import the React and ReactDOM libraries
//'React' knows what a component is and how to make components work together.
//'ReactDOM' knows how to take a component and make it show up in the DOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
// A component can be a function or a class
const App = function () {
    return (
        <div className="div">
            <label className="label" htmlFor="name">Enter name:</label>
            <input type="text" name="" id="name"/>
            <button style="background-color: blue; color: white;">Submit</button>
        </div>
    );
};

// Take the React Component and show it on the screen
ReactDOM.render (
    <App/>
,
document.querySelector('#root')
);
