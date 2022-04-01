import React from 'react'

export default function CondRender(props) {

    const text1 = "Show Unread Messages"
    const text2 = "Hide Unread Messages"

    const [messages,setMessages] = React.useState(["a","b"])

    function toggleShown() {
        setMessages(prevMessages => {
            return prevMessages.length > 0 ? [] : ["a","b"]
        })
    }

    return (
        <div className={props.class}>
            {(messages.length > 0) && <h1 className="condRender--messages">You have {messages.length} unread messages!</h1>}
            <button onClick={toggleShown}>{messages.length === 0 ? text1 : text2}</button>
        </div>
    )

}
