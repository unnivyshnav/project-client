import { useEffect, useState } from "react";
import "./search.css";
import axios from "axios";
import Table from "../../components/table/Table";

export default function Search() {
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState("");
  const keys = [
    "name",
    "qualification",
    "passOutYear",
    "course",
    "place",
    "exitExamMark",
    "EmploymentStatus",
  ];

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get("http://localhost:5000/api/student/all");
      setStudents(res.data);
    };
    fetchStudents();
  }, []);

  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.qualification.toLowerCase().includes(query) ||
        item.course.toLowerCase().includes(query) ||
        item.exitExamMark.includes(query) ||
        item.passOutYear.includes(query) ||
        item.place.toLowerCase().includes(query) ||
        item.employmentStatus.toLowerCase().includes(query)
    );
  };
  return (
    <div className="searchmain">
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(students)} />
    </div>
  );
}
