import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="h-[80px] bg-[#F3F3F3] flex items-center">
      <button className="btn rounded-none bg-[#D72050] text-white ml-4">
        Latest
      </button>
      <Marquee
        gradient="true"
        pauseOnClick="true"
        gradientColor="#D72050"
        speed={130}
      >
        I can be a React component, multiple React components, or just some
        text.Discover thousands of options, easy to customize layouts, one-click
        to import demo and much more.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
