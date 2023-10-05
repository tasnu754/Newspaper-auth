import {  Outlet } from "react-router-dom";
import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import RightBar from "../../Components/Rightbar/RightBar";
import LeftBar from "../../Components/Leftbar/LeftBar";
import RightCards from "../../Components/RightCards/RightCards";


const Home = () => {
    return (
      <div className="font-poppins space-y-10">
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>

        <div className="grid  grid-cols-4 space-y-10">
          <div className="col-span-4 lg:col-span-1">
            <RightBar></RightBar>
            <RightCards></RightCards>
          </div>
          <div className="w-[95%] col-span-4 lg:col-span-2 mx-auto space-y-10">
            <h2 className="text-center font-bold text-3xl">News</h2>
            <Outlet></Outlet>
          </div>
          <div className="col-span-4 lg:col-span-1">
            <LeftBar></LeftBar>
          </div>
        </div>
      </div>
    );
};

export default Home;