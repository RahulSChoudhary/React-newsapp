import React from 'react';
import loading from "./Loading.gif";

export default function spinner() {
    return (
        <div className='text-center'>
            <img style={{ padding: "3px" }} src={loading} alt="loading" />
        </div>
    )
}