import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {
    return (
      <div className="font-poppins space-y-10">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
      </div>
    );
};

export default Home;