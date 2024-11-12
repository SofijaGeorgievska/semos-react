import { useEffect, useState } from "react"

const SimpleEffect = () =>
{

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect runs after every rerender")
    })
    
  

    return(
        <div>
            <h2>Example of simple useEffect</h2>
            <button onClick={() => setCounter(counter+1)}>Click me</button>
        </div>
    )
}

export default SimpleEffect