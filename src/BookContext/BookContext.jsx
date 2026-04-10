import React, { createContext, useState } from 'react';

export const BookCtext = createContext()

const BookContext = ({children}) => {
    const [storeBook , setStoreBook]= useState([])

    const makeHandler = (id) =>{
        console.log(id);
        
        const isExist = storeBook.find(book=> book.bookId === id.bookId)
        if(isExist){
            console.log("mora kha");
            
        }else{
            setStoreBook([...storeBook, id])
        }
        console.log(storeBook,id);
        
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