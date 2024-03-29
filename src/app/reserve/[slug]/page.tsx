import Navbar from "@/components/theme/Navbar";
import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const RestaurantReservation = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-3xl m-auto bg-white">
        <Navbar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
};

export default RestaurantReservation;
