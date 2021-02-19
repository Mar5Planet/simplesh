import React,{useState} from 'react';
import Message from '../components/Message';

const ConvoPage = (props) => {
    const [visibleForm, setVisibleForm] = useState(false)
    const [text, setText] = useState('')
    const renderMessages = () => {
        let matchMsg =props.messages.filter((message) => message.conversation_id === props.convo[0].id)
       return matchMsg.map(msg => <Message createThought={props.createThought} thoughts={props.thoughts.filter((thought) => thought.message_id === msg.id)} message={msg} key={msg.id}/>)
    }
    return (
        <div className="convo-page">
            <h1>{props.convo[0].title}</h1>
            <h4> Created on: {props.convo[0].created_at.match(/[0-9]+-[0-9]+-[0-9]+/g)}</h4>
            <h3>Messages</h3>
            <button className="create-btn" onClick={() => setVisibleForm(true)}> + </button>
            {visibleForm? 
            <div className="create-convo">
                <h1>Create Message</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (text.length !== 0) {
                        let message = {}
                        message['conversation_id'] = props.convo[0].id
                        message['text'] = text
                        props.createMessage(message)
                        setVisibleForm(false)
                    }

                }}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a message"/>
                <button>Submit</button>
                </form>

            </div>
            : ''}
            {renderMessages()}
        </div>
    )
}

export default ConvoPage;
