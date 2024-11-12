import { useState } from "react"

function DynamicName()
{

    const [name, setName] = useState("Hristijan")

    function changeName()
    {
        setName("Sofija")
    }

    console.log("Child Component render")

    return(
        <div>
           <h1> My name is: {name}</h1>
           <button onClick={changeName}>Change My Name</button>
        </div>
    )
}

export default DynamicName