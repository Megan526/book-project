import React from 'react';
import TBRItem from './TBRItem';


const TBRList = ({toRead}) => {

    const tbrBooksToBeDisplayed = toRead.map((book) => {
        return(
            <li key={book.id} className={book.priority === 'high' ? 'high' : book.priority === 'medium' ? 'medium' : 'low'}>
                <span><TBRItem title={book.title} author={book.author}></TBRItem></span>
            </li>
        )
    })

    return (
        <div className='tbr-list'>
            <ul>
                {tbrBooksToBeDisplayed}
            </ul>
        </div>
    );
}

export default TBRList;
