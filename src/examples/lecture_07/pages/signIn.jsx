import { useNavigate } from "react-router-dom"

function SignIn({isSignIn, setIsSignedIn}) {

    const navigate = useNavigate()

    const handleSubmit = (event) =>
    {
        event.preventDefault()
        setIsSignedIn(true)
        
        setTimeout(() => {
            navigate("/profile")
        }, 3000)
    }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>This is a simple Sign In page</h1>
      {isSignIn ? <p>You are signed in</p> : 
      <form onSubmit={handleSubmit} >
        <div>
            <label>Username: </label>
            <input type="text" name="username" required />
        </div>
        <div>
            <label>Password: </label>
            <input type="text" name="password" required />
        </div>
        <button type="submit" style={{margintop: "20px"}}> Sign In </button>
        </form>}
    </div>
  );
}

export default SignIn;
