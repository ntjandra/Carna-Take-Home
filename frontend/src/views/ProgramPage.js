// Page that represents a singular course (Program)
import React, {useState, useEffect} from "react";

const Program = (props) => { 
  // Extract id from url
  const course_id = props.match.params.id
  const [rating, setRating] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState("Nothing");
  const [query, setQuery] = useState(false);

  var processData = data => {
    setTitle(data.title)
    setRating(data.stars)
    setDate(data.release_date)
  }
  
  // Call Endpoint to get more data
  if (!query) {
    let url = `http://localhost:8000/api/courses/${course_id}`
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

  return(
  <div>
    <h1> Program Page </h1>

    <h1> Welcome to the course about {title} </h1>
    <h2> Created on {date} </h2>
    <h3> Rating: {rating} stars </h3>
  </div>
  );
}

export default Program;