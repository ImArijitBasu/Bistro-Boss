import {
  FaAd,
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaList,
  FaMailBulk,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineInsertDriveFile, MdRestaurantMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  //TODO: get admin value from database --------
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu ">
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                <MdOutlineInsertDriveFile />Add items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList></FaList>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook></FaBook>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <FaShoppingCart></FaShoppingCart>My Cart{" "}
                  <span className="badge">{cart.length}</span>
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
            </>
          )}

          {/* //! shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <MdRestaurantMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/contact"}>
              <FaMailBulk />
              Contact
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
