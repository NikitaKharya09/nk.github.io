import React from "react";
import "./personal.scss";
import { Parallax } from "react-scroll-parallax";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import img10 from "../../assets/images/img10.jpg";
import img11 from "../../assets/images/img11.jpg";
import deliver from "../../assets/images/deliver.jpg";
import cargo from "../../assets/images/cargo.jpg";
import superman from "../../assets/images/superman.jpg";

export const Personal = () => {

  return (
    <React.Fragment>
      {/* <p>
          Latest Inspiration:{" "}
          <a href="https://www.asisi.de/en/panorama/pergamon" target="_blank">
            {" "}
            Yedgar Asisi:{" "}
          </a>{" "}
        </p> */}

      <div class="page">
      <Parallax >
        <div className="headerStyle">
          <h1 style={{textAlign: 'center', marginTop: 30}}> Few of my personal interests </h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{color: "rgb(58, 9, 60)", fontSize: 25}}> Painitng </h3>
            <div className="external">
              <div className="horizontal-scroll-wrapper">
                <div className="img-wrapper slower">
                  {/* <a href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/" target="_blank" rel="noopener"> */}
                  <img className="imgPersonal" src={img6} alt="" />
                  {/* </a> */}
                </div>

                <div
                  className="img-wrapper faster"
                  style={{ marginRight: "10%" }}
                >
                  {/* <a href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/" target="_blank" rel="noopener"> */}
                  <img className="imgPersonal" src={img4} alt="" />
                  {/* </a> */}
                </div>

                <div className="img-wrapper slower vertical">
                  {/* <a href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/" target="_blank" rel="noopener"> */}
                  <img className="imgPersonal" src={img1} alt="" />
                  {/* </a> */}
                </div>

                <div className="img-wrapper slower slower-down">
                  {/* <a href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/" target="_blank" rel="noopener"> */}
                  <img className="imgPersonal" src={img2} alt="" />
                  {/* </a> */}
                </div>

                <div className="img-wrapper">
                  {/* <a href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/" target="_blank" rel="noopener"> */}
                  <img className="imgPersonal" src={img5} alt="" />
                  {/* </a> */}
                </div>

                <div className="img-wrapper slower">
                  {/* <a href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/" target="_blank" rel="noopener"> */}
                  <img className="imgPersonal" src={img3} alt="" />
                  {/* </a> */}
                </div>

                <div className="img-wrapper faster1">
                  {/* <a href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/" target="_blank" rel="noopener"> */}
                  <img className="imgPersonal" src={img7} alt="" />
                  {/* </a> */}
                </div>

                <div className="img-wrapper slower">
                  {/* <a href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/" target="_blank" rel="noopener"> */}
                  <img className="imgPersonal" src={img10} alt="" />
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.2) 0.5rem 0.5rem 2rem 0px",
                textAlign: "center",
                height: 50,
                zIndex: 3
              }}
            >
              <h3 style={{ display: "inline" }}> Latest Inspiration: </h3>
              <a
                href="https://www.asisi.de/en/panorama/pergamon"
                target="_blank"
              >
                Yedgar Asisi:
              </a>
            </div>{" "}
          </div>
        </div>
        </Parallax>
        <Parallax >
        
        <div className="main">
        {/* <h1> Additionally, I like </h1> */}
            <div className="mainContent">
          <h2 >Travelling</h2>
          <p>
            I have travelled to 15 countries till now in 4 different continents, a few of them multiple times as well.
            Visited Continents: Asia, Europe, North America and Australia.
          </p>
          <h2 style={{marginLeft: 30}}> Social Work</h2>
          <p>
            I have a keen interest in giving back to society. This includes teaching, being able to help the needy, any efforts to be able to help the greatest human beings, our army family, and trying to get closer to being carbon neutral.
            I have been part of the outreach programs of Cognizant and Accenture as well as on my personal level.
          </p>
          <h2 style={{marginLeft: 30}}>Puns</h2>
          <p>
            I enjoy the lame puns every now and then (who doesnt!)
            Enjoy a few of them below!!
          </p>
               
        </div>

        <p style={{display:'flex', gap: '20%', marginTop: 30}}>
            <p></p>
            <img src={cargo} width="300px" height="300px" style={{boxShadow: '2.5rem 2.5rem 3rem 0 rgba(0, 0, 0, 0.2)', borderRadius: '3rem'}}></img>
            <p></p>
            <img src={superman} width="300px" height="300px" style={{boxShadow: '2.5rem 2.5rem 3rem 0 rgba(0, 0, 0, 0.2)', borderRadius: '3rem'}}></img>
            <p></p>
            <img src={deliver} width="300px" height="300px"style={{boxShadow: '2.5rem 2.5rem 3rem 0 rgba(0, 0, 0, 0.2)', borderRadius: '3rem'}} ></img>
          </p>
          </div>
      </Parallax>
      </div>
    </React.Fragment>
  );
};
