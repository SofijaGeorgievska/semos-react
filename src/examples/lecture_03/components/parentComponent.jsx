import { useState } from "react"

function ParentComponent()
{

    const [userInfo, setUserInfo] = useState(
        {
            name: "Jonh Doe",
            age: 30,
            location: "New York"
        }
    )

    const updateUserInfo = (newInfo) =>
    {
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo, 
            ...newInfo
    
        }))
    }

    return(
        <div>
            <h1>Parent component</h1>
            <p>Name: {userInfo.name} </p>
            <p>Age: {userInfo.age} </p>
            <p>Location: {userInfo.location} </p>
            
        </div>
    )
}

export default ParentComponent