import { useNavigate } from "react-router-dom";
import "../../Styles/Home.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  // let { isAuthenticated, user , isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div style={{color:"white" , width:"100%" , height:"100vh" , margin:"50px auto"}}>Loading...</div>; // Optionally show a loading indicator
  // }

  let navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="hero-section">
        {/* {isAuthenticated ? (
          <h2> Hi <p style={{color:"yellow" , display:"inline-block" , fontSize:"33px"}}>{user.email}</p> <br></br> Welcome to Our Home Page</h2>
        ) : (
          <h2>Welcome to Our Home Page</h2>
        )} */}

        <h2>Welcome to Our Home Page</h2>
        <p>
          Your journey to explore starts here. We offer a wide range of services
          and resources to help you.
        </p>
        <button className="cta-button" onClick={() => navigate("/fetchdata")}>
          Fetched Data
        </button>
      </div>
      <div className="features-section">
        <h3>Our Features</h3>
        <div className="features-grid">
          <div className="feature-item">
            <h4>Feature 1</h4>
            <p>
              Learn about our amazing feature that helps you achieve more with
              less effort.
            </p>
          </div>
          <div className="feature-item">
            <h4>Feature 2</h4>
            <p>
              Explore our tools designed to enhance productivity and drive
              results.
            </p>
          </div>
          <div className="feature-item">
            <h4>Feature 3</h4>
            <p>
              Discover how our platform can provide solutions tailored to your
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
