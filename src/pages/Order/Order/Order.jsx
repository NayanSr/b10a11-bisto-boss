import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderBg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { driver } from "localforage";



const Order = () => {
const[tabIndex, setTabIndex]= useState(0);
const [menu]= useMenu();
const salads = menu.filter((item) => item.category == "salad");
const soups = menu.filter((item) => item.category == "soup");
const desserts = menu.filter((item) => item.category == "dessert");
// const offereds = menu.filter((item) => item.category == "offered");
const pizzas = menu.filter((item) => item.category == "pizza");
const drinks = menu.filter((item) => item.category == "drinks");


  return (
    <div>
      <Cover
        heading={"our order"}
        subHeading={"Would You Like to try a Dish?"}
        img={orderBg}
      />
      {/* //! React tab */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab><section >Soup</section></Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel><OrderTab items={salads}/></TabPanel>
        <TabPanel><OrderTab items={pizzas}/></TabPanel>
        <TabPanel><OrderTab items={soups}/></TabPanel>
        <TabPanel><OrderTab items={desserts}/></TabPanel>
        <TabPanel><OrderTab items={drinks}/></TabPanel>
       
      </Tabs>
    </div>
  );
};

export default Order;
