import Navbar from "@/components/theme/Navbar";
import React from "react";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import ReviewCard from "../components/ReviewCard";
import RestaurantTitle from "../components/RestaurantTitle";
import RestaurantRating from "../components/RestaurantRating";
import RestaurantDescription from "../components/RestaurantDescription";
import Reservation from "../components/Reservation";
import RestaurantImage from "../components/RestaurantImage";

const RestaurantDetailPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-3xl m-auto bg-white">
        <Navbar />
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <RestaurantTitle />
            <RestaurantRating />
            <RestaurantDescription />
            {/* IMAGES */}
            <RestaurantImage />

            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                <ReviewCard />
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <Reservation />
        </div>
      </main>
    </main>
  );
};

export default RestaurantDetailPage;
