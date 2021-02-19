import React from 'react';
import {Link} from 'react-router-dom'

const Home = (props) => {
    return (
        <div className="home">
            <h1>Conversations Made Simple</h1>

            <Link to="/conversations">
                <button onClick={() => props.setHome(false)} className="home-btn">Get Started</button>
            </Link>
        </div>
    )
}

export default Home;