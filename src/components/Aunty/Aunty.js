import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, ornaments]= useContext(ringContext);
    return (
        <div>
            <h1>Aunty</h1>
            <p>house :{ house}</p>
        </div>
    );
};

export default Aunty;