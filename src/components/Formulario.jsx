import "./Formulario.css";
import { useState } from "react";

export function Formulario({ handleFormSubmit }) {   //Define un componente de función llamado Formulario que recibe una propiedad handleFormSubmit,  se llamará cuando se envíe el formulario de inicio de sesión.
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);
    const [registrado, setRegistrado] = useState(false);

    const handleSubmit = (e) => { // Define una función handleSubmit se llama cuando se envía el formulario. 
        e.preventDefault(); // refresca la pagina por defecto

        if (nombre === "" || contraseña === "") { //Verifica campos nombre y contraseña no están vacíos, llama a handleFormSubmit con el nombre del usuario y actualiza el estado registrado a true.
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
