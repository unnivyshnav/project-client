import "./employeeRegister.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function EmployeeRegister() {
  //Manage form values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "",
    photo: "",
  });

  //flag for succesful submit
  // const [isSubmit, setIsSubmit] = useState(false);

  //manage form errors
  //   const [formError, setFormError] = useState({});
  // const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //   setFormError(validation(formValues))
    // setIsSubmit(true);
  };

  return (
    <div className="employeeRegister">
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
            <label>Role</label>
            <input
              type="text"
              name="role"
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
          </div>
        </div>
        <div className="formItemscol"></div>

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
