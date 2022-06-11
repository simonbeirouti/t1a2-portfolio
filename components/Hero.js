import React from 'react';

export default function Hero({description}) {
    return (
        <div className="hero-section xxl-pt">
            <h1 className="xl-f xl-fw">{description}</h1>
        </div>
    )
}