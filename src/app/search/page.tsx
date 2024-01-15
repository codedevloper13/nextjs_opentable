import Navbar from "@/components/theme/Navbar";
import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import RestaurantCard from "./components/RestaurantCard";

const SearchPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-3xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SideBar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
};

export default SearchPage;
