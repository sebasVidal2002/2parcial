import React, { useState } from 'react';


//const Navbar = ({ brand, handleSearch }) => {: Define un componente funcional llamado Navbar que recibe dos propiedades: 
//brand y handleSearch. brand es el nombre de la marca que se mostrará en el Navbar, 
//y handleSearch es una función que se llamará cuando se realice una búsqueda

const Navbar = ({ brand, handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);//Declara un estado local llamado searchTerm y una función setSearchTerm para actualizar ese estado. Inicializa searchTerm como una cadena vacía.

    const handleChange = (event) => {
        setSearchTerm(event.target.value); //Define una función handleChange que se llama cuando el valor del de búsqueda cambia. Actualiza el estado searchTerm con el nuevo valor del campo de búsqueda
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            handleSearch(searchTerm);
            setSearchHistory([searchTerm, ...searchHistory]);
            setSearchTerm('');
        }
    };

    const handleSearchHistoryClick = (term) => {
        setSearchTerm(term);
        handleSearch(term);
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">{brand}</a>
                <form className="form-inline" onSubmit={handleSubmit}>
                    <input
                        className="form-control mr-sm-6"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="search-history">
                    
                    <ul className="list-unstyled">
                        {searchHistory.map((term, index) => (
                            <li key={index} onClick={() => handleSearchHistoryClick(term)}>{term}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
