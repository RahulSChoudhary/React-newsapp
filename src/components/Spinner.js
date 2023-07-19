import React from 'react';
import loading from "./Loading.gif";

export default function spinner() {
    return (
        <div>
            <img src={loading} alt="loading" />
        </div>
    )
}