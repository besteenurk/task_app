import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Formik, Field, Form } from "formik";

const url = "http://localhost:3000/api/task";

export default function Status() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get(url + `/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    <div className="container-sm ps-5 pe-5">
      {data.map(({ id, status }) => (
        <div key={id}>
          {!status ? (
            <Col>
              <Row
                style={{
                  paddingLeft: "calc(var(--bs-gutter-x) * .5)",
                  paddingRight: "calc(var(--bs-gutter-x) * .5)",
                  textAlign: "initial",
                }}
              >
                <Alert variant="danger">This task is not approved!!</Alert>
              </Row>
              <Row>
                <Formik
                  initialValues={{ status: true }}
                  onSubmit={async (values) => {
                    axios
                      .put(`http://localhost:3000/api/task/${id}`, values)
                      .then((res) => {
                        window.location.reload();
                      });
                  }}
                >
                  <Form style={{ textAlign: "initial" }}>
                    <Button type="submit" variant="primary" size="lg">
                      Approve Now
                    </Button>
                    <Field type="checkbox" name="status" hidden />
                  </Form>
                </Formik>
              </Row>
            </Col>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
}
