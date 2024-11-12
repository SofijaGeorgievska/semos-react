import { useState } from "react"

function DropDownForm()
{
    const [country, setCountry] = useState("")

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Selected country", country)
    }

    return(
        <div>
            <h2>Dropdown form example</h2>

            <form onSubmit={handleSubmit}>
                <label>Select Country:</label>
                <select value={country} onChange={handleCountryChange}>
                    <option value="">Select</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                    <option value="macedonia">Macedonia</option>
                </select>     
                <button type="submit" >Submit</button>   
            </form>
            
        </div>
    )
}
 
export default DropDownForm