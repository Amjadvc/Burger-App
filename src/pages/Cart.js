import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  deleteFromCart,
  increase,
  decrease,
} from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totlaPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const handleIncrease = (product) => {
    dispatch(increase(product));
  };

  const handleDecrease = (product) => {
    dispatch(decrease(product));
  };

  return (
    <section className="cart pt-52 pb-14  bg-primary w-full min-h-screen ">
      <div className="contanir sm:pl-4 sm:pr-4  lg:px-8 lg:py-10 px-1 ml-auto mr-auto  xl:w-contanerxl  lg:max-w-6xl md:w-contanermd  ">
        <div className="cartbox   border-2 border-secondary rounded-lg lg:p-10">
          <table className=" w-full sm:p-4 p-1.5 lg:p-6 table-auto  border-separate border-spacing-y-8 ">
            <thead>
              <tr className="text-white  text-sm lg:text-2xl">
                <th className="lg:text-left">product </th>
                <th>Name </th>
                <th>price </th>
                <th>amount </th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt="Burger_image"
                      className="lg:w-20 w-14"
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price}$</td>
                  <td className="[&>*]:text-secondary [&>*]:sm:text-lg  [&>*]:sm:px-2 [&>*]:py-1 [&>*]:ml-2 [&>*]:rounded-lg">
                    <button
                      className=" pr-2 sm:pr-0"
                      onClick={() => handleDecrease(product)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    {product.quantity}
                    <button onClick={() => handleIncrease(product)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(deleteFromCart(product))}
                      className="cursor-pointer"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "red" }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-left pt-5   ">
            <h3 className="text-white sm:text-4xl p-4   text-lg">
              Total Price:
              <span className="text-secondary text-lg sm:text-3xl pl-2">
                {totlaPrice}$
              </span>
            </h3>
            <div className="pt-8 pb-4 px-4 [&>*]:text-white [&>*]:p-2 [&>*]:w-28 [&>*]:rounded-md  ">
              <button
                onClick={() => dispatch(clear())}
                className="bg-secondary sm:mr-9 mr-4 "
              >
                Pay Now
              </button>
              <button onClick={() => dispatch(clear())} className="bg-red-700">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Cart;
