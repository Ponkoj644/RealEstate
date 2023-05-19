// import useState & useEffect
import React, { useEffect, useState } from "react";

import "./App.css";

// import components
import Hero from "./Components/Hero";
import NewestDeals from "./Components/NewestDeals";
import AboutUs from "./Components/AboutUs";
import BestDeals from "./Components/BestDeals";
import Footer from "./Components/Footer";

// import Loader
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  // Loader function
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App ">
      {loading ? (
        <div className=" flex flex-col justify-center items-center w-full h-[100vh] bg-white ">
          <PuffLoader
            color={"#6d28d9"}
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={1}
          />
          <h1 className=" text-xl ">
            Welcome To Real<span className=" text-violet-600">Estate</span>
          </h1>
        </div>
      ) : (
        <>
          <div className="w-11/12 md:w4/5 m-auto">
            <Hero />
            <NewestDeals />
            <AboutUs />
            <BestDeals />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
