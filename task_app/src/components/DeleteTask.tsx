import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

const url = "http://localhost:3000/api/task";

export default function DeleteTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  console.log(data);

  const handleDelete = () => {
    try {
      axios.delete(url + `/${id}`).then((res) => {
        navigate("/");
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button className="m-2" variant="secondary" onClick={handleDelete}>
      Delete
    </Button>
  );
}
