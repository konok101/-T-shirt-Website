import React, { createContext, useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

 

const Sister = ({shouse}) => {
    const [house, ornaments]= useContext(ringContext);
    return (
        <div>
            <h1>Sister</h1>
            <p>{ornaments}</p>
        </div>
    );
};

export default Sister;