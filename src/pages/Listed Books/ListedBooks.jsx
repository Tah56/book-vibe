import React, { useContext } from "react";
import { Link } from "react-router";
import { BookCtext } from "../../BookContext/BookContext";

const ListedBooks = () => {
  const { storeBook } = useContext(BookCtext);
  

  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift w-11/12 mx-auto mt-10" >
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          { storeBook.lenght === 0 ? <div className="w-11/12 mx-auto">
        {storeBook.map((data,) => {
          return (
            <div key={data.bookId} className="card lg:card-side bg-base-100 shadow-sm mb-10 gap-40">
              <figure className="p-10 bg-gray-300">
                <img className="w-96" src={data.image} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.bookName}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>: <div className="flex items-center justify-center min-h-screen bg-gray-50">
      
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-4 rounded-full">
           
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Nothing here yet
        </h2>

        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything. Start by creating your first item.
        </p>

        <Link to={"/"}>
        <button className="px-6 py-2 bg-black text-white rounded-xl hover:opacity-80 transition">
            add new 
        </button>
        
        </Link>
      
    </div>}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>

        
      </div>
     
    </div>
  );
};

export default ListedBooks;
