import React from 'react'
import { NavLink } from 'react-router-dom'

function StudentAdmin() {
  return (
    <div className="flex items-center" style={{ marginLeft: 16 }}>
    <NavLink
      to="/studentportal"
      className={({ isActive }) =>
        `bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded duration-200 ${
          isActive ? "bg-orange-700" : "bg-orange-500"
        }`
      }
    >
      Student Portal
    </NavLink>
  </div>
  )
}

export default  StudentAdmin


// This is a student portal button