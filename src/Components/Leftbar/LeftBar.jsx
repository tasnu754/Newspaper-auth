import { FaGoogle , FaGithub } from "react-icons/fa";

const LeftBar = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold">Login With</p>
        <button className="btn lowercase text-blue-500 border-blue-500 bg-none">
          <FaGoogle className=""></FaGoogle>
          Login with Google
        </button>
        <button className="btn lowercase text-black border-black bg-none">
          <FaGithub className=""></FaGithub>
          Login with Github
        </button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LeftBar;
