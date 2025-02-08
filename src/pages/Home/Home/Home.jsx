import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
           <Banner/>
           <OrderOnline/>
           <PopularMenu/>
        </div>
    );
};

export default Home;