const KeyboardEvents = () =>
{

    const handleKeyDown = (event) => {
        console.log(`keyPressed ${event.key}`)
    }

    return <input onKeyDown={handleKeyDown} type="text" placeholder="Press any key"/>
}

export default KeyboardEvents