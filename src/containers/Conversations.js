import React, {useState} from 'react';
import Conversation from '../components/Conversation';

const Conversations = (props) => {
    const [visibleForm, setVisibleForm] = useState(false)
    const [title, setTitle] = useState('')

    const renderConvos = () => {
        return props.convos.map(convo => <Conversation convo={convo} key={convo.id} />)
    }

    return (
        <div className="conversations">
            <h1>Conversations</h1>
            <button className="create-btn" onClick={() => setVisibleForm(true)}> + </button>
            {visibleForm? 
            <div className="create-convo">
                <h1>Create Convo</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (title.length !== 0) {
                    let convo = {}
                    convo['title'] = title
                    props.createConvo(convo)
                    setVisibleForm(false)
                    }

                }}>
                <label> Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add Title"/>
                <button>Submit</button>
                </form>

            </div>
            : ''}
            {renderConvos()}
        </div>
    )
}

export default Conversations;