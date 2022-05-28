import React, { useContext } from 'react';
import { ringContext } from '../../Grandpa/Grandpa';

const Special = () => {
    const [house, ornaments, sethouse] = useContext(ringContext);
    return (
        <div>
            <h1>Special</h1>
            <p>{house}</p>
          <h5>{ornaments}</h5>
          <button onClick={()=>sethouse(house+1)}>add a for buy</button>
        </div>
    );
};

export default Special;