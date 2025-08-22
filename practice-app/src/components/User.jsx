import React from 'react'

// function User({fname, lname, bcount}) {
//   return (
//     <div>
//       My name is {fname + lname} and My Body Count is {bcount}
//     </div>
//   )
// }

function User({displayName, name}) {
  return (
    <div>
      <button onClick={()=> displayName(name)}>Tell the name</button>
    </div>
  )
}

export default User
