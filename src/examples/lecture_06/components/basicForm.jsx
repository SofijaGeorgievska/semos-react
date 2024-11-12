import { useState } from "react"

function BasicForm ()
{

    const [name, setName] = useState("")

    const handleInput = (event) =>{
        setName(event.target.value)
    }   

    const handleSubmit = (event) =>{
        event.preventDefault()
        alert(`You submitted a form with the following ${name}`)
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input onChange={(e) => handleInput(e)} type="text" placeholder="Name" value={name}/> 
            </label>
        </form>
    )

}

export default BasicForm