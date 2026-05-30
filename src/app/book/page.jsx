import BookCard from "../Components/BookCard";
import Searchber from "../Components/Searchber";
import SelectSection from "../Components/SelectSection";

const getBookData = async (search="",catagory="") => {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?search=${search}&category=${catagory}`, { next: { revalidate: 20 } })
    const book = await res.json()
    const allFood=book.data
    return allFood
}
const page = async({searchParams}) => {
    const sp= await searchParams;
    console.log(sp);
    
    const foods=await getBookData(sp.search, sp.catagory)
    console.log(foods);
    
    return (
        <div className="container mx-auto">
            <div className="flex py-6 items-center justify-evenly">
            <Searchber />
            <SelectSection/>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
                {foods.map((food) => (
                    <BookCard key={food.id} food={food}></BookCard>
                ))}
            </div>
        </div>
    );
};

export default page;