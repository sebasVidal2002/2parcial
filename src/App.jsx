import React, { useState, useEffect } from "react"; // Importar useEffect  y useState desde React
import Navbar from "./components/Navbar";
import Characters from './components/Characters';
import { Formulario } from './components/Formulario';

function App() {
    const [user, setUser] = useState(""); // Cambiado a un string
    const [champions, setChampions] = useState([]); // Agregado el estado para los campeones

    // Función para cargar los campeones desde la API
    const fetchChampions = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setChampions(data.data)) 
            .catch(error => console.log(error));
    };

    // Efecto para cargar los campeones cuando el componente se monta
    useEffect(() => {
        const initialUrl = "https://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json";
        fetchChampions(initialUrl);
    }, []);

    // Función para manejar el envío del formulario
    const handleFormSubmit = (nombre) => {
        setUser(nombre);
    };

    // Función para buscar campeones
    const handleSearch = (term) => {
        // Aquí puedes implementar la lógica para buscar campeones según el término de búsqueda
        console.log("Searching for:", term);
    };

    return (
        <div className="App">
            {user && <Navbar brand="League Of Leyends" handleSearch={handleSearch} />}
            <center>
                {user ? <h1>Bienvenido {user}</h1> : <h1>Register</h1>}
            </center>
            {!user && <Formulario handleFormSubmit={handleFormSubmit} />}{/* Mostrar el formulario si el usuario no está registrado */}
            {user && <Characters champions={champions} />}{/* Mostrar los personajes si el usuario está registrado */}
        </div>
    )
}

export default App;
