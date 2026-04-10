import React, { useContext } from "react";
import { BookCtext } from "../../BookContext/BookContext";


const BookDetailCard = ({findind}) => {

    const bookContext =useContext(BookCtext)
   
    const {makeHandler}=bookContext

  return (
    <div className="card card-side  bg-base-100 shadow-sm">
      <figure className="p-10 bg-gray-200 w-1/2">
        <img
          src={findind.image}
          alt="Movie"
          className="w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{findind.bookName}</h2>
        <p>{findind.author}</p>
        <p>{findind.category}</p>
        <div className="card-actions ">
           <button className="btn btn-neutral btn-outline" onClick={()=>{makeHandler(findind)}}>Add To List</button>
          <button className="btn btn-primary">wishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailCard;
