import { Component } from "react"

class SimpleCounterComponent extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            counter: 0
        }
    }

   handleIncrement = ()=> 
   {
    this.setState({ counter: this.state.counter + 1 })
   }

   componentDidMount()
   {
    console.log("component is mounted")
   }

   componentDidUpdate(prevProps, prevState)
   {
    console.log("Component did update")
    console.log("Previous state", prevState)
    console.log("Current state", this.state
    )
   }
 

  render() {
    console.log("state", this.state)
    return (
      <>
        <h1>Simple Counter Component</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <br />
        <br />
        <h2>{this.state.counter}</h2>
      </>
    )
  }
}

export default SimpleCounterComponent
