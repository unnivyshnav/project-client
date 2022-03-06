import "./studentRegister.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function StudentRegister() {
  //Manage form values
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

  //flag for succesful submit
  const [isSubmit, setIsSubmit] = useState(false);

  //manage form errors
  //   const [formError, setFormError] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //   setFormError(validation(formValues))
    setIsSubmit(true);
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
            />
            <p className="error"></p>
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Place</label>
            <input
              type="text"
              name="place"
              className="registerInput"
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
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Qualification</label>
            <input
              type="text"
              name="qualification"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Pass-Out year</label>
            <input
              type="text"
              name="passOutYear"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Skillset</label>
            <input
              type="text"
              name="skillset"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Employment Status</label>
            <input
              type="text"
              name="employmentStatus"
              className="registerInput"
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
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Year</label>
            <input
              type="text"
              name="year"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Course</label>
            <input
              type="text"
              name="course"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Photo</label>
            <input
              type="file"
              name="photo"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Fee</label>
            <input
              type="text"
              name="fee"
              className="registerInput"
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
