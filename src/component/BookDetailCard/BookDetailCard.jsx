import React from "react";

const BookDetailCard = ({findind}) => {
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
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailCard;
