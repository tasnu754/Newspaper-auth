import { FaGoogle , FaGithub , FaFacebook ,FaInstagram ,FaTwitter} from "react-icons/fa";

const LeftBar = () => {
  return (
    <div className="space-y-14 ">
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
      <div className="">
        <p className="mb-4 text-lg font-bold">Find Us On</p>
        <div className="w-full border-2 flex justify-start items-center h-[50px] rounded-md rounded-b-none">
          {" "}
          <button>
            <FaFacebook className="bg-white text-blue-700 inline ml-4"></FaFacebook>{" "}
            Facebook
          </button>
        </div>
        <div className="w-full border-r-2 border-l-2 flex justify-start items-center h-[50px] ">
          {" "}
          <button>
            <FaInstagram className="bg-white text-blue-700 inline ml-4"></FaInstagram>{" "}
            Instagram
          </button>
        </div>
        <div className="w-full border-2 flex justify-start items-center h-[50px] rounded-md rounded-t-none">
          {" "}
          <button>
            <FaTwitter className="bg-white text-blue-700 inline ml-4"></FaTwitter>{" "}
            Twitter
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LeftBar;
