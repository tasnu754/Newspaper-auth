import moment from "moment";

const Header = () => {
  return (
    <div className="w-full text-center space-y-4 mt-10">
      <img className="mx-auto" src="../../assets/logo.png" alt="" />
      <p className="">Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM DD , YYYY")}</p>
    </div>
  );
};

export default Header;
