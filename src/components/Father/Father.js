import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { ringContext } from '../Grandpa/Grandpa';
import Myself from '../Grandpa/Myself/Myself';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = () => {
    const [house, ornaments]= useContext(ringContext);
    return (
        <div>
            <h1>father</h1>
            <p>House: {house}</p>
            <div className="father">
                <Myself house={house}  ></Myself>
                <Brother Bhouse={house}></Brother>
                <Sister shouse={house}></Sister>
            </div>
        </div>
    );
};

export default Father;