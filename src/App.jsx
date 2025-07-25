import React, { use, useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6])


  const increment =()=>{
    setNumber((prev)=>prev+1)
  }

  const decrement =()=>{
    setNumber((prev)=>prev-1)
  }

  const deleteElem=()=>{
    setArray((prev)=>prev.slice(0,-1))
  }
  return (
    <div>
      <h1> COUNTER!!!!!!!!!!!</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        libero deserunt exercitationem fuga ipsam nulla laboriosam? Itaque
        accusantium expedita voluptates.
        </p> */}
        <button onClick={() => {increment()}}>+</button> 
      <h1>{number}</h1>
      {/* or can also do like this*/}
      <button onClick={decrement}>-</button> 

      <h2>{array}</h2>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
      <button onClick={deleteElem}>DELETE</button>
    </div>  
  )
}

export default App