import { useEffect } from "react"

const EffectUnmount = ({toggleBoolean}) => 
{

    useEffect(() => {
        console.log("useEffect")
    }, [toggleBoolean])

    useEffect(() => {
        console.log("component mounted")

        // cleanup function
        return() => console.log("the component will unmount")
        
    }, []) 

    console.log("useEffect component is rendered")

    return(
        <div>
            <h2>Example with useEffect with cleanup function</h2>
        </div>
    )
}

export default EffectUnmount 