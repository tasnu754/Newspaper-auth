import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


const CategoryName = ({ name ,id  }) => {

    return (
      <div className="h-[64px]">
        <NavLink
          to={`/news.json/${id}`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-black text-red-600" : ""
          }
        >
          {name}
        </NavLink>
      </div>
    );
};

CategoryName.propTypes = {
  name: PropTypes.object.isRequired,
  id: PropTypes.object.isRequired,
};


export default CategoryName;