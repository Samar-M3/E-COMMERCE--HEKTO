import React from 'react'
import { GrDashboard } from 'react-icons/gr'
import { PiRowsDuotone } from 'react-icons/pi'

const menuItem=[
  {
    title:"Dashboad",
    icon:GrDashboard,
    path:"/"

  },
  {
    title:"product",
    icon:PiRowsDuotone,
    path:"/"

  }
]

function Sidebar() {
  return (
    <div>
      
      <div>
        {
          menuItem.map((item)=>{
            return <div key={item.title} className='flex items-center gap-5'>
              <item.icon/>
              <span>{item.title}</span>
              </div>
          })

        }
      </div>
    </div>
  )
}

export default Sidebar
