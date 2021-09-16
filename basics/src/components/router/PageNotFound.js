import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  let location = useLocation();
  return (
    <div>
      <h2>Sorry the path {location.pathname}  doesn't exists</h2>
    </div>
  )
}
