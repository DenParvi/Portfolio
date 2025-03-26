import React, { Component } from "react";

class Arvo extends Component {
    render() {
        const { arvo } = this.props;
        const textStyle = arvo > 10 ? { color: "red" } : {};
        return <h1 style={textStyle}>Laskuri on {arvo}</h1>;
    }
}

class Laskuri extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arvo: 0,
        };
    }

    kasvata = () => {
        this.setState((prevState) => ({ arvo: prevState.arvo + 1 }));
    };

    nollaa = () => {
        this.setState({ arvo: 0 });
    };

    render() {
        const { arvo } = this.state;

        return (
            <div>
                <button onClick={this.kasvata}>Kasvata</button>
                <button onClick={this.nollaa}>Nollaa</button>
                <Arvo arvo={arvo} />
            </div>
        );
    }
}

export { Laskuri, Arvo };
