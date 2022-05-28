import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Grandpa/Myself/Myself';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({ house, ornaments }) => {
    return (
        <div>
            <h1>father</h1>
            <p>House: {house}</p>
            <div className="father">
                <Myself house={house} ornaments={ornaments}></Myself>
                <Brother Bhouse={house}></Brother>
                <Sister shouse={house}></Sister>
            </div>
        </div>
    );
};

export default Father;