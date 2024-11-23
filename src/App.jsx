import { useEffect } from "react";
import axios from "./utils/axios.customize";
import  Header  from "./components/layouts/header";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    // const fetchHellwWorld = async () => {
    //   const res = await axios.get("/main/home");
    //   console.log(">> check res", res);
    // };

    // fetchHellwWorld();
  }, []);
  return (
    <div>
      <Header />
      <Outlet /> 
    </div>
  );
}

export default App;
