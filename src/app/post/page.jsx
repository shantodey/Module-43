
//  const getPost = async() => {
//      
//     try{
//         const res =await fetch('https://jsonplaceholder.typicode.com/posts')
//          return res.json();
//     }catch(err){
//         throw new Error('its not working')
//     }

// }
const page = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const post = await res.json()
    console.log(post);

    return (
        <div>
            <h2>this is the total post {post.length}</h2>
        </div>
    );
};

export default page;