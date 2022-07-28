import React from 'react';
import BooksRead from './BooksRead';
import BooksTBR from './BooksTBR';
import BooksReadNumber from './BooksReadNumber';


const  BooksContent = () => {
    
    return (
        <>
            <h1>Book Tracker</h1>
            <BooksRead/>
            <BooksTBR />
            <BooksReadNumber/>
        </>
    
    );
}
export default BooksContent;
