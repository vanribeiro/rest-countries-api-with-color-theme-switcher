import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div>
            <h3>Ops...</h3>
            <h1>Page Not found...</h1>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default PageNotFound;