import { useEffect, useState } from "react"

function InfiniteLoop()
{
    const [counter, setCounter] = useState(0)

    //This will cause an ifinite loop
    useEffect(() => {
        setCounter(counter + 1)
    })

    //This will cause an infinite loop as well
    useEffect(() => {
        setCounter(counter + 1)
    }, [counter])

    return(
       <div>
        <p>Counter: {counter}</p>
       </div>
    )
}


export default InfiniteLoop