import React, { useState } from "react";
import "./index.css";
import img1 from "./img/target.png";
import img2 from "./img/medal-icon.png";
import img3 from "./img/rainbow-flag.png";
import img4 from "./img/customer-service.png";
import img5 from "./img/trophy.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.3,
  },
};

function App() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (cardId) => {
    setActiveCard(cardId);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };
  return (
    <>
      <div className="container">
        <div className="main" style={{ display: "flex" }}>
          <div
            className="industry"
            style={{
              width: "694px",
              height: "394px",
              marginLeft: "6rem",
              marginTop: "5rem",
            }}
          >
            <div className="heading">
              <h3 className="heading-mobile">Why The industry ? </h3>
              <h2>
                Why the industry
                <br /> chooses Clickdee?
              </h2>
              <p>
                We understand performance marketing from every angle and every
                <br />
                stage of the funnel. Our clients trust that we know what metrics
                move
                <br /> their business towards growth. Our publisher and
                affiliate partners
                <br /> know that we make maximum revenue and ROAS a main focus
                when
                <br /> growing our partnerships.
              </p>
            </div>
          </div>
          <div className="card-display">
            <div className="target">
              <div
                className="card"
                onMouseEnter={() => handleCardHover(1)}
                onMouseLeave={handleCardLeave}
              >
                <img src={img1} alt="img" />

                <h3>
                  Choose your <br /> Local Targeting
                </h3>
                {activeCard === 1 && (
                  <p>
                    Our targeted and tracked calls are
                    <br /> tailored to your business needs,
                    <br /> audience, and geolocation.
                  </p>
                )}
              </div>
            </div>
            <div className="track">
              <div
                className="card2"
                onMouseEnter={() => handleCardHover(2)}
                onMouseLeave={handleCardLeave}
              >
                <img src={img2} alt="img" />
                <h3>
                  Track your <br /> Conversion
                </h3>
                {activeCard === 2 && (
                  <p>
                    We use the most progressive
                    <br /> tracking and analytics technology to
                    <br /> ensure that every call can be tracked and evaluated
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* container 2 */}

        <div className="main2">
          <div>
            <div
              className="card"
              onMouseEnter={() => handleCardHover(3)}
              onMouseLeave={handleCardLeave}
            >
              <img src={img3} alt="img" />
              <h3>
                Customized <br /> Campaigns
              </h3>
              {activeCard === 3 && (
                <p>
                  Audiences, budgets, and goals: you
                  <br /> decide the criteria for your digital ad
                  <br /> campaign, and we’ll do the rest.
                </p>
              )}
            </div>
          </div>
          <div>
            <div
              className="card2 "
              onMouseEnter={() => handleCardHover(4)}
              onMouseLeave={handleCardLeave}
            >
              <img src={img4} alt="img" />
              <h3>
                Get Dedicated <br /> Support Team
              </h3>
              {activeCard === 4 && (
                <p>
                  We constantly monitor quality
                  <br /> control! Our affiliate network of
                  <br /> publishers are digital ad experts that
                  <br /> have been vetted.
                </p>
              )}
            </div>
          </div>
          <div>
            <div
              className="card"
              onMouseEnter={() => handleCardHover(5)}
              onMouseLeave={handleCardLeave}
            >
              <img src={img5} alt="img" />
              <h3>
                Quality <br /> Assurance
              </h3>
              {activeCard === 5 && (
                <p>
                  We constantly monitor quality
                  <br /> control! Our affiliate network of
                  <br /> publishers are digital ad experts that
                  <br /> have been vetted.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="conatiner mobile">
        <Carousel responsive={responsive} arrows={false}>
          <div className="card">
            <img src={img1} alt="img" />

            <h3>
              Choose your <br /> Local Targeting
            </h3>

            <p>
              Our targeted and tracked calls are
              <br /> tailored to your business needs,
              <br /> audience, and geolocation.
            </p>
          </div>
          <div className="card">
            <img src={img2} alt="img" />
            <h3>
              Track your <br /> Conversion
            </h3>

            <p>
              We use the most progressive
              <br /> tracking and analytics technology to
              <br /> ensure that every call can be tracked and evaluated
            </p>
          </div>
          <div className="card">
            <img src={img3} alt="img" />
            <h3>
              Customized <br /> Campaigns
            </h3>

            <p>
              Audiences, budgets, and goals: you
              <br /> decide the criteria for your digital ad
              <br /> campaign, and we’ll do the rest.
            </p>
          </div>
          <div className="card ">
            <img src={img4} alt="img" />
            <h3>
              Get Dedicated <br /> Support Team
            </h3>

            <p>
              We constantly monitor quality
              <br /> control! Our affiliate network of
              <br /> publishers are digital ad experts that
              <br /> have been vetted.
            </p>
          </div>
          <div className="card">
            <img src={img5} alt="img" />
            <h3>
              Quality <br /> Assurance
            </h3>

            <p>
              We constantly monitor quality
              <br /> control! Our affiliate network of
              <br /> publishers are digital ad experts that
              <br /> have been vetted.
            </p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default App;
