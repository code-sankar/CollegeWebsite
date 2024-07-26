import React from 'react'
import { NavLink } from 'react-router-dom'

function StudentAdmin() {
  return (
    <div className="flex items-center" >
    <NavLink
      to="/studentportal"
      className={({ isActive }) =>
        `bg-orange-500 hover:bg-orange-700 text-white text-center text-2xl pt-5 font-bold py-2 px-4 w-full h-16 rounded duration-200 ${
          isActive ? "bg-orange-700" : "bg-orange-500"
        }`
      }
    >
      Student Portal For Result/Fee Payment/Admission
    </NavLink>
  </div>
  )
}

export default  StudentAdmin


// This is a student portal button