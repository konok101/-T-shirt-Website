import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';
 

const Uncle = ( ) => {
    const house=useContext(ringContext)
    return (
        <div>
            <h1>Uncle</h1>
            <p>{house}</p>
        </div>
    );
};

export default Uncle;