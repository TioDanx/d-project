import React from 'react';
import './Loading.css';
import loading from './loading.gif'

const Loading = () => {
    return <div className="loading">
        <img src={loading} alt="" />
        <h3>Loading...</h3>
    </div>
}

export default Loading;
