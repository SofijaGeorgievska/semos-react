function ArgumentPassing()
{

    const handleClick = (message) =>
    {
        alert(message)
    }

    return(
        <div>
            <button onClick={() => handleClick("The button is clicked!")} >Click me!</button>
        </div>
    )
}

export default ArgumentPassing