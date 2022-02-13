import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo.svg";
import "../App.css";

export default function NavBar() {
  return (
    <Nav
      className="navbar"
      variant="pills"
      defaultActiveKey="/home"
      style={{ justifyContent: "flex-start", backgroundColor: "#2E4559" }}
    >
      <Nav.Item as="li" className="navbar-header">
        <img
          style={{ width: "3rem" }}
          className="navbar-brand image-fluid ms-5"
          src={logo}
          alt=""
        />
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/create_task" eventKey="link-1">
          {" "}
          Add Task
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/task/list" eventKey="link-2">
          {" "}
          Task List
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
