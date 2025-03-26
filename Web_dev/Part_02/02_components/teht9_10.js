import React, { useState } from 'react';

// Tehtävä 9: Cars-komponentti
export function Cars() {
    const [carName, setCarName] = useState('');
    const [carList, setCarList] = useState([]);

    const handleSave = () => {
        if (carName.trim() !== '') {
            setCarList([...carList, carName]);
            setCarName('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
                placeholder="Syötä automerkki"
            />
            <button onClick={handleSave}>Save</button>
            <ul>
                {carList.map((car, index) => (
                    <li key={index}>{car}</li>
                ))}
            </ul>
            <Info count={carList.length} />
        </div>
    );
}

// Tehtävä 10: Info-komponentti
export function Info({ count }) {
    return (
        <div>
            {count >= 5 && <h2>Ainakin 5 nimeä on jo syötetty</h2>}
        </div>
    );
}
