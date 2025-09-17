import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ishita Garg</span>, a Computer Science and Engineering student at <span className="purple">Bennett University </span>(2022–2026), India.
          </p> */}
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ishita Garg</span>, a Computer Science and Engineering student at <span className="purple">Bennett University</span> (2022–2026), India.
          </p>


          <p style={{ textAlign: "justify", marginTop: "20px" }}>
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
            <li className="about-activity">
              <ImPointRight />Listening Songsc
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ishita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
