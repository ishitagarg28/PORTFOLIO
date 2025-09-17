// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiVercel,
// } from "react-icons/si";

// import { FaWindows } from "react-icons/fa";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <FaWindows />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
     
//       {/* <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col> */}
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiJira,
  SiPostman,
  SiSlack,
} from "react-icons/si";
import { FaWindows, FaLinux } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />   {/* Windows */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />   {/* Linux */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />   {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />   {/* Vercel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />   {/* Jira */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />   {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />   {/* Slack */}
      </Col>
    </Row>
  );
}

export default Toolstack;


