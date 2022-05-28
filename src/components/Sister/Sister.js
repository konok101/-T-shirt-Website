import React, { createContext, useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

 

const Sister = ({shouse}) => {
    const ringAlu= useContext(ringContext);
    return (
        <div>
            <h1>Sister</h1>
            <p>{ ringAlu}</p>
        </div>
    );
};

export default Sister;