import React, { Component } from 'react';

// Tehtävä 14: Professional-компонентти
export class Professional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nimi: '',
            selectedAmmatti: '',
            tutkintoSuoritettu: false,
            tutkinto: '',
            data: []
        };
    }

    handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({ [name]: type === 'checkbox' ? checked : value });
    };

    handleInsert = () => {
        const { nimi, selectedAmmatti, tutkintoSuoritettu, tutkinto } = this.state;
        if (nimi && selectedAmmatti) {
            const newEntry = {
                nimi,
                koodi: selectedAmmatti,
                tutkinto_suoritettu: tutkintoSuoritettu ? 'Tutkinto suoritettu' : 'Ei tutkintoa',
                tutkinto: tutkintoSuoritettu ? tutkinto : ''
            };
                        this.setState((prevState) => ({
                data: [...prevState.data, newEntry],
                nimi: '',
                selectedAmmatti: '',
                tutkintoSuoritettu: false,
                tutkinto: ''
            }));
        }
    };

    render() {
        const { ammatit } = this.props;
        const { nimi, selectedAmmatti, tutkintoSuoritettu, tutkinto, data } = this.state;

        return (
            <div>
                <label>
                    Nimi:
                    <input
                        type="text"
                        name="nimi"
                        value={nimi}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Ammatti:
                    <select
                        name="selectedAmmatti"
                        value={selectedAmmatti}
                        onChange={this.handleInputChange}
                    >
                        <option value="">Valitse ammatti</option>
                        {ammatit.map((ammatti) => (
                            <option key={ammatti.koodi} value={ammatti.koodi}>
                                {ammatti.selite}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="tutkintoSuoritettu">
                    <input
                        id="tutkintoSuoritettu"
                        type="checkbox"
                        name="tutkintoSuoritettu"
                        checked={tutkintoSuoritettu}
                        onChange={this.handleInputChange}
                    />
                    Tutkinto suoritettu:
                </label>
                {tutkintoSuoritettu && (
                    <label htmlFor="tutkinto">
                        Tutkinto:
                        <input
                            id="tutkinto"
                            type="text"
                            name="tutkinto"
                            value={tutkinto}
                            onChange={this.handleInputChange}
                        />
                    </label>
                )}
                <button onClick={this.handleInsert}>Insert</button>
                <Table data={data} />
            </div>
        );
    }
}

// Tehtävä 14: Table-компонентти
export class Table extends Component {
    render() {
        const { data } = this.props;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Koodi</th>
                        <th>Tutkinto suoritettu</th>
                        <th>Tutkinto</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.nimi}</td>
                            <td>{row.koodi}</td>
                            <td>{row.tutkinto_suoritettu || 'Ei tutkintoa'}</td>
                            <td>{row.tutkinto}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

// Tehtävä 16a-d: Laskuri-компонентти
export class Laskuri extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleIncrease = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    handleReset = () => {
        this.setState({ count: 0 });
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <button onClick={this.handleIncrease}>Kasvata</button>
                <button onClick={this.handleReset}>Nollaa</button>
                <Arvo arvo={count} />
            </div>
        );
    }
}

// Tehtävä 16d: Arvo-компонентти
export class Arvo extends Component {
    render() {
        const { arvo } = this.props;
        const style = { color: arvo > 10 ? 'red' : 'black' };
        return <h1 style={style}>Laskuri on {arvo}</h1>;
    }
}
