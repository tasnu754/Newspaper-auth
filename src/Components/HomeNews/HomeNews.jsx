import { useLoaderData } from "react-router-dom";

import NewsCard from "../NewsCard/NewsCard";


const HomeNews = () => {
    const allCard = useLoaderData();
    return (
      <div>
        {allCard.map((card, idx) => (
          <NewsCard key={idx} newsCard={card}></NewsCard>
        ))}
      </div>
    );
};

export default HomeNews;