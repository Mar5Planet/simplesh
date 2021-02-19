import React, {useState} from 'react';

const Message = (props) => {
    const [visibleForm, setVisibleForm] = useState(false)
    const [text, setText] = useState('')

    const date = props.message.created_at.match(/[0-9]+-[0-9]+-[0-9]+/g)
    const renderThoughts = () => {
    return props.thoughts.map(thought => <div key={thought.id} className="thought"><p>{thought.text}</p> <p>{tConvert(thought.created_at)} - {thought.created_at.match(/[0-9]+-[0-9]+-[0-9]+/g)}</p></div>)
    }

    function tConvert (time) {
        time = time.match(/[0-9]+:[0-9]+:[0-9]+/g)

        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];  
        if (time.length > 1) {
          time = time.slice (1);
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; 
          time[0] = +time[0] % 12 || 12;
        }
        return time.join ('');
      }

    return (
        <div className="message">
            <h3>{props.message.text} </h3>
            <h5>{tConvert(props.message.created_at)} - {date}</h5>
            <button onClick={() => setVisibleForm(true)}> Add Thought </button>
            {visibleForm? 
            <div className="create-convo">
                <h1>Create Thought</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (text.length !== 0) {
                    let thought = {}
                    thought['message_id'] = props.message.id
                    thought['text'] = text
                    props.createThought(thought)
                    setVisibleForm(false)
                    }
                }}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a thought"/>
                <button>Submit</button>
                </form>

            </div>
            : ''}
            {renderThoughts()}
        </div>
    )
}

export default Message;