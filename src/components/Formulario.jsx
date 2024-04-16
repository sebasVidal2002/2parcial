import "./Formulario.css";
import { useState } from "react";

export function Formulario({ handleFormSubmit }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);
    const [registrado, setRegistrado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }
        setError(false);

        handleFormSubmit(nombre); // Llamar a la función handleFormSubmit con el nombre del usuario
        setRegistrado(true);
    }

    return (
        <section>
            <form className="formulario" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <input 
                    type="password" 
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                />
                <button> Iniciar sesión</button>
            </form>
            {error && <center><p>Rellene los campos Carechimba😡 </p></center>}
            {registrado && <center><p>Bienvenido, {nombre}</p></center>}
        </section>
    )
}
