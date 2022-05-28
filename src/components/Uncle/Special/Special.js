import React, { useContext } from 'react';
import { ringContext } from '../../Grandpa/Grandpa';

const Special = () => {
    const [house, ornaments] = useContext(ringContext);
    return (
        <div>
            <h1>Special</h1>
            <p>{house}</p>
          <h5>{ornaments}</h5>
        </div>
    );
};

export default Special;