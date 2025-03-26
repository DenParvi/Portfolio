import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Asiakas = () => {
    const [customers, setCustomers] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [customerTypes, setCustomerTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [editingCustomer, setEditingCustomer] = useState(null);
    const [addingNewCustomer, setAddingNewCustomer] = useState(false);
    const [loadingCustomerTypes, setLoadingCustomerTypes] = useState(true);

    useEffect(() => {
        const fetchCustomerTypes = async () => {
            try {
                const response = await axios.get('http://localhost:3004/asiakastyyppi');
                setCustomerTypes(response.data);
            } catch (error) {
                console.error('Error fetching customer types:', error);
            } finally {
                setLoadingCustomerTypes(false);
            }
        };
        fetchCustomerTypes();
    }, []);

    const handleSearch = async () => {
        setLoading(true);
        setErrorMessage('');

        const params = {};
        if (name) params.nimi = name;
        if (address) params.osoite = address;
        if (selectedType) params.tyyppi_id = selectedType;

        try {
            const response = await axios.get('http://localhost:3004/asiakas', { params });
            setCustomers(response.data);
            if (response.data.length === 0) {
                setErrorMessage('Annetuilla hakuehdoilla ei löytynyt dataa');
                setTimeout(() => setErrorMessage(''), 2000);
            }
        } catch (error) {
            console.error('Error fetching customers:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id, name) => {
        if (window.confirm(`Haluatko varmasti poistaa asiakkaan ${name}?`)) {
            try {
                await axios.delete(`http://localhost:3004/asiakas/${id}`);
                handleSearch();
            } catch (error) {
                console.error('Error deleting customer:', error);
            }
        }
    };

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3004/asiakas/${id}`);
            setEditingCustomer(response.data);
        } catch (error) {
            console.error('Error fetching customer details:', error);
        }
    };

    const handleSaveEdit = async () => {
        if (!editingCustomer.nimi || !editingCustomer.osoite || !editingCustomer.tyyppi_id) {
            alert("Täytä kaikki kentät!");
            return;
        }

        try {
            await axios.put(`http://localhost:3004/asiakas/${editingCustomer.id}`, editingCustomer);
            setEditingCustomer(null);
            handleSearch();
        } catch (error) {
            console.error('Error saving customer:', error);
        }
    };

    const handleAddNewCustomer = () => {
        setAddingNewCustomer(true);
    };

    const handleCancelAdd = () => {
        setAddingNewCustomer(false);
    };

    const handleSaveNewCustomer = async () => {
        if (!name || !address || !phone || !selectedType) {
            alert("Täytä kaikki kentät!");
            return;
        }
        const newCustomer = {
            nimi: name,
            osoite: address,
            puhelinnro: phone,
            tyyppi_id: selectedType,
        };
        try {
            await axios.post('http://localhost:3004/asiakas', newCustomer);
            setAddingNewCustomer(false);
            handleSearch();
        } catch (error) {
            console.error('Error saving new customer:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditingCustomer(null);
    };

    return (
        <div>
            {editingCustomer ? (
                <form>
                    <label htmlFor="nameEdit">Nimi</label>
                    <input
                        id="nameEdit"
                        data-testid="nameEdit"
                        type="text"
                        value={editingCustomer.nimi}
                        onChange={(e) => setEditingCustomer({ ...editingCustomer, nimi: e.target.value })}
                    />

                    <label htmlFor="addressEdit">Osoite</label>
                    <input
                        id="addressEdit"
                        data-testid="addressEdit"
                        type="text"
                        value={editingCustomer.osoite}
                        onChange={(e) => setEditingCustomer({ ...editingCustomer, osoite: e.target.value })}
                    />

                    <label htmlFor="phoneEdit">Puhelin</label>
                    <input
                        id="phoneEdit"
                        data-testid="phoneEdit"
                        type="text"
                        value={editingCustomer.puhelinnro || ''}
                        onChange={(e) => setEditingCustomer({ ...editingCustomer, puhelinnro: e.target.value })}
                    />

                    <label htmlFor="customertypeSelectEdit">Asiakastyyppi</label>
                    {loadingCustomerTypes ? (
                        <p data-testid="loadingCustomerTypes">Loading customer types...</p>
                    ) : (
                        <select
                            id="customertypeSelectEdit"
                            data-testid="customertypeSelectEdit"
                            value={editingCustomer.tyyppi_id}
                            onChange={(e) => setEditingCustomer({ ...editingCustomer, tyyppi_id: e.target.value })}
                        >
                            <option value="" data-testid="customertypeOption">Valitse</option>
                            {customerTypes.map((type) => (
                                <option key={type.id} value={type.id} data-testid="customertypeOption">
                                    {type.selite}
                                </option>
                            ))}
                        </select>
                    )}

                    <button data-testid="cancelEditButton" onClick={handleCancelEdit}>Peruuta muokkaus</button>
                    <button data-testid="saveEditButton" onClick={handleSaveEdit}>Tallenna muutos</button>
                </form>
            ) : addingNewCustomer ? (
                <form>
                    <label htmlFor="nameAdd">Nimi</label>
                    <input
                        id="nameAdd"
                        data-testid="nameEdit"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="addressAdd">Osoite</label>
                    <input
                        id="addressAdd"
                        data-testid="addressEdit"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <label htmlFor="phoneAdd">Puhelin</label>
                    <input
                        id="phoneAdd"
                        data-testid="phoneEdit"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <label htmlFor="customertypeSelectAdd">Asiakastyyppi</label>
                    {loadingCustomerTypes ? (
                        <p data-testid="loadingCustomerTypes">Loading customer types...</p>
                    ) : (
                        <select
                            id="customertypeSelectAdd"
                            data-testid="customertypeSelectEdit"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            <option value="" data-testid="customertypeOption">Valitse</option>
                            {customerTypes.map((type) => (
                                <option key={type.id} value={type.id} data-testid="customertypeOption">
                                    {type.selite}
                                </option>
                            ))}
                        </select>
                    )}

                    <button data-testid="cancelButton" onClick={handleCancelAdd}>Peruuta</button>
                    <button data-testid="saveButton" onClick={handleSaveNewCustomer}>Tallenna</button>
                </form>
            ) : (
                <>
                    <label htmlFor="nameInput">Nimi</label>
                    <input
                        type="text"
                        id="nameInput"
                        data-testid="nameInput"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="addressInput">Osoite</label>
                    <input
                        type="text"
                        id="addressInput"
                        data-testid="addressInput"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <label htmlFor="customertypeSelect">Asiakastyyppi</label>
                    {loadingCustomerTypes ? (
                        <p data-testid="loadingCustomerTypes">Loading customer types...</p>
                    ) : loading ? (
                        <p data-testid="loading">Loading...</p>
                    ) : (
                        <select
                            id="customertypeSelect"
                            data-testid="customertypeSelect"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            <option value="" data-testid="customertypeOption">Valitse</option>
                            {customerTypes.map(type => (
                                <option
                                    key={type.id}
                                    value={type.id}
                                    data-testid="customertypeOption"
                                >
                                    {type.selite}
                                </option>
                            ))}
                        </select>
                    )}

                    <button data-testid="searchButton" onClick={handleSearch}>Hae</button>
                    <button data-testid="addButton" onClick={handleAddNewCustomer}>Lisää uusi</button>

                    {loading ? (
                        <p data-testid="loading">Loading...</p>
                    ) : errorMessage ? (
                        <p data-testid="notFound">{errorMessage}</p>
                    ) : (
                        customers.length > 0 && (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nimi</th>
                                        <th>Osoite</th>
                                        <th>Postinumero</th>
                                        <th>Postitoimipaikka</th>
                                        <th>Puhelinnumero</th>
                                        <th>Tyyppi_id</th>
                                        <th>Tyyppi_selite</th>
                                        <th>Poista</th>
                                        <th>Muokkaa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map(customer => (
                                        <tr key={customer.id}>
                                            <td>{customer.id}</td>
                                            <td>{customer.nimi}</td>
                                            <td>{customer.osoite}</td>
                                            <td>{customer.postinumero}</td>
                                            <td>{customer.postitoimipaikka}</td>
                                            <td>{customer.puhelinnro}</td>
                                            <td>{customer.tyyppi_id}</td>
                                            <td>{customer.tyyppi_selite}</td>
                                            <td>
                                                <button
                                                    data-testid="deleteButton"
                                                    onClick={() => handleDelete(customer.id, customer.nimi)}
                                                >
                                                    Poista {customer.id}
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    data-testid="editButton"
                                                    onClick={() => handleEdit(customer.id)}
                                                >
                                                    Muokkaa asiakasta {customer.id}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    )}
                </>
            )}
        </div>
    );
};

export { Asiakas };
