import React from 'react'
import { Outlet } from 'react-router-dom'
const PantsLayout = () => {
  return (
    <div>
      PantsLayout page
      <Outlet />
    </div>
  )
}

export default PantsLayout
