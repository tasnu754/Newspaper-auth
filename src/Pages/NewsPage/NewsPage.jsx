import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import LeftBar from "../../Components/Leftbar/LeftBar";
import Navbar from "../../Components/Navbar/Navbar";
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
      <Navbar></Navbar>
      <div className="grid grid-cols-4 mt-10">
        <div className=" col-span-3 flex justify-center">
          <div className="card card-compact  w-full bg-base-100 shadow-xl">
            <div><figure>
              <img
                className="w-[90%] mx-auto "
                src={data.thumbnail_url}
                alt=""
              />
            </figure></div>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
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
