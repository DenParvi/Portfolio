import React, { useState } from 'react';

// Tehtävä 5: Lista-komпонентти
export function Lista() {
    const opiskelijat = [
        { etunimi: 'Matti', sukunimi: 'Meikäläinen', aloitusvuosi: 2021 },
        { etunimi: 'Liisa', sukunimi: 'Virtanen', aloitusvuosi: 2020 },
        { etunimi: 'Pekka', sukunimi: 'Korhonen', aloitusvuosi: 2019 },
        { etunimi: 'Anna', sukunimi: 'Laine', aloitusvuosi: 2022 },
    ];

    return (
        <ul>
            {opiskelijat.map((opiskelija, index) => (
                <Rivi
                    key={index}
                    etunimi={opiskelija.etunimi}
                    sukunimi={opiskelija.sukunimi}
                    aloitusvuosi={opiskelija.aloitusvuosi}
                />
            ))}
        </ul>
    );
}

// Rivi-компонентти
export function Rivi({ etunimi, sukunimi, aloitusvuosi }) {
    return (
        <li>
            {etunimi}, {sukunimi}, {aloitusvuosi}
        </li>
    );
}

// Tehtävä 6: Taulukko-компонентти
export function Taulukko({ otsikot, data }) {
    return (
        <table>
            <Otsikko
                nimi={otsikot.nimi}
                osoite={otsikot.osoite}
                aloitusvuosi={otsikot.aloitusvuosi}
            />
            <TauluRivi rivit={data} />
        </table>
    );
}

// Otsikko-компонентти
export function Otsikko({ nimi, osoite, aloitusvuosi }) {
    return (
        <thead>
            <tr>
                <th>{nimi}</th>
                <th>{osoite}</th>
                <th>{aloitusvuosi}</th>
            </tr>
        </thead>
    );
}

// TauluRivi-компонентти
export function TauluRivi({ rivit }) {
    return (
        <tbody>
            {rivit.map((rivi, index) => (
                <tr key={index}>
                    <td>{rivi.nimi}</td>
                    <td>{rivi.osoite}</td>
                    <td>{rivi.aloitusvuosi}</td>
                </tr>
            ))}
        </tbody>
    );
}

// Tehtävä 7: Teht6-компонентти
export function Teht6() {
    const [visible, setVisible] = useState(true);

    const suomiOtsikot = {
        nimi: 'Nimi',
        osoite: 'Osoite',
        aloitusvuosi: 'Aloitusvuosi'
    };

    const englantiOtsikot = {
        nimi: 'Name',
        osoite: 'Address',
        aloitusvuosi: 'Start Year'
    };

    const data = [
        { nimi: 'Matti Meikäläinen', osoite: 'Katu 1', aloitusvuosi: 2021 },
        { nimi: 'Liisa Virtanen', osoite: 'Tie 2', aloitusvuosi: 2020 },
        { nimi: 'Pekka Korhonen', osoite: 'Polku 3', aloitusvuosi: 2019 },
        { nimi: 'Anna Laine', osoite: 'Kuja 4', aloitusvuosi: 2022 },
        { nimi: 'Kalle Kivinen', osoite: 'Kumpu 5', aloitusvuosi: 2018 }
    ];

    return (
        <>
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Piilota' : 'Näytä'}
            </button>
            {visible && (
                <>
                    <Taulukko otsikot={suomiOtsikot} data={data} />
                    <Taulukko otsikot={englantiOtsikot} data={data} />
                </>
            )}
        </>
    );
}
