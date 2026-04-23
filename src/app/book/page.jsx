import BookCard from "../Components/BookCard";


const page = async() => {
    const res=await fetch('http://localhost:5004/books',{next:{revalidate:20}})
    const books=await res.json()
    return (
        <div className="container mx-auto">
            <h1>this is books {books.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                {books.map((book)=>(
                    <BookCard key={book.id} book={book}></BookCard>
                ))}
            </div>
        </div>
    );
};

export default page;