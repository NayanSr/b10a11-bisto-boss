import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <OrderOnline />
      <PopularMenu />
      <Featured />
      <Testimonials/>
    </div>
  );
};

export default Home;
