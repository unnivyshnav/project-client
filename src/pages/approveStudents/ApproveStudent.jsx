import "./approveStudent.css";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
export default function ApproveStudent() {
  const { user } = useContext(Context);
  const [students, setStudents] = useState([]);

  const [id, setId] = useState("");
  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(
        "https://ictak-project.herokuapp.com/api/student/approve",
        {
          headers: { token: "Bearer " + user.accessToken },
        }
      );
      setStudents(res.data);
    };
    fetchStudents();
  }, [id]);

  const handleClick = (event) => {
    setId(event.target.value);
  };
  useEffect(() => {
    const approveStudent = async () => {
      if (id) {
        try {
          await axios.put(
            `https://ictak-project.herokuapp.com/api/student/approve/${id}`,
            {},
            {
              headers: { token: "Bearer " + user.accessToken },
            }
          );
        } catch (err) {}
      }
      setId(false);
    };
    approveStudent();
  }, [id]);

  return (
    <div className="approveStudent">
      <h1>Approve Student</h1>
      <table className="table table-dark table-hover">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Pass out year</th>
            <th>ICTAK Course</th>
            <th>Place</th>

            <th>Employment Status</th>
            <th>Action</th>
          </tr>
          {students.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.qualification}</td>
              <td>{item.passOutYear}</td>
              <td>{item.course}</td>
              <td>{item.place}</td>

              <td>{item.employmentStatus}</td>
              <td>
                <button
                  className="btn btn-success"
                  value={item._id}
                  onClick={handleClick}
                >
                  Approve
                </button>
                <button className="btn btn-danger mx-2">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
