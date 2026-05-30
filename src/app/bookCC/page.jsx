import React from 'react';
import BookCard from '../Components/BookCard';

const page = () => {
    return (
        <div className="container mx-auto">
            <Searchber />
            <div className="grid grid-cols-3 gap-4">

                {books.map((book) => (
                    <BookCard key={book.id} book={book}></BookCard>
                ))}
            </div>
        </div>
    );
};

export default page;