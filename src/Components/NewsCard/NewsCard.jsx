import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ newsCard }) => {
  return (
    <div>
      <div className="card lg:mx-10 mb-10 bg-base-100 shadow-2xl">
        <h2 className="card-title text-center my-4 mx-4">{newsCard.title}</h2>
        <figure>
          <img className=" w-full" src={newsCard.thumbnail_url} alt="Shoes" />
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
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  newsCard: PropTypes.object.isRequired,
  
};

export default NewsCard;
