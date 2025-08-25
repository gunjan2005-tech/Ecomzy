
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/slices/cartSlice";
const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("item removed")
    }
    return(
        <div className="flex items-center justify-between bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition">
            <div>
                <div  className="w-24 h-28 flex-shrink-0">
                    <img src={item.image}/>
                </div>
                <div  className="flex-1 px-4">
                    <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.title}</h1>
                    <h1 className="text-sm text-gray-500 line-clamp-2">{item.description}</h1>
                </div>
                <div  className="flex flex-col items-end gap-3">
                    <p  className="text-green-600 font-bold text-lg">{item.price}</p>
                    <div
                    onClick={removeFromCart} className="text-red-500 hover:text-red-700 transition text-2xl">
                        <MdDelete />
                    </div>
                </div>

            </div>
        </div>
    ) 
};
export default CartItem;