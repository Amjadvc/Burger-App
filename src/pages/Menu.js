import Sandwitchs from "../compoenents/Sandwitchs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchOldProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Menu() {
  const { products, creativeProducts } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOldProducts());
  }, []);

  return (
    <section className="menu font-bold pt-44  bg-primary">
      <div className="mycontainer contanir justify-center items-center justify-items-center mx-auto pl-6 pr-6 grid  ">
        {/* Food Menu */}

        <div className="foodMenu  ">
          <h2 className="text-5xl pb-4 text-secondary pt-10">Food Menu</h2>
          <h3 className=" text-3xl text-white pb-10">
            Fresh taste and great price
          </h3>
          <div className=" food_Sandwitchs grid grid-cols-1 gap-y-11 pt-14  sm:grid-cols-2 sm:gap-20 lg:grid-cols-3">
            {creativeProducts.map((Sandwitch) => {
              return (
                <div
                  key={Sandwitch.id}
                  className="myFoodMenu  grid justify-center justify-items-center "
                >
                  <Sandwitchs
                    Sandwitch={Sandwitch}
                    title={`Sandwitchs${Sandwitch.id}`}
                    addToCart={addToCart}
                    dispatch={dispatch}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Creative Menu */}

        <div className="creativeMenu pt-14 font-bold">
          <h2 className="text-5xl  pb-4 text-secondary pt-10">Creative Menu</h2>
          <h3 className=" text-3xl text-white pb-10">
            Try Our Customer Creative Sandwitches
          </h3>
          <div className="creative_Sandwitchs grid grid-cols-1 gap-y-11 pt-14  sm:grid-cols-2 sm:gap-20 lg:grid-cols-3">
            {products.map((created_Sandwitch) => {
              return (
                <div
                  key={created_Sandwitch.id}
                  className="myCreativeMenu grid justify-center justify-items-center  "
                >
                  {created_Sandwitch.id > 5 ? (
                    <>
                      <Sandwitchs
                        Sandwitch={created_Sandwitch}
                        title={created_Sandwitch.title}
                        addToCart={addToCart}
                        dispatch={dispatch}
                      />
                    </>
                  ) : (
                    <>
                      <Sandwitchs
                        Sandwitch={created_Sandwitch}
                        SandwitchType={"Customer"}
                        addToCart={addToCart}
                        dispatch={dispatch}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Build Sandwitch */}

        <div className="buildSandwitch pb-52 pt-40">
          <div className="content">
            <h2 className="sm:text-5xl text-2xl pb-4 text-secondary pt-10">
              You Want To Build Your Own Sandwitch ?{" "}
            </h2>
            <h2 className="sm:text-5xl text-2xl pb-10 text-secondary ">
              Build It Now From
            </h2>
            {/* To Add New Sandwitch */}
            <Link
              to={"/menu/add"}
              className="text-white bg-secondary rounded-lg p-3 lg:text-xl lg:w-52 cursor-pointer  hover:text-lime-800 ease-in-out duration-300"
            >
              Here
            </Link>
          </div>  
        </div>
      </div>
    </section>
  );
}
export default Menu;
