import { FaGoogle , FaGithub , FaFacebook ,FaInstagram ,FaTwitter} from "react-icons/fa";

const LeftBar = () => {
  return (
    <div className="space-y-14 pl-10 ">
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
      <div className="bg-[#F3F3F3] p-10 rounded-md">
        <p className="text-xl font-bold mb-10">Q-Zone</p>
        <div>
          <img src="/public/assets/qZone1.png" alt="" />
          <img src="/public/assets/qZone2.png" alt="" />
          <img src="/public/assets/qZone3.png" alt="" />
        </div>
      </div>

      <div className="bg text-white text-center space-y-14 p-10 rounded-md">
        <h1 className="text-3xl font-bold">Create an <br /> Amazing <br /> Newspaper</h1>
        <h3 className="text-base font-normal">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </h3>
        <button className="btn btn-secondary rounded-none w-[150px] h-[64px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LeftBar;
