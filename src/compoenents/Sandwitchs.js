function Sandwitchs(props) {
  const { Sandwitch, title, SandwitchType, addToCart, dispatch } = props;
  return (
    <div
      key={Sandwitch.id}
      className="foodcard  border-2  border-transparent   hover:border-secondary  duration-300   
      rounded-xl  w-72  ms:w-56 pl-4 pr-4 
       text-center grid auto-rows-auto gap-y-8 sm:gap-12  justify-items-center  justify-center    "
    >
      <div className="myimge h-48 w-52 ms:w-44  grid pb-4 justify-center items-center">
        <img src={Sandwitch.image} alt="Burger_image" />
      </div>  
      <div className=" text-start pl-3 pr-3 pt-6 ms:pt-1">
        {title ? (
          <h2 className="text-secondary pb-4 text-3xl ms:text-2xl text-center">
            {title}
          </h2>
        ) : (
          <h2 className="text-secondary pb-4 text-3xl ms:text-2xl text-center">
            {SandwitchType} {Sandwitch.id}
          </h2>
        )}
        <p className="text-white  text-lg pb-4">
          <span className="text-secondary text-left text-xl pr-1">
            Ingredients:
          </span>

          {Sandwitch.description}
        </p>
        <h5 className=" text-white pb-4">
          <span className="text-secondary text-left  text-xl">Price: </span>$
          {Sandwitch.price}
        </h5>
      </div>

      <button
        onClick={() => dispatch(addToCart(Sandwitch))}
        className="  text-white text-xl bg-secondary 
           rounded-md   mb-2 h-11 mh:h-8  flex items-center p-5 lg:w-40 hover:text-lime-800 ease-in-out duration-300 "
      >
        Add To Cart
      </button>
    </div>
  );
}
export default Sandwitchs;
