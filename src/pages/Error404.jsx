import "./styles.scss";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div className="Error404">
            <h1>Sorry, we can't find that page</h1>
            <p>But we still have lots for you to discover</p>
            <button onClick={() => navigate("/")}>Back to Homepage</button>
        </div>
    );
};

export default Error404;
