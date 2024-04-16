import React, { useState, useEffect } from "react"; //useState permite gestionar estado en componentes funcionales y 
                                                    //useEffect es para ejecutar efectos secundarios (como llamadas a APIs).
import Navbar from "./components/Navbar";
import Characters from './components/Characters';
import { Formulario } from './components/Formulario';

function App() {
    const [user, setUser] = useState(""); // Define un estado user que inicialmente
     //es un string vacío y setUser para actualizarlo.
    const [champions, setChampions] = useState([]); // Agregado el estado para los campeones

    //  fech Función para cargar los campeones desde la API
    const fetchChampions = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setChampions(data.data)) 
            .catch(error => console.log(error));
    };

    //  Se ejecuta al montar el componente y llama a fetchChampions
    //con una URL específica de una API que retorna 
    //información sobre campeones
    useEffect(() => {
        const initialUrl = "https://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json";
        fetchChampions(initialUrl);
    }, []);

    // Función para manejar el envío del formulario
    const handleFormSubmit = (nombre) => {
        setUser(nombre);
    };

    // no Funcióna para buscar campeones
    const handleSearch = (term) => {
            //no funciona
        console.log("Searching for:", term);
    };

    return (
        <div className="App">
            {user && <Navbar brand="League Of Leyends" handleSearch={handleSearch} />}
            <center>
                {user ? <h1>Bienvenido {user}</h1> : <h1>Register</h1>}
            </center>
            {!user && <Formulario handleFormSubmit={handleFormSubmit} />}{/* Mostrar el formulario si el usuario no está logueado */}
            {user && <Characters champions={champions} />}{/* Mostrar los personajes si el usuario está registrado */}
        </div>
    )
}

export default App;
