import React from 'react';
import CompleteButton from './CompleteButton';


const TBRItem =({title, author}) => {
    
    return (
        <>
            <h3>{title}</h3>
            <p>{author}</p>
            <CompleteButton/>
        </>
    );
}

export default TBRItem;
