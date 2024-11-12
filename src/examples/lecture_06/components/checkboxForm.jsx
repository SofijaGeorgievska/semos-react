import { useState } from "react"

const CheckboxForm = () => {

    const [hobbies, setHobbies] = useState([])

    const handleCheckboxChange = (event) => {
       if(event.target.checked){
        setHobbies([...hobbies, event.target.value])
       }
       else
       {
        setHobbies(hobbies.filter((hobby)=> hobby != event.target.value))
       }
    }

    const handleSumbit = (event) =>
    {
        event.preventDefault()
        console.log("selected hobbies", hobbies)
    }

  return (
    <div>
        <h3>Checkbox for example</h3>

        <form onSubmit={handleSumbit}>
            <label>
                <input type="checkbox" value="reading" checked={hobbies.includes("reading")} onChange={handleCheckboxChange}/>
                Reading
            </label>
            <label>
                <input type="checkbox" value="sports" checked={hobbies.includes("sports")} onChange={handleCheckboxChange}/>
                Sports
            </label>
            <label>
                <input type="checkbox" value="cooking" checked={hobbies.includes("cooking")} onChange={handleCheckboxChange}/>
                Cooking
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CheckboxForm
