import { useParams } from "react-router-dom";


const News = () => {
    const param = useParams();
    console.log(param);
    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default News;