import React from "react";
import { Link, Outlet } from "react-router-dom";
import useUserInfo from "../hooks/useUserInfo";
import Loading from "../Shared/Loading";
import "./NestedRoutes.css";

const Dashboard = () => {
  const { user, loading, userInfo } = useUserInfo();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {user?.uid && (
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
          )}
          {userInfo?.role && (
            <>
              <li>
                <Link to="addNewProduct">Add New Product</Link>
              </li>
              <li>
                <Link to="manageUsers">Manage Users</Link>
              </li>
              <li>
                <Link to="manageProducts">Manage Products</Link>
              </li>

              <li>
                <Link to="manageOrders">Manage Orders</Link>
              </li>
            </>
          )}
          {!userInfo?.role && (
            <>
              <li>
                <Link to="addReview">Add a Review</Link>
              </li>
              <li>
                <Link to="myOrders">My Orders</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
