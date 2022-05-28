import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Brother = ({Bhouse}) => {

    const brotherRing= useContext(ringContext);
    return (
        <div>
            <h4>brother</h4>
            <p>{ brotherRing}</p>
        </div>
    );
};

export default Brother;