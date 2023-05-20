import { useState } from "react";
import Checkbox from "../compoenents/Checkbox";
import { useNavigate } from "react-router-dom";

function AddSandwich() {
  //use an Navigate Hook To  Navigate to Menu Page
  const navigate = useNavigate();

  // useState to manage the state
  const [title, setTitle] = useState("customer");
  const [selectedBunType, setBunType] = useState("Normal Bun");
  const [selectedProteinType, setproteinType] = useState("Beef patty");
  const [peefBaccon_Ch, setpeefBaccon_Ch] = useState(false);
  const [Lettuce_Ch, setLettuce_Ch] = useState(false);
  const [onion_Ch, setonion_Ch] = useState(false);
  const [Tomato_Ch, setTomato_Ch] = useState(false);
  const [caramelizedOnion_Ch, setcaramelizedOnion_Ch] = useState(false);
  const [Paprika_Ch, setPaprika_Ch] = useState(false);
  const [Cheese_Ch, setCheese_Ch] = useState(false);
  const [SmokedTurkey_Ch, setSmokedTurkey_Ch] = useState(false);
  const [CheddarCheese_Ch, setCheddarCheese_Ch] = useState(false);
  const [FreidEgg_Ch, setFreidEgg_Ch] = useState(false);
  const [BarbecueSauce_Ch, setBarbecueSauce_Ch] = useState(false);
  const [KetshupSauce_Ch, setKetshupSauce_Ch] = useState(false);
  const [MayoSauce_Ch, setMayoSauce_Ch] = useState(false);
  const [MustardSauce_Ch, setMustardSauce_Ch] = useState(false);
  //to prevent Refresh a page
  const formSubmit = (e) => {
    e.preventDefault();
    /// To assign more then one value
    const descriptionArray = [
      selectedBunType,
      selectedProteinType,
      peefBaccon_Ch ? "Beef Baccon" : "",
      Lettuce_Ch ? "Lettuce" : "",
      onion_Ch ? "Onion" : "",
      Tomato_Ch ? "Tomato" : "",
      caramelizedOnion_Ch ? "Caramelized Onion" : "",
      Paprika_Ch ? "Paprika" : "",
      Cheese_Ch ? "Cheese" : "",
      SmokedTurkey_Ch ? "Smoked Turkey" : "",
      CheddarCheese_Ch ? "Cheddar Cheese" : "",
      FreidEgg_Ch ? "Freid Egg" : "",
      BarbecueSauce_Ch ? "Barbecue Sauce" : "",
      KetshupSauce_Ch ? "Ketshup Sauce" : "",
      MayoSauce_Ch ? " Mayo Sauce" : "",
      MustardSauce_Ch ? " Mustard Sauce" : "",
    ];

    ///remove any empty or falsey element
    const description = descriptionArray.filter(Boolean).join(", ");

    // fetch("http://localhost:9000/createdProducts", {
    fetch("https://res-burger-app.herokuapp.com/created-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        image: "https://i.imgur.com/YphqRgF.png",
        description,
        price: 4,
      }),
    }).then((res) => {
      res.json();
      navigate("/menu");
    });
  };

  return (
    <section className="AddSandwissh pt-80  2xl:pt-56 text-secondary bg-primary min-h-screen">
      <h1 className="font-bold text-4xl ">Build Your Custom Sandwitch</h1>
      <div className="mycontainr pt-16 lg:pt-20 flex justify-center">
        <form onSubmit={formSubmit} className="lg:grid justify-items-center">
          <div className="topform  flex flex-col lg:flex-row items-center gap-y-10 pl-1 pr-1 lg:w-[101%]  ">
            <label className=" font-medium text-lg m-2  mr-5  w-60 lg:w-full lg:m-0">
              Name:
              <input
                type="text"
                aria-describedby="Sandwitch name"
                placeholder="Sandwitch Name"
                className=" outline-none px-4 py-3 ml-5 w-52 border-secondary border-solid border-2 rounded-md text-sm lg:mb-4  placeholder-orange-300 bg-primary"
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <p className="mb-4 w-56 lg:w-full">
              <span className=" font-medium text-lg m-2 pr-3">Bun: </span>

              <select
                className="border-secondary border-2 rounded-md px-4 py-3 bg-primary  focus:outline-none  w-52  pr-8  text-orange-300"
                onChange={(e) => setBunType(e.target.value)}
              >
                <option value="Normal Bun">Normal Bun</option>
                <option value="Bun With sesame">Bun With sesame</option>
              </select>
            </p>

            <p className="mb-4 w-56 lg:w-full">
              <span className=" font-medium text-lg m-2 pr-3">protein:</span>

              <select
                className="border-secondary border-2 rounded-md px-4 py-3 bg-primary  focus:outline-none  w-52  pr-8  text-orange-300"
                onChange={(e) => setproteinType(e.target.value)}
              >
                <option value="Beef patty">Beef patty</option>
                <option value="Checkin patty">Checkin patty</option>
                <option value="Fish patty">Fish patty</option>
              </select>
            </p>
          </div>

          <h2 className="pt-20 lg:pt28 text-3xl font-bold">Topics </h2>

          <div className="topics grid sm:grid-cols-2  lg:grid-cols-4 gap-8 pt-20 text-xl grid-col-1  lg:gap-12">
            <Checkbox
              label="Beef Baccon"
              checked={peefBaccon_Ch}
              setChange={setpeefBaccon_Ch}
            />
            <Checkbox
              label="Lettuce"
              checked={Lettuce_Ch}
              setChange={setLettuce_Ch}
            />
            <Checkbox
              label="Tomato"
              checked={Tomato_Ch}
              setChange={setTomato_Ch}
            />
            <Checkbox
              label=" Caramelized Onion"
              checked={caramelizedOnion_Ch}
              setChange={setcaramelizedOnion_Ch}
            />
            <Checkbox
              label="Paprika"
              checked={Paprika_Ch}
              setChange={setPaprika_Ch}
            />
            <Checkbox
              label="Cheese"
              checked={Cheese_Ch}
              setChange={setCheese_Ch}
            />
            <Checkbox
              label="Smoked Turkey"
              checked={SmokedTurkey_Ch}
              setChange={setSmokedTurkey_Ch}
            />
            <Checkbox
              label="Cheddar Cheese"
              checked={CheddarCheese_Ch}
              setChange={setCheddarCheese_Ch}
            />
            <Checkbox
              label="Freid Egg"
              checked={FreidEgg_Ch}
              setChange={setFreidEgg_Ch}
            />
            <Checkbox
              label="Onion"
              checked={onion_Ch}
              setChange={setonion_Ch}
            />
          </div>
          <h2 className="pt-20 text-3xl font-bold">Sauces </h2>
          <div className=" Sauces grid sm:grid-cols-2 lg:grid-cols-4  gap-8 pt-20 text-xl grid-col-1">
            <Checkbox
              label="Barbecue Sauce"
              checked={BarbecueSauce_Ch}
              setChange={setBarbecueSauce_Ch}
            />
            <Checkbox
              label="Ketshup Sauce"
              checked={KetshupSauce_Ch}
              setChange={setKetshupSauce_Ch}
            />
            <Checkbox
              label="Mayo Sauce"
              checked={MayoSauce_Ch}
              setChange={setMayoSauce_Ch}
            />
            <Checkbox
              label="Mustard Sauce"
              checked={MustardSauce_Ch}
              setChange={setMustardSauce_Ch}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-secondary rounded-lg lg:p-3 p-2 lg:text-xl lg:w-52 cursor-pointer 
             hover:text-lime-800 ease-in-out duration-300 w-44 font-bold text-2xl my-12 lg:mt-16 "
          >
            Here
          </button>
        </form>
      </div>
    </section>
  );
}
export default AddSandwich;
