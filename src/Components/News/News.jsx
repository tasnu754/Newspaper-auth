import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";


const News = () => {
   
    const param = useParams();
    const allCard = useLoaderData();
     const [newsCards, setNewsCard] = useState([]);

    console.log(param ,allCard.length);

    useEffect(() => {
    //   setNewsCard([]);
      const cards = allCard.filter((card) => card.category_id == param.id);
      setNewsCard(cards);
      console.log(cards.length);
    }, [allCard, param.id]);

    return (
      <div>
        {param.id == 0 &&
          allCard.map((card) => (
            <NewsCard key={card._id} newsCard={card}></NewsCard>
          ))}
        {param.id != 0 &&
          newsCards.map((card) => (
            <NewsCard key={card._id} newsCard={card}></NewsCard>
          ))}
      </div>
    );
};

export default News;