// Placeholder
import React, {useState, useEffect} from "react";
import Card from '../components/CourseCard';
const CoursePage = (props) => {
  // State contains the list of courses
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState(false);
  var processData = data => {
    setCourses(data)
  }
  
  // Display Course Title, Date Posted, and Rating
  const listCourses = courses.map((course) =>
  // Form List of Cards
    // <h1> Course {index} </h1>
    <Card key={course.id}
    title={course.title}
    date={course.release_date}
    link={`http://localhost:3000/course/${course.id}`}
    rating={course.stars}
    detail={course.description}/>

  )

  // Call exactly once to populate courses
  if (!query) {
    let url = 'http://localhost:8000/api/courses/'
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(processData)
    setQuery(true);
  }

  // GET Name from User_id

  return(
  <div>
    <h1> Course Page </h1>
    <ul> {listCourses} </ul>
  </div>
  );
}

export default CoursePage;