import React, {useState, useEffect} from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Conversations from './containers/Conversations';
import ConvoPage from './containers/ConvoPage'; 

import './App.css';


const convoUrl = 'http://localhost:3000/conversations';
const messageUrl = 'http://localhost:3000/messages';
const thoughtsUrl = 'http://localhost:3000/thoughts';

function App() {
  const [homePage, setHomePage] = useState(true)
  const [convos, setConvos] = useState('')
  const [messages, setMessages] = useState('')
  const [thoughts, setThoughts] = useState('')

  const fetchConvos = () => {
    fetch(convoUrl)
    .then(res => res.json()).then(data => setConvos(data.reverse()))
    .catch(err => console.log(err))
  }

  const fetchMessages = () => {
    fetch(messageUrl)
    .then(res => res.json()).then(data => setMessages(data.reverse()))
    .catch(err => console.log(err))
  }

  const fetchThoughts = () => {
    fetch(thoughtsUrl)
    .then(res => res.json()).then(data => setThoughts(data.reverse()))
    .catch(err => console.log(err))
  }

  const createConversation = conversation => {
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accepts": "application/json"
        },
        body: JSON.stringify({
            conversation
        })
    }
    fetch(convoUrl, options)
    .then(res => res.json())
    .then(conv => setConvos([conv, ...convos]))
  }

  const createMessage = message => {
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accepts": "application/json"
        },
        body: JSON.stringify({
            message
        })
    }
    fetch(messageUrl, options)
    .then(res => res.json())
    .then(msg => setMessages([msg, ...messages]))
  }


  const createThought = thought => {
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accepts": "application/json"
        },
        body: JSON.stringify({
            thought
        })
    }
    fetch(thoughtsUrl, options)
    .then(res => res.json())
    .then(thought => setThoughts([thought, ...thoughts]))
  }


  useEffect(() => {
    fetchConvos();
    fetchThoughts();
    fetchMessages();
  }, [])

  return (
    <div className="app">
      <div className="logo">
        <img src="https://img.pngio.com/white-circle-png-free-download-white-circle-png-1890_1890.png" alt="circle-img" />
        <h1>simplesh</h1>
        {homePage? ' ':
          <Link to="/" onClick={() => setHomePage(true)}>
          <p>Back to homepage</p>
        </Link>}
      </div>

      <Switch>
        <Route path="/" exact>
          <Home setHome={setHomePage} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/conversations" exact>
          <Conversations convos={convos} createConvo={createConversation} />
        </Route>

        <Route path={`/conversation/:id`} render={(matchProps) =><ConvoPage createThought={createThought} createMessage={createMessage} {...matchProps} messages={messages} thoughts={thoughts} convo={convos.filter(conv => conv.id === parseInt(matchProps.match.params.id))}/>} />
      </Switch>

    </div>
  );
}

export default App;
