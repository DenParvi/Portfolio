import React, { useState } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return <p>{this.props.errorMessage}</p>;
    }
    return this.props.children;
  }
}

const OpiskelijaForm = ({ addStudent, setFormError }) => {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = () => {
    if (hasError) {
      setFormError(true);
    } else {
      addStudent(name);
    }
  };

  return (
    <div>
      <label>
        Nimi:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Nimivirhe:
        <input type="checkbox" checked={hasError} onChange={(e) => setHasError(e.target.checked)} />
      </label>
      <br />
      <button onClick={handleSubmit}>Lisää</button>
    </div>
  );
};

const OpiskelijaList = ({ students, setListError }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    setListError(true);
    throw new Error("Virhe listalla");
  }

  return (
    <div>
      <label>
        Listavirhe:
        <input type="checkbox" checked={hasError} onChange={(e) => setHasError(e.target.checked)} />
      </label>
      <ol>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ol>
    </div>
  );
};

const Teht41 = () => {
  const [students, setStudents] = useState([]);
  const [formError, setFormError] = useState(false);
  const [listError, setListError] = useState(false);

  const addStudent = (name) => {
    setStudents([...students, name]);
  };

  const resetErrors = () => {
    setFormError(false);
    setListError(false);
  };

  return (
    <div>
      <button onClick={resetErrors}>Reset</button>
      <ErrorBoundary errorMessage="Virhe nimessä" hasError={formError}>
        <OpiskelijaForm addStudent={addStudent} setFormError={setFormError} />
      </ErrorBoundary>
      <ErrorBoundary errorMessage="Virhe listalla" hasError={listError}>
        <OpiskelijaList students={students} setListError={setListError} />
      </ErrorBoundary>
    </div>
  );
};

export default Teht41;
