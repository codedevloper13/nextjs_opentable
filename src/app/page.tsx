import Cards from "@/components/theme/Cards";
import Header from "@/components/theme/Header";
import Navbar from "@/components/theme/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-3xl m-auto bg-white">
        <Navbar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <Cards />
          </div>
        </main>
      </main>
    </main>
  );
}
