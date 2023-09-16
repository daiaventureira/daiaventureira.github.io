import React from 'react';
import {faGithub, faCodepen, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const HomePage = props => {
  
    return( 
        <div className="container">
            <div className="text">
                <div className="align">
                    <div className="introduction">
                    {props.text}
                    </div>
                    <div className="name">
                        {props.name}
                    </div>   
                    <div className="links">
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/daiaventureira"> <FontAwesomeIcon icon={faGithub} /></a>
                        <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/daiaventureira/"> <FontAwesomeIcon icon={faCodepen} /></a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/daiane-souzas"> <FontAwesomeIcon icon={faLinkedin}/></a>
                        <a  href="mailto:daianesou2704@gmail.com"> <FontAwesomeIcon icon={faEnvelopeOpen} /></a> 
                    </div>
                </div>
           </div>       
            <div className="image"></div>
        </div>
       

    );
};

export default HomePage;
