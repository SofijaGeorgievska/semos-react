import { useEffect, useState } from "react"

const EffectWithDeps = () =>
{

    const [counter, setCounter] = useState(0)
    const [counterTwo, setCounterTwo] = useState(2)

    useEffect(() => {
        console.log("useEffect")
    }, [counter, counterTwo] )
     
    useEffect(() => {
        console.log("Second useEffect")
    })
  

    return(
        <div>
            <h2>Example of useEffect that is triggered with dependency array</h2>
            <button onClick={() => setCounter(counter+1)}>Increment counter 1</button>
            <button onClick={() => setCounter(counterTwo+2)}>Increment counter 2</button>
        </div>
    )
}
 
export default EffectWithDeps  