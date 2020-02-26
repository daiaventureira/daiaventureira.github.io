import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import './index.scss';

const App = () => {
    return(
        <div>
           <HomePage
           text="Hi, my name is "
           name="Daiane"
           />
        </div>    
    );
}

ReactDOM.render (<App />, document.querySelector('#root'));