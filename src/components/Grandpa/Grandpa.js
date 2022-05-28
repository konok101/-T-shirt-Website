import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const ringContext =createContext()

const Grandpa = () => {

    const [house, sethouse] = useState(10);
    const ornaments= 'Dimond ring';

    const handleBuyAhouse = () => {
        const newhouse = house + 1;
        sethouse(newhouse);
    }



    return (

      <ringContext.Provider value={ house}>
             <div className='grandpa' >
            <h4>grandpa</h4>
            <button onClick={handleBuyAhouse}>Buy A house</button>


            <div style={{ display: 'flex' }}>
                <Father></Father>
                <Uncle ></Uncle>
                <Aunty ></Aunty>
            </div>

        </div>
      </ringContext.Provider>
    );
};

export default Grandpa;