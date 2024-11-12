import { useRef } from "react"

function UncontrolledInput()
{
    const inputRef = useRef(null)

    const handleSubmit = () => {
        console.log(`Input value: ${inputRef.current.value}`)
    }

    console.log(inputRef)

    return(
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}


export default UncontrolledInput