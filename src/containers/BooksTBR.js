import React, {useState} from 'react';
import TBRList from '../components/TBRList';
import TBRForm from '../components/TBRForm';

const BooksTBR = () => {

        const [toRead, setToRead] = useState([
        {
            id:1,
            title: 'The Song of Achilles',
            author: 'Madeline Millar',
            priority: 'high'
        },
        {
            id:2,
            title: 'November 9',
            author: 'Colleen Hoover',
            priority: 'low'
        }
    ])


    const addToRead = (submittedBook) => {
        submittedBook.id = Date.now()
        const updatedBooks = [...toRead, submittedBook]
        setToRead(updatedBooks)
    }

    return (
        <>
            <h2>TBR Tracker</h2>
            <TBRForm addToRead={addToRead}/>
            <TBRList toRead={toRead}/>
        </>
    );
}

export default BooksTBR;
