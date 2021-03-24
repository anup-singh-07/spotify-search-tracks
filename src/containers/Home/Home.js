import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import Header from '../../components/Header/Header.js';

const Home = props => {
    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
    } = process.env;
    const loginHandler = () => {
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    }
    return (
        <div className='login'>
            <Header />
            <Button variant='info' type='submit' onClick={loginHandler}>
                Click here to login
            </Button>
        </div>
    )
}

export default connect()(Home);