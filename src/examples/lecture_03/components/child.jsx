import React, { useState } from "react"

function Child({ updateMessage }) {
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={() => updateMessage(input)}>Update Message</button>
    </div>
  )
}

export default Child