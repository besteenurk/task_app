import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import note from "../images/note.png";
import adddnote from "../images/addnote.svg";
import "../style/all_tasks.css";
import Spinner from "../components/Spinner";
import PendingTask from "../components/PendingTask";

const url = "http://localhost:3000/api/task";

function AllTasks() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner />;

  if (!data) return <div>There is no task, add one!!</div>;
  return (
    <div className="container-sm p-5">
      {data.length !== 0 ? (
        <div className="row">
          <div className="col-md-9">
            <section className="jumbotron">
              <div className="container">
                <h1 className="jumbotron-heading">Your Task</h1>
              </div>
            </section>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  {data.map(({ id, title, description, status }) => (
                    <div className="col-md-4 mb-3" key={id}>
                      <Link key={id} to={`/task/${id}`}>
                        <Col>
                          <Card className="task_col">
                            <Card.Img src={note} />
                            <Card.Body>
                              <Card.Title>{title}</Card.Title>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <PendingTask />
          </div>
        </div>
      ) : (
        <Row>
          <Col md={6}>
            <p className="fs-2 mt-5">
              There are no tasks to be done. You should start by adding one.
            </p>
          </Col>
          <Col md={6}>
            <img className="img-flui" src={adddnote} alt="" />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default AllTasks;
