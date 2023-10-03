import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import RightBar from "../../Components/Rightbar/RightBar";


const Home = () => {
    return (
      <div className="font-poppins space-y-10">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-4">
                <div className=" col-span-1">
                    <RightBar></RightBar>
                </div>
                <div className="col-span-2">asey</div>
                <div className="col-span-1">jkfdhd</div>

            </div>
      </div>
    );
};

export default Home;