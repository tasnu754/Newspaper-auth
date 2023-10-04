import {  Outlet } from "react-router-dom";
import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import RightBar from "../../Components/Rightbar/RightBar";
import LeftBar from "../../Components/Leftbar/LeftBar";


const Home = () => {
    return (
      <div className="font-poppins space-y-10">
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>

        <div className="grid  grid-cols-4 space-y-10">
          <div className="col-span-4 lg:col-span-1">
            <RightBar></RightBar>
          </div>
          <div className="col-span-4 lg:col-span-2">
            {/* <NavLink to={`/news.json/${id}`}>
              <News></News>
            </NavLink> */}
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