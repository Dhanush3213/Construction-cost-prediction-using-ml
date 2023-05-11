import React from 'react'
import { useParams } from 'react-router-dom';

const ErrorPage = () => {

    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <h1>ErrorPage</h1>
        </div>
    )
}

export default ErrorPage