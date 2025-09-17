import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatarr.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I developed a deep passion for programming and have continuously
              expanded my knowledge and skills.
              <br />
              <br />I am proficient in languages such as
              <i>
                <b className="purple"> Java, SQL, Javascript. </b>
              </i>
              <br />
              <br />
              My areas of interest include building cutting-edge &nbsp;
              <i>
                <b className="purple">web technologies and products,</b>
              </i>{" "}
              with a strong focus on{" "}
              <i>
                <b className="purple">Algorithms</b>
              </i>
              <br />
              <br />
              Whenever possible, I leverage my expertise in developing
              high-quality products using
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript libraries and frameworks,
                </b>
              </i>
              &nbsp; particularly
              <i>
                <b className="purple"> React.js</b>
              </i>{" "}
              and I also relish the opportunity to challenge myself with{" "}
              <a href="https://leetcode.com/u/ishitagarg2811/">
                <i>
                  <b className="purple">LeetCode</b>
                </i>
              </a>{" "}
              and{" "}
              <a href="https://www.codechef.com/users/ishitagarg2811">
                <i>
                  <b className="purple">Codechef</b>
                </i>
              </a>{" "}
              problems, always seeking to innovate and solve complex algorithmic
              puzzles.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatarr" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ishitagarg28"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ishita-garg-540072252"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ishii_2811/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
