import { useEffect, useState } from "react"

function ColorChanger()
{

    const [color, setColor] = useState("#ffffff")

    const getRandomColor= () =>
    {
        const letters = "0123456789ABCDEF"
        let colorHash = "#"

        for(let i=0; i<6; i++)  
        {
         colorHash += letters[Math.floor(Math.random() * 16)]
        }

        return colorHash
    }


    useEffect(() => {

        function handleKeyPress(event)
        {
            if(event.keyCode === 32) 
            {
                setColor(getRandomColor())
            }
        }

        window.addEventListener("keydown", handleKeyPress)

        return() => 
        {
            window.removeEventListener("keydown", handleKeyPress)
        }

    }, [])

    console.log(color)

    return (
        <div style={{backgroundColor: color, height: "150px", width:"100%"}}>
        <h1>Press the spacebar to change the background color</h1>
        </div>
        )}

export default ColorChanger