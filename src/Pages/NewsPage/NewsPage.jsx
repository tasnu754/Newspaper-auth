import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import LeftBar from "../../Components/Leftbar/LeftBar";

import { useEffect, useState } from "react";

const NewsPage = () => {
  const [data, setData] = useState({});
  const param = useParams();
  const alldata = useLoaderData();

  useEffect(() => {
    const findData = alldata.find((dat) => dat._id == param.id);
    setData(findData);
  }, [alldata, param.id]);
  return (
    <div>
      <Header></Header>

      <div className="space-y-10 lg:space-y-0 lg:grid grid-cols-4 mt-10">
        <div className=" col-span-3 flex justify-center">
          <div className="card card-compact  w-full bg-base-100 shadow-xl">
            <div>
              <figure>
                <img
                  className="w-[90%] h-[650px] mx-auto "
                  src={data.thumbnail_url}
                  alt=""
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-xl font-extrabold">
                {data.title}
              </h2>
              <p className=" text-base font-semibold">{data.details}</p>
              <div className="flex justify-between text-pink-500 font-bold">
                <h2>Badge: {data?.rating?.badge}</h2>
                <h2>View: {data.total_view}</h2>
              </div>
              <div className="card-actions justify-end">
                <Link to="/">
                  <button className="btn btn-outline btn-info">
                    Go Back To Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <LeftBar></LeftBar>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
