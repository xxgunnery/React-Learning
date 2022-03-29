import React from 'react'

export default function Event(props) {
    const [isImportant, setIsImportant] = React.useState("Add Item")

    let thingsArray = ["thing 1", "thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    function addThing() {
        let newThing = `thing ${thingsArray.length + 1}`
        thingsArray.push(newThing)
        setIsImportant("Add Thing")
    }

    return (
        <div id="yo" className={props.class}>
            <button onClick={addThing}>{isImportant}</button>
            {thingsElements}
        </div>
    )
}