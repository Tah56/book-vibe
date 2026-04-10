import React from "react";
import { useLoaderData, useParams } from "react-router";
import BookDetailCard from "../../component/BookDetailCard/BookDetailCard";

const bookdetails = () => {
  const { id } = useParams();
  

  const books = useLoaderData();

  const findind = books.find((book) => book.bookId == id);
  

  return (
    <div className="w-11/12 mx-auto mt-10">
           <BookDetailCard findind={findind}></BookDetailCard>
    </div>
  );
};

export default bookdetails;
