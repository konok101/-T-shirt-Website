import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {

    const [house, sethouse] = useState(10);
    const ornaments= 'Dimond ring';

    const handleBuyAhouse = () => {
        const newhouse = house + 1;
        sethouse(newhouse);
    }



    return (

        <div className='grandpa' >
            <h4>grandpa</h4>
            <button onClick={handleBuyAhouse}>Buy A house</button>


            <div style={{ display: 'flex' }}>
                <Father house={house} ornaments={ornaments}></Father>
                <Uncle house={house}></Uncle>
                <Aunty hous={house}></Aunty>
            </div>

        </div>
    );
};

export default Grandpa;