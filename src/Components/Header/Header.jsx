import moment from "moment";

const Header = () => {
  return (
    <div className="w-full text-center space-y-4 mt-10">
      <img className="mx-auto" src="../../assets/logo.png" alt="" />
      <p className="text-[#706F6F] font-normal">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[#403F3F] font-medium">
        {moment().format("dddd, MMMM DD , YYYY")}
      </p>
    </div>
  );
};

export default Header;
