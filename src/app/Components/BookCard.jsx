import Image from "next/image";

const BookCard = ({ book }) => {
  const { title, author, description, price, genre, year, rating, inStock, image } = book;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col">

      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Genre badge */}
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {genre}
        </span>
        {/* Stock badge */}
        <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${
          inStock ? "bg-green-500/80 text-white" : "bg-red-500/80 text-white"
        }`}>
          {inStock ? "✓ In Stock" : "✗ Out of Stock"}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-tight line-clamp-1">
            {title}
          </h2>
          <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mt-0.5">
            by {author}
          </p>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mt-1">
          <span>📅 {year}</span>
          <span className="text-yellow-500 font-semibold">★ {rating}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;