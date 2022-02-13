import axios from "axios";
import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router";
import { Row, Col, Container, Button } from "react-bootstrap";
import noted from "../images/noted.svg";

const url = "http://localhost:3000/api/task";

function CreateTask() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    explanation: "",
    description: "",
    status: false,
  });

  if (!data) return null;

  return (
    <Container className="fluid container-sm p-5">
      <Row className="p-5">
        <Col md={6} className="mt-5">
          <img className="img-fluid" src={noted} alt="noted" />
        </Col>
        <Col md={6}>
          <h1 className="pt-4">Add Task</h1>
          <Formik
            initialValues={data}
            onSubmit={async (values) => {
              axios.post(url, values).then((res) => {
                setData(res.data);
                navigate(`/task/${res.data.id}`);
              });
            }}
          >
            <Form>
              <div className="mb-3 pb-1 pt-1">
                <label>Title</label>
                <Field name="title" type="text" className="form-control" />
              </div>
              <div className="mb-3 pb-1">
                <label>Explanation</label>
                <Field
                  name="explanation"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3 pb-1">
                <label>Description</label>
                <Field
                  component="textarea"
                  rows="3"
                  name="description"
                  type="text"
                  className="form-control"
                />
              </div>
              <Button type="submit">Add Task</Button>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateTask;
