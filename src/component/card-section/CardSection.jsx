import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Card from './card/Card';

const CardSection = () => {
    const cards =useLoaderData()
    
    
    return (
        <div  className='py-24 w-11/12 mx-auto'>
           <h2 className='font-bold text-5xl text-center'>Books</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
           
            {
                cards.map(card => <Link key={card.bookId} to={`bookdetails/${card.bookId}`}> <Card  card={card}></Card></Link>)
            }
           </div>
        </div>
    );
};

export default CardSection;