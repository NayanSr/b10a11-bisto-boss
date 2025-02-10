import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
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
     
    </div>
  );
};

export default Menu;
