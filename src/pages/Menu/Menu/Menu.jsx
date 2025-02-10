import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import drinkImg from "../../../assets/menu/menu-bg.png";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category == "salad");
  const soups = menu.filter((item) => item.category == "soup");
  const desserts = menu.filter((item) => item.category == "dessert");
  const offereds = menu.filter((item) => item.category == "offered");
  const pizzas = menu.filter((item) => item.category == "pizza");
  const drinks = menu.filter((item) => item.category == "drinks");
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
        
      </section>

      <section className="py-4">
        <MenuCategory
          heading={"dessert"}
          subHeading={"dessert Sub Heading"}
          img={dessertImg}
          items={desserts}
        />
        
      </section>



      <section className="py-4">
        <MenuCategory
          heading={"pizza"}
          subHeading={"pizza Sub Heading"}
          img={pizzaImg}
          items={pizzas}
        />
        
      </section>




      <section className="py-4">
        <MenuCategory
          heading={"salad"}
          subHeading={"salads Sub Heading"}
          img={saladImg}
          items={salads}
        />
       
      </section>




      <section className="py-4">
        <MenuCategory
          heading={"soup"}
          subHeading={"soups Sub Heading"}
          img={soupImg}
          items={soups}
        />
       
      </section>




      <section className="py-4">
        <MenuCategory
          heading={"drinks"}
          subHeading={"drinks Sub Heading"}
          img={drinkImg}
          items={drinks}
        />
       
      </section>
    </div>
  );
};

export default Menu;
