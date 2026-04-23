

const Prodect = ({product}) => {
    const {name,description,price,category,rating,inStock}=product
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-lg font-semibold mt-2">${price}</p>
            <p className="text-sm">Category: {category}</p>
            <p className="text-sm">Rating: {rating} ⭐</p>
            <p className={inStock ? "text-green-600" : "text-red-600"}>
                {inStock ? "In Stock" : "Out of Stock"}
            </p>
        </div>
    );
};

export default Prodect;