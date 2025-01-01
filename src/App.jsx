import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { CircleLoader } from "react-spinners";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center ">
          <CircleLoader color="#9b2f43" height={200} width={200} />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <CircleLoader color="#9b2f43"  height={200} width={200}  />
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
};

export default App;
