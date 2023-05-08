import React from 'react'
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const ErrorPage = () => {

    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.entries());
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <h1>ErrorPage</h1>
        </div>
    )
}

export default ErrorPage