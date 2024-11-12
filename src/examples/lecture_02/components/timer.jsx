import { Component } from "react";

class Timer extends Component{

       componentDidMount()
    {
        console.log("The timer is mounted")
    }

    componentWillUnmount()
    {
        console.log("The component is unmounted")
    }

    render()
    {
        return(

            <div>
                <h1>Timer is active</h1>
            </div>
        )
    }
}

export default Timer