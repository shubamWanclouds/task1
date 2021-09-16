import React from 'react';
import {useParams} from 'react-router-dom'

export default function Home() {
  let {name, age} = useParams();
  return (
    <div>
      <h2>Hey {name} {age}, This is your simplest Home Page. </h2>
    </div>
  )
}
