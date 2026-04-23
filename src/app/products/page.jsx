export const metadata = {
  title: 'Products',
  description: ' Product data from Api',
}
import Prodect from "../Components/Prodect";
const getProdects = async() => {
    const res = await fetch('http://localhost:5004/products',{next:{revalidate: 20}})
    return res.json()
}

const ProdectsPage = async() => {
    const prodectData = await getProdects()
    
    return (
        <div className="container mx-auto">
            <h1>Products {prodectData.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                {prodectData.map((product) => (
                    <Prodect  key={product.id} product={product}></Prodect>
                ))}
            </div>
        </div>
    );
};

export default ProdectsPage;