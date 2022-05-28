import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Brother = ({Bhouse}) => {

    const [house, ornaments]= useContext(ringContext);
    return (
        <div>
            <h4>brother</h4>
            <p>{house}</p>
            <h1>{ornaments}</h1>
        </div>
    );
};

export default Brother;