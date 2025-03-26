import React, { useState } from "react";

interface Entry {
  name: string;
  address: string;
  year: string;
}

interface ErrorProps {
  nimi: string;
  osoite: string;
  vuosi: string;
}

interface ErrorMessageProps {
  message: string;
}

export const ListForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [errors, setErrors] = useState<Partial<Entry>>({});
  const [duplicateError, setDuplicateError] = useState<string>("");

  const validateFields = (): Partial<Entry> => {
    const newErrors: Partial<Entry> = {};
    if (name.length < 4) newErrors.name = "nimi";
    if (address.length < 4) newErrors.address = "osoite";
    if (year.length < 4) newErrors.year = "vuosi";
    return newErrors;
  };

  const handleAdd = (): void => {
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setDuplicateError("");
      return;
    }

    if (entries.some((entry) => entry.name === name)) {
      setDuplicateError(`Nimi ${name} on jo syötetty`);
      return;
    }

    setEntries([...entries, { name, address, year }]);
    setName("");
    setAddress("");
    setYear("");
    setErrors({});
    setDuplicateError("");
  };

  return (
    <div>
      <label>
        Nimi:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Osoite:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />
      <label>
        Syntymävuosi:
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAdd}>Add</button>
      {duplicateError && <ErrorMessage message={duplicateError} />}
      <Error nimi={name} osoite={address} vuosi={year} />
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.name}, {entry.address}, {entry.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Error: React.FC<ErrorProps> = ({ nimi, osoite, vuosi }) => {
  const errorFields: string[] = [];
  if (nimi && nimi.length < 4) errorFields.push("nimi");
  if (osoite && osoite.length < 4) errorFields.push("osoite");
  if (vuosi && vuosi.length < 4) errorFields.push("vuosi");

  return errorFields.length > 0 ? (
    <p style={{ color: "red" }}>Virheelliset kentät: {errorFields.join(", ")}</p>
  ) : null;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p style={{ color: "red" }}>{message}</p>;
};
export default ListForm;
