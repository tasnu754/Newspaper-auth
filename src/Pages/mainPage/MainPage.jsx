import { Outlet } from "react-router-dom";


const MainPage = () => {
    return (
      <div className="w-[85%] mx-auto">
        <Outlet></Outlet>
      </div>
    );
};

export default MainPage;