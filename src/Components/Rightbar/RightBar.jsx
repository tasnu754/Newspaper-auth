import { useEffect, useState } from "react";

import CategoryName from "../CategoryName/CategoryName";


const RightBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data));
    },[])
    return (
      <div>
        <h2 className="text-[#403F3F] text-xl  font-semibold mb-4">All Caterogy </h2>
        {categories.map((category) => (
            <CategoryName key={category.id} name={category.name}></CategoryName>
        ))}
      </div>
    );
};

export default RightBar;