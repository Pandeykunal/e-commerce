import React, { useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(5)

  // const[num , setNum]
  return (
    <div>
      <h1>hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        libero deserunt exercitationem fuga ipsam nulla laboriosam? Itaque
        accusantium expedita voluptates.
      </p>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>  
  )
}

export default App
