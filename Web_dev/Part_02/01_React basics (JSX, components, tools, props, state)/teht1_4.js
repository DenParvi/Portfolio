import React, { useState } from 'react';

// Tehtävä 1: Laskuri-komponentti
export function Laskuri() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Kasvata</button>
            <button onClick={() => setCount(0)}>Nollaa</button>
            <Arvo arvo={count} />
        </div>
    );
}

// Tehtävä 4: Arvo-komponentti
export function Arvo({ arvo }) {
    const textStyle = {
        color: arvo > 10 ? 'red' : 'black'
    };

    return <h1 style={textStyle}>Laskuri on {arvo}</h1>;
}
