import Image from "next/image";
import Link from "next/link";

const BookCard = ({ food }) => {
  const { id, dish_name,cuisine, price, rating, image_link, possible_price_in_dhaka} = food;
  return (
    <Link
      href={`/food/${id}`}
      className="group relative rounded-2xl overflow-hidden bg-base-100 border border-base-300 shadow-md hover:shadow-2xl transition duration-300"
    >
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image_link}
          alt={dish_name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="absolute top-3 right-3 bg-black/70 text-yellow-400 text-xs px-2 py-1 rounded-md backdrop-blur">
          ★ {rating}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-base font-bold text-base-content line-clamp-1">
          {dish_name}
        </h2>

        <p className="text-sm text-base-content/60 line-clamp-1">
          {cuisine}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-primary">
              ৳{price}
            </span>

            <span className="text-xs text-base-content/50">
              Dhaka: {possible_price_in_dhaka?.street_food_or_small_restaurant}
            </span>
          </div>

          <span className="text-xs opacity-0 group-hover:opacity-100 transition">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
const FoodCard = ({ food }) => {
 
};