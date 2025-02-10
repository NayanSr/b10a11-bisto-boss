import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category == "salad");
  const soups = menu.filter((item) => item.category == "soup");
//   const popular = menu.filter((item) => item.category == "popular");
  const desserts = menu.filter((item) => item.category == "dessert");
  const offereds = menu.filter((item) => item.category == "offered");
  const pizzas = menu.filter((item) => item.category == "pizza");
//   console.log(offered);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss {`>`} Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        heading={"our menu"}
        subHeading={"Would You Like to Try a Dish"}
      />
      <section className="w-2/4 mx-auto my-4 text-center">
        <SectionTitle heading={"today's offer"} subHeading={"Don't Miss"} />
      </section>
      {/* {img,heading,subHeading,items} */}
      <section className="my-4">
        <MenuCategory items={offereds} />
        <button className="px-6 block mt-4 text-blue-300 font-semibold text-xl mx-auto border-b-4 border-yellow-700 rounded-xl">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </section>

      <section className="py-4">
        <MenuCategory
          heading={"dessert"}
          subHeading={"dessert Sub Heading"}
          img={dessertImg}
          items={desserts}
        />
        <button className="px-6 block mt-4 text-blue-300 font-semibold text-xl mx-auto border-b-4 border-yellow-700 rounded-xl">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </section>



      <section className="py-4">
        <MenuCategory
          heading={"pizza"}
          subHeading={"pizza Sub Heading"}
          img={pizzaImg}
          items={pizzas}
        />
        <button className="px-6 block mt-4 text-blue-300 font-semibold text-xl mx-auto border-b-4 border-yellow-700 rounded-xl">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </section>




      <section className="py-4">
        <MenuCategory
          heading={"salads"}
          subHeading={"salads Sub Heading"}
          img={saladImg}
          items={salads}
        />
        <button className="px-6 block mt-4 text-blue-300 font-semibold text-xl mx-auto border-b-4 border-yellow-700 rounded-xl">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </section>




      <section className="py-4">
        <MenuCategory
          heading={"soups"}
          subHeading={"soups Sub Heading"}
          img={soupImg}
          items={soups}
        />
        <button className="px-6 block mt-4 text-blue-300 font-semibold text-xl mx-auto border-b-4 border-yellow-700 rounded-xl">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </section>
    </div>
  );
};

export default Menu;
