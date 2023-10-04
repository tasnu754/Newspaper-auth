import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


const CategoryName = ({ name ,id  }) => {

    return (
      <div className="h-[64px] text-center inline lg:block mr-10">
        <NavLink
          to={`/news.json/${id}`}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-black inline lg:block text-center rounded-md text-red-600"
              : ""
          }
        >
          {name}
        </NavLink>
      </div>
    );
};

CategoryName.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};


export default CategoryName;