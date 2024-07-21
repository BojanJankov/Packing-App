import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="HomePage">
      <div className="heading-div">
        <h1>Welcome to Packing App</h1>
        <h3>Are you:</h3>
      </div>
      <div className="buttons-div">
        <Link to="/item-page/male">
          <Button title="🤵" />
        </Link>
        <Link to="/item-page/female">
          <Button title="👩" />
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
