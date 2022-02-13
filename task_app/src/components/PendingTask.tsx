import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../style/all_tasks.css";

const url = "http://localhost:3000/api/task";

export default function PendingTask() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="mt-5">
      <section className="jumbotron">
        <div className="container">
          <h4 className="jumbotron-heading">Pending Tasks</h4>
        </div>
      </section>
      <div className="album py-5">
        <div className="container">
          <div className="row">
            {data.map(({ id, title, status }) => (
              <section key={id}>
                {status === false ? (
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
  );
}
