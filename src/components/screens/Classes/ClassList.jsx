import React from 'react';
import ClassItem from './ClassItem';

function ClassList({ classes }) {
    

    return (
        <div>
            {classes.map((item, index) => 
                <ClassItem key={index} item={item}/>
            )}
        </div>
    );
}

export default ClassList;