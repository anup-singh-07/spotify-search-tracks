import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.js';

const NotFoundPage = props => {
    return(
        <React.Fragment>
            <Header />
            Page Not Found. Goto <Link to='/dashboard'>Home Page</Link>
        </React.Fragment>
    );
}

export default NotFoundPage;