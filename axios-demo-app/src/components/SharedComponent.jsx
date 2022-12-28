import React from 'react'
import { Outlet } from 'react-router-dom'

function SharedComponent() {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}

export default SharedComponent