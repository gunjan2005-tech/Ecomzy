import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect (() => {
        setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
    },[cart])
    return (
        <div className="w-full min-h-screen bg-gray-50 p-6">
        {
            cart.length > 0 ?
            (<div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-6"> 
                    {
                        cart.map((item,index) => {
                            return <CartItem key = {item.id} item={item} itemIndex = {index}/>
                        })
                    }
                    
                </div>

                <div className="w-full md:w-1/3 bg-white shadow-xl rounded-xl p-6 h-fit">
                    <div>
                        <h2  className="text-2xl font-bold text-gray-800 border-b pb-2">Your cart </h2>
                        <p className="text-lg font-semibold text-green-600">Summary</p>
                        <p  className="mt-2 text-gray-600">
                            <span>Total Items : {cart.length}</span>
                        </p>
                    </div>

                    <div>
                        <p className="mt-2 text-gray-600">Total Amount : ${totalAmount} </p>
                        <button className="w-full mt-6 bg-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-700 transition">Checkout Now</button>
                    </div>
                </div>
            </div>) :
            (<div className="flex flex-col items-center justify-center h-[70vh] gap-4">
                <h1 className="text-2xl font-bold text-gray-700"> Cart Empty </h1>
                <Link to = {"/"}>
                    <button  className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">Shop Now</button>
                </Link>
            </div>)
        }  
        </div>
    )
}
export default Cart;