import React from 'react';
import {useHistory} from 'react-router-dom'

export default function About() {
  let history = useHistory();
  return (
    <div>
      <h2>This is a simple About Page.</h2>
      <button onClick={()=>{history.push("/projects")}}>Take me to Projects</button>
    </div>
  )
}
