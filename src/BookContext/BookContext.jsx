import React, { createContext, useState } from 'react';

export const BookCtext = createContext()

const BookContext = ({children}) => {
    const [storeBook , setStoreBook]= useState([])

    const makeHandler = (id) =>{
        
        
        const isExist = storeBook.find(book=> book.bookId === id.bookId)
        if(isExist){
        
            
        }else{
            setStoreBook([...storeBook, id])
        }
       
        
    }

    const data ={
        makeHandler,
        storeBook,
        setStoreBook
    }
    return (
        <BookCtext.Provider value={data}>
            {children}
        </BookCtext.Provider>
    );
};

export default BookContext;