import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, Form } from "formik";
import Status from "../components/Status";
import DeleteTask from "../components/DeleteTask";

const url = "http://localhost:3000/api/task";

export default function TaskDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [upData, setUpData] = useState({
    title: "",
    explanation: "",
    description: "",
    status: false,
  });

  const handleClose = () => {
    window.location.reload();
  };
  const handleShow = () => setShow(true);
  const handleShowDel = () => setShowDelModal(true);

  useEffect(() => {
    axios.get(url + `/${id}`).then((res) => {
      setData(res.data);
      upData.title = res.data.title;
      upData.explanation = res.data.explanation;
      upData.description = res.data.description;
    });
  }, [id, upData]);

  if (!data) return <div>There is no task, add one!!</div>;

  return (
    <div className="container-sm p-5 ">
      {data.map(({ id, title, description, explanation, status }) => (
        <div
          key={id}
          className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
        >
          <Status />
          <div className="my-3 p-3">
            <p className="display-5">{title}</p>
          </div>
          <div
            className="bg-white box-shadow mx-auto"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "21px 21px 0 0",
              textAlign: "initial",
            }}
          >
            <div className="my-2 p-3 bg-white rounded box-shadow">
              <h6 className="border-bottom border-gray pb-2 mb-0">
                Task Explanation
              </h6>
              <div
                className="media text-muted pt-2"
                style={{ wordBreak: "break-all" }}
              >
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  {explanation}
                </p>
              </div>
            </div>
            <div className="my-2 p-3 bg-white rounded box-shadow">
              <h6 className="border-bottom border-gray pb-2 mb-0">
                Task Description
              </h6>
              <div
                className="media text-muted pt-2"
                style={{ wordBreak: "break-all" }}
              >
                <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  {description}
                </div>
              </div>
            </div>
            <div className="my-3 rounded box-shadow" style={{ float: "right" }}>
              <Col>
                <Button className="m-2" onClick={handleShow}>
                  Update
                </Button>
                <Button className="m-2" onClick={handleShowDel}>
                  Delete
                </Button>
              </Col>
            </div>
          </div>
        </div>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={upData}
            onSubmit={async (values) => {
              axios
                .put(`http://localhost:3000/api/task/${id}`, values)
                .then((res) => {
                  setUpData(res.data);
                  window.location.reload();
                });
            }}
          >
            <Form>
              <div className="mb-3 pb-3 pt-3">
                <label>Title</label>
                <Field name="title" type="text" className="form-control" />
              </div>
              <div className="mb-3 pb-3">
                <label>Explanation</label>
                <Field
                  name="explanation"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3 pb-3">
                <label>Description</label>
                <Field
                  component="textarea"
                  rows="3"
                  name="description"
                  type="text"
                  className="form-control"
                />
              </div>
              <Button type="submit">Update Task</Button>
            </Form>
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          {" "}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDelModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure want to delete task?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteTask />
        </Modal.Body>
      </Modal>
    </div>
  );
}
