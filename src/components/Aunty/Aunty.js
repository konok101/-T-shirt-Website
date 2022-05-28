import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const antyHouse= useContext(ringContext);
    return (
        <div>
            <h1>Aunty</h1>
            <p>house {antyHouse}</p>
        </div>
    );
};

export default Aunty;