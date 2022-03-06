import "./course.css";

function Course({ course }) {
  const PF = "https://ictak-project.herokuapp.com/images/";
  return (
    <div className="course">
      <div className="courseInfo">
        <img className="courseImg" src={PF + course.photo} alt="" />
        <span className="courseTitle">{course.name}</span>
      </div>
      <p className="courseDesc">{course.description}</p>
    </div>
  );
}

export default Course;
