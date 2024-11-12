const ProfileCard = (props) =>
{
    console.log(props)
    return(
        <div>
            <img src={props.imgUrl} alt={props.name} height={"200px"}/>
            <p>Name: {props.name} </p>
            <span>Address: {props.address} </span>
        </div>
    )
}

export default ProfileCard