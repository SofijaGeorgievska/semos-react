import { Component } from "react";
import PropTypes from "prop-types"

class NewClassComponent extends Component{

    componentDidMount()
    {
    console.log("The component is mounted")
    }

    render() {
        console.log("The component is rendered ")
        console.log("props",  this.props)
        return(
            <div>
                <h1>My new class component</h1>
                {this.props.name}
                {this.props.age}
                {this.props.randomArray}
                <p>
                    This is {this.props.person.name}
                </p>
            </div>
        )
    }
}


// class DataFetcher extends Component {
// constructor(props)
// {
//     super(props)
//     this.state={
//         data: null
//     }
// }

// componentDidMount()
// {
//     fetch("https://api.example.com/data")
//     .then((response) => response.json())
//     .then((data) => this.setState({data}))
// }

// render()
// {
//     return (
//         <div>
//             {this.state.data ? <p>{this.state.data}</p> : <p>Loading</p>}
//         </div>
//     )
// }

// }





NewClassComponent.propTypes = {
name: PropTypes.string.isRequired, 
age: PropTypes.number,
randomArray: PropTypes.arrayOf(PropTypes.number),
person: PropTypes.shape({
name: PropTypes.string,
address: PropTypes.string 
})
}

export default NewClassComponent