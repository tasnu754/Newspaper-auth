import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


const CategoryName = ({ name }) => {

    return (
      <div className="h-[64px]">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {name}
        </NavLink>
      </div>
    );
};

CategoryName.propTypes = {
  name: PropTypes.object.isRequired,
};


export default CategoryName;