import { Component } from "react";

class UserProfileClass extends Component{
    render()
    {
        return(
            <div>
                <p>Person's name: {this.props.name} </p>
                <p>Age: {this.props.age} </p>
                <p>Hobby: {this.props.hobby} </p>
            </div>
        )
    }
}

export default UserProfileClass