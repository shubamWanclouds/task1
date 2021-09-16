import React from 'react'

export default function Person({person}) {
  return (
    <div>
      Hello I am {person.name}, I am {person.age} years old. I am skilled at {person.skill}
    </div>
  )
}
