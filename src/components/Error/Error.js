import React from 'react';
import { Link } from 'react-router-dom';

export default function Error({text}) {
    const style = {
        marginTop: '20px',
    }

    return <div className="succesfull-bought">
        <img src="https://media.tenor.com/images/5bcb10b227fc02ea17809549df02663e/tenor.gif" width="400" height="400" alt="" />
        <h3 {...{ style }}>{text}</h3>
        <Link to="/" {...{ style }}>¡Empeza a comprar aca!</Link>
    </div>
};
