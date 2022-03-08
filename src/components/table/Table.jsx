import React from "react";

export default function Table({ data }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Pass out year</th>
            <th>ICTAK Course</th>
            <th>Place</th>
            <th>Exit Exam Mark</th>
            <th>Employment Status</th>
          </tr>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.qualification}</td>
              <td>{item.passOutYear}</td>
              <td>{item.course}</td>
              <td>{item.place}</td>
              <td>{item.exitExamMark}</td>
              <td>{item.employmentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
