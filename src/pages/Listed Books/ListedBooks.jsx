import React, { useContext } from "react";
import { Link } from "react-router";
import { BookCtext } from "../../BookContext/BookContext";

const ListedBooks = () => {
  const { storeBook } = useContext(BookCtext);
  console.log(storeBook);

  return (
    <div>
      <h2>Listed Books</h2>
      <div className="w-11/12 mx-auto">
        {storeBook.map((data) => {
         return <div className="card lg:card-side bg-base-100 shadow-sm mb-10 gap-40" >
            <figure className="p-10 bg-gray-300">
              <img className="w-96"  src={data.image} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.bookName}</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default ListedBooks;
