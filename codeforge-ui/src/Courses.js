import React, { useEffect, useState } from "react";
import axios from "axios";

function Courses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8082/learning/courses")
      .then(response => {
        console.log(response.data); // for debugging
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });

  }, []);

  return (

    <div>

      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        courses.map(course => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px"
            }}
          >
            <h3>{course.title}</h3>
            <p>Level: {course.level}</p>
          </div>
        ))
      )}

    </div>

  );
}

export default Courses;