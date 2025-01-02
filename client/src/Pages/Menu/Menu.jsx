import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import PizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"today's offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} title={"dessert"} coverImg={dessertBg}></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} coverImg={PizzaBg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} coverImg={saladBg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} coverImg={soupBg}></MenuCategory>
      
    </div>
  );
};

export default Menu;
