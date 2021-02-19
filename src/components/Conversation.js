import React from 'react'
import {Link} from 'react-router-dom'

const Conversation = (props) => {

    return (
        <div className="conversation">
           <Link to={`/conversation/${props.convo.id}`}>
            <h4>{props.convo.title} - {props.convo.created_at.match(/[0-9]+-[0-9]+-[0-9]+/g)}</h4>
                </Link>
        </div>

    )
}

export default Conversation;