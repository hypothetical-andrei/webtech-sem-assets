import React, { useState, useEffect } from "react"

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Tou clicked ${count} times`
  })
  return (
    <div className="container">
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div >
  )

}

export default App;

