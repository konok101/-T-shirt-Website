import React from 'react';
import Special from '../../Uncle/Special/Special';

const Myself = ({house, ornaments}) => {
    return (
        <div>
           <h1>myself</h1> 
           <p>{house}</p>
           <p>{ornaments}</p>
           <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default Myself;