import { FaAd, FaCalendarAlt, FaHome, FaHouseDamage, FaList, FaShoppingCart } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu ">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendarAlt></FaCalendarAlt>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart></FaShoppingCart>My Cart <span className="badge">{cart.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaAd></FaAd>Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaList></FaList>My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
            <MdRestaurantMenu />Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
