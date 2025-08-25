import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () =>{
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    async function  fetchProductData () {
        setLoading (true);
        try {
            const res = await fetch(API_URL);
            const data = await  res.json();
            
            setPosts(data);
        } 
        catch(error) {
            console.log("error occured");
            setPosts([]);
        }
        setLoading(false);
    }
    useEffect( () => {
        fetchProductData();
    },[]);
return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner />
        </div>
        
      ) : posts.length > 0 ? (
        <div className="grid xs:gridcols-1 grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};
export default Home;