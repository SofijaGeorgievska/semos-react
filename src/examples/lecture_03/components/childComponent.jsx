function ChildComponent({userInfo, updateUserInfo})
{

    function changeLocation()
    {
        updateUserInfo({ location: "San Francisco" })
    }

    return(
        <div>
            <h2>Child Component</h2>
            <p>Received Name: {userInfo.name} </p>
            <p>Received Age: {userInfo.age} </p>
            <p>Received Location: {userInfo.location} </p>
            <button onClick={changeLocation} >Change Location to San Francisco</button>
        </div>
    )
}

export default ChildComponent