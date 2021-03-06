import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Cards from "./Card/Cards";
import Data from "./Card/Data";
import Zoom from "react-reveal/Zoom";
import image1 from "./Card/s1.png";
import image2 from "./Card/s2.png";
import image3 from "./Card/s3.png";

function Services() {
  return (
    <div className="service" id="service">
      <Zoom>
        <div className="service-heading">
          <h1>Services</h1>
          <ReactTypingEffect
            className="p"
            text={["These are the services, which I provides to you!"]}
          />
        </div>
        <div className="b-container">
          <Cards
            stype={Data[0].stype}
            simage={image1}
            sdescription={Data[0].sdescription}
          />
          <Cards
            stype={Data[1].stype}
            simage={image2}
            sdescription={Data[1].sdescription}
          />
          <Cards
            stype={Data[2].stype}
            simage={image3}
            sdescription={Data[2].sdescription}
          />
        </div>
      </Zoom>
    </div>
  );
}

export default Services;
