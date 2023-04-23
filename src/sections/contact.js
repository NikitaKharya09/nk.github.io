import React from "react";
import "./contact.scss";

import deliver from "../../assets/images/deliver.jpg";
import cargo from "../../assets/images/cargo.jpg";
import superman from "../../assets/images/superman.jpg";

import { SocialIcon } from "react-social-icons";

export const Contact = () => {
  return (
    <React.Fragment>
      <div className="containerContact">
        <div className="paper">
          <h1 className="contactTitle">Contact Me</h1>
          <p style={{ marginTop: "10%", color: "black" }}>
            I look forward to hearing from you!
          </p>
        </div>
        <ul className="numbers" role="list">
          <li className="number" role="listitem">
            <div className="link-wrapper">
              <SocialIcon
                url="https://www.linkedin.com/in/nikita-kharya-14a83670/"
                style={{ position: "static", marginTop: -12 }}
              />
              <a
                href="https://www.linkedin.com/in/nikita-kharya-14a83670/"
                target="_blank"
                aria-label="Linkedin profile"
              >
                Nikita Kharya
              </a>
            </div>
          </li>
          <li className="number" role="listitem">
            <div className="link-wrapper">
              <SocialIcon
                url="https://www.instagram.com/kharyanikita/"
                style={{ position: "static", marginTop: -12 }}
              />
              <a
                href="https://www.instagram.com/kharyanikita/"
                target="_blank"
                aria-label="Instagram profile"
              >
                @kharyanikita
              </a>
            </div>
          </li>
          <li className="number" role="listitem">
            <div className="link-wrapper">
              <SocialIcon
                url="mailto:nikitakharya09@gmail.com"
                style={{ position: "static", marginTop: -12 }}
              />
              <a href="mailto:nikitakharya09@gmail.com" aria-label="Email">
                nikitakharya09@gmail.com
              </a>
            </div>
          </li>
        </ul>

        <p className="puns">
          <h2 style={{ textAlign: "center", marginTop: -2 }}> </h2>
          <h2 className="punsTitle"> Enjoy a few Puns!!</h2>
          <p></p>
          <img
            src={cargo}
            width="250px"
            height="250px"
            style={{
              boxShadow: "2.5rem 2.5rem 3rem 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "2rem",
              marginTop: "12%",
            }}
          ></img>
          <p></p>
          <img
            src={superman}
            width="250px"
            height="250px"
            style={{
              boxShadow: "2.5rem 2.5rem 3rem 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "2rem",
              marginTop: "12%",
            }}
          ></img>
          <p></p>
          <img
            src={deliver}
            width="250px"
            height="250px"
            style={{
              boxShadow: "2.5rem 2.5rem 3rem 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "2rem",
              marginTop: "12%",
            }}
          ></img>
        </p>
      </div>
    </React.Fragment>
  );
};
