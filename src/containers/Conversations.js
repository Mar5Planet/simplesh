import React, {useState} from 'react';
import Conversation from '../components/Conversation';

const Conversations = (props) => {
    const [visibleForm, setVisibleForm] = useState(false)
    const [title, setTitle] = useState('')
    const [convos, setConvos] = useState(props.convos)
    const [search, setSearch] = useState(false)

    const renderConvos = () => {
        if (search) return convos.map(convo => <Conversation convo={convo} key={convo.id} />)
        return props.convos.map(convo => <Conversation convo={convo} key={convo.id} />)
    }

    const handleSearch = term => {
        if (term.length === 0) setSearch(false)
        let newConvos = props.convos.filter((convo) => convo.title.toLowerCase().includes(term.toLowerCase()))
        setConvos(newConvos)
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
                    handleSearch('')
                    }

                }}>
                <label> Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add Title"/>
                <button>Submit</button>
                </form>

            </div>
            : ''}

            <div className="search">
                <h5>Search Conversation</h5>
                <input onChange={(e) => {handleSearch(e.target.value)
                setSearch(true)}} placeholder="Conversation title" />
            </div>
            {renderConvos()}
        </div>
    )
}

export default Conversations;