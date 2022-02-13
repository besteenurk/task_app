import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PendingTask from "./PendingTask";
import note from "../images/note.png";

const url = "http://localhost:3000/api/task";

export default function ListingTask() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="container-sm p-5">
      <div className="row">
        <div className="col-md-9 mt-5">
        <section className="jumbotron">
        <div className="container">
          <h4 className="jumbotron-heading ms-4">Approved Tasks</h4>
        </div>
      </section>
      <div className="album py-5">
        <div className="container">
          <div className="row">
            {data.map(({ id, title, status }) => (
              <section key={id}>
                {status ? (
                  <div className="col-md-12 mb-2 pending_col" key={id}>
                    <Link to={`/task/${id}`}>
                      <Card className="pending_card">
                        <Card.Body className="pendin_card_text">
                          <p>{title}</p>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
        </div>
        <div className="col-md-3">
          <PendingTask />
        </div>
      </div>
    </div>
  );
}
