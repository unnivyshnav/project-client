import "./studentRegister.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function StudentRegister() {
  const [file, setFile] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    place: "",
    address: "",
    qualification: "",
    passOutYear: "",
    skillSet: "",
    employmentStatus: "",
    technologyTraining: "",
    year: "",
    course: "",
    photo: "",
    fee: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      formValues.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/student-register",
        formValues
      );
      console.log(res);
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div className="studentRegister">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="formcol">
          <div className="formItemscol">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="registerInput"
              onChange={handleChange}
              required="true"
            />
            <p className="error"></p>
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="registerInput"
              required="true"
              errorMessage="It should be a valid email address"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="registerInput"
              required="true"
              onChange={handleChange}
              // pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
            />
            <p className="error"></p>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Place</label>
            <input
              type="text"
              name="place"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
          </div>
          <div className="formItemscol">
            <label>Address</label>
            <textarea
              rows="5"
              type="text"
              name="address"
              className="registerInput address"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Qualification</label>
            <input
              type="text"
              name="qualification"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Pass-Out year</label>
            <input
              type="text"
              name="passOutYear"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Skillset</label>
            <input
              type="text"
              name="skillSet"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Employment Status</label>
            <input
              type="text"
              name="employmentStatus"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
          </div>
          <div className="formItemscol">
            <label>Technology Training</label>
            <input
              type="text"
              name="technologyTraining"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Year</label>
            <input
              type="text"
              name="year"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Course</label>
            <input
              type="text"
              name="course"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Photo</label>
            <input
              type="file"
              name="photo"
              className="registerInput"
              required="true"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <p className="error"></p>
            <label>Fee</label>
            <input
              type="text"
              name="fee"
              className="registerInput"
              required="true"
              onChange={handleChange}
            />
            <p className="error"></p>
          </div>
        </div>

        <button className="registerButton" type="submit">
          REGISTER
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
