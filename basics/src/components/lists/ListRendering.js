import React from 'react';
import Person from './Person'

export default function ListRendering() {
  
  const persons = [
    {
      id: 1,
      name: 'Shubam',
      age: 22,
      skill: 'MERN,MEAN'
    },
    {
      id: 2,
      name: 'Sewak Singh',
      age: 29,
      skill: 'Cloud'
    },
    {
      id: 3,
      name: 'Kuldeep',
      age: 25,
      skill: 'MERN,MEAN'
    },
  ]
  const personList = persons.map( person => <Person key={person.id} person={person} />);
  return (
    <div>
      {personList}
    </div>
  )
}
