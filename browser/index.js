
//import dependencies from node modules (npm install)
import React from 'react'
//imports react package, modules, methods from npm
import ReactDOM from 'react-dom'
//imports the virtual dom to be able to check against the actual dom
//USE IMPORT FOR FRONT-END, REQUIRE FOR BACK-END
import Main from './components/main'


//takes an html dom element and component(container) 
ReactDOM.render(
//rendering virtual dom to the actual dom (index.html) - entry point from virtual to real dom 
<Main />,
//components are self closing tags!!!!!!!
//elementDom
document.getElementById('app'));
//document is global variable
//callback function for the component 
//'app' can be anything as long as it matches the html file 

//goes into index.html file and connects to 'app' id UNDERNEATH of the id tag


console.log('Hello Webpack!');