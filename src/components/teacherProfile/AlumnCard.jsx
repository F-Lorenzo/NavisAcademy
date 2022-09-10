import React from 'react'

function AlumnCard({alumn}) {
  return (
    <>
    <li>
        {alumn.name}
    </li>
    <li>
        {alumn.classHour}
    </li>
    </>
  )
}

export default AlumnCard