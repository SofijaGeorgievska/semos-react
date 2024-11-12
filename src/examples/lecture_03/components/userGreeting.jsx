//Example 1: Using if Statements
function UserGreeting({ isLoggedIn })
{
    if(isLoggedIn)
    {
        return <h1>Logged in</h1>
    }

    return <h1>Please log in</h1>
    
}

//Example 2: Using Ternary Operator
function TernaryGreeting({ isLoggedIn })
{
    return <h1> {isLoggedIn ? "Welcome back" : "Log in  "} </h1>
}


//Example 3: Logical && Operator
function Notification({message})
{
    return <div> {message && <p>You have a new message: {message} </p>} </div>
}


export {UserGreeting, TernaryGreeting, Notification} 