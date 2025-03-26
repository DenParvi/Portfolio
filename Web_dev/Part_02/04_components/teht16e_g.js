import React, { Component } from "react";

class Valmentaja extends Component {
    render() {
        const { data, valueSelected, value } = this.props;
        return (
            <select
                data-testid="valmentajaSelect"
                onChange={(e) => valueSelected(e.target.value)}
                value={value}
            >
                {data.map((valmentaja, index) => (
                    <option
                        key={index}
                        value={valmentaja}
                        data-testid="valmentajaOption"
                    >
                        {valmentaja}
                    </option>
                ))}
            </select>
        );
    }
}

class Joukkueet extends Component {
    render() {
        const { joukkueet, onDelete, onChange } = this.props;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Joukkue</th>
                        <th>Kotipaikka</th>
                        <th>Valmentaja</th>
                        <th>ID</th>
                        {onDelete && <th>Poista</th>}
                        {onChange && <th>Muuta</th>}
                    </tr>
                </thead>
                <tbody>
                    {joukkueet.map((joukkue) => (
                        <tr key={joukkue.id}>
                            <td>{joukkue.joukkue}</td>
                            <td>{joukkue.kotipaikka}</td>
                            <td>{joukkue.valmentaja}</td>
                            <td>{joukkue.id}</td>
                            {onDelete && (
                                <td>
                                    <button
                                        data-testid="poista"
                                        onClick={() => onDelete(joukkue.id)}
                                    >
                                        Poista
                                    </button>
                                </td>
                            )}
                            {onChange && (
                                <td>
                                    <button
                                        data-testid="muuta"
                                        onClick={() => onChange(joukkue.id)}
                                    >
                                        Muuta
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

class Lomake extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joukkue: "",
            kotipaikka: "",
            valmentaja: "",
            joukkueet: [],
            nextId: 1,
            editId: null,
        };
    }

    handleInputChange = (field, value) => {
        this.setState({ [field]: value });
    };

    handleLisaa = () => {
        const { joukkue, kotipaikka, valmentaja, joukkueet, nextId } = this.state;
        this.setState({
            joukkueet: [
                ...joukkueet,
                { id: nextId, joukkue, kotipaikka, valmentaja },
            ],
            nextId: nextId + 1,
            joukkue: "",
            kotipaikka: "",
            valmentaja: "",
        });
    };

    handleTallenna = () => {
        const { joukkue, kotipaikka, valmentaja, joukkueet, editId } = this.state;
        this.setState({
            joukkueet: joukkueet.map((j) =>
                j.id === editId
                    ? { ...j, joukkue, kotipaikka, valmentaja }
                    : j
            ),
            editId: null,
            joukkue: "",
            kotipaikka: "",
            valmentaja: "",
        });
    };

    handlePoista = (id) => {
        this.setState({
            joukkueet: this.state.joukkueet.filter((j) => j.id !== id),
        });
    };

    handleMuuta = (id) => {
        const joukkueToEdit = this.state.joukkueet.find((j) => j.id === id);
        this.setState({
            editId: id,
            joukkue: joukkueToEdit.joukkue,
            kotipaikka: joukkueToEdit.kotipaikka,
            valmentaja: joukkueToEdit.valmentaja,
        });
    };

    render() {
        const { joukkue, kotipaikka, valmentaja, joukkueet, editId } = this.state;
        const valmentajat = ["Valmentaja A", "Valmentaja B", "Valmentaja C", "Valmentaja D"];

        return (
            <div>
                <input
                    type="text"
                    data-testid="joukkue"
                    value={joukkue}
                    onChange={(e) => this.handleInputChange("joukkue", e.target.value)}
                    placeholder="Joukkue"
                />
                <input
                    type="text"
                    data-testid="kotipaikka"
                    value={kotipaikka}
                    onChange={(e) => this.handleInputChange("kotipaikka", e.target.value)}
                    placeholder="Kotipaikka"
                />
                <Valmentaja
                    data={valmentajat}
                    valueSelected={(value) => this.handleInputChange("valmentaja", value)}
                    value={valmentaja}
                />
                {editId ? (
                    <button data-testid="tallenna" onClick={this.handleTallenna}>
                        Tallenna
                    </button>
                ) : (
                    <button data-testid="lisaa" onClick={this.handleLisaa}>
                        Lisää
                    </button>
                )}
                <Joukkueet
                    joukkueet={joukkueet}
                    onDelete={this.handlePoista}
                    onChange={this.handleMuuta}
                />
            </div>
        );
    }
}

export { Valmentaja, Joukkueet, Lomake };
