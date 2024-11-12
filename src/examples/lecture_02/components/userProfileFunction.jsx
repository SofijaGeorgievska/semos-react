function UserProfileFunction (props)
{
    console.log(props)
    return(
        <div>
            <br />
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Hobby: {props.hobby} </p>
        </div>

    )
}

export default UserProfileFunction