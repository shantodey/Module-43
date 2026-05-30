import Image from "next/image";

const BookDetails = async ({ params }) => {
  const { bookId } = await params;
  const res = await fetch(`http://localhost:5004/books/${bookId}`);
  const { image, title, genre, author, description, year, rating, price, inStock } = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl opacity-60 group-hover:opacity-80 transition"></div>
          <div className="relative h-120 w-full rounded-3xl overflow-hidden shadow-2xl border border-base-300">
            <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition duration-500" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="badge badge-outline">{genre}</span>
            <span className={`badge ${inStock ? "badge-success" : "badge-error"}`}>
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <h1 className="text-5xl font-black leading-tight"> {title} </h1>
          <p className="text-base-content/60"> by <span className="text-primary font-semibold">{author}</span></p>
          <p className="text-base-content/70 leading-relaxed max-w-xl">{description}</p>

          <div className="flex items-center gap-8 mt-4">
            <div>
              <p className="text-xs uppercase text-base-content/40">Year</p>
              <p className="text-xl font-bold">{year}</p>
            </div>

            <div>
              <p className="text-xs uppercase text-base-content/40">Rating</p>
              <p className="text-xl font-bold text-yellow-500">★ {rating}</p>
            </div>

            <div>
              <p className="text-xs uppercase text-base-content/40">Price</p>
              <p className="text-3xl font-extrabold text-primary">${price}</p>
            </div>
          </div>

          <div className="mt-6">
            <button className="btn btn-primary btn-lg px-10 text-lg shadow-lg hover:scale-105 transition"> Add to Cart</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;