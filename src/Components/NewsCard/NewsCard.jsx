import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ newsCard }) => {
  return (
    <div className="">
      <div className="card lg:mx-10 mb-10 bg-base-100 shadow-2xl mx-auto ">
        <h2 className="card-title text-center my-4 mx-4">{newsCard.title}</h2>
        <figure>
          <img className=" w-[90%]" src={newsCard.thumbnail_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          {newsCard.details.length > 200 ? (
            <p>
              {newsCard.details.slice(0, 200)}
              <Link
                to={`/newsDetails/${newsCard._id}`}
                className="text-red-700 font-bold"
              >
                {" "}
                Read more...
              </Link>
            </p>
          ) : (
            <p>{newsCard.details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  newsCard: PropTypes.object.isRequired,
  
};

export default NewsCard;
