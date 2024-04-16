import React from "react";

const Characters = ({ champions }) => {               // toma una prop champions, que se espera sea un objeto conteniendo los campeones.
  if (!champions || !Object.keys(champions).length) {
    return <p>No hay campeones disponibles</p>;
  }

  const championNames = Object.keys(champions); //Extrae las claves del objeto champions, que son los nombres de los campeones
   

  //Retorna un div que actúa como contenedor de tarjetas de campeones, utilizando un grid con 6 columnas.
  //  map((name, index) => {: Mapea sobre los nombres de los campeones, creando un elemento para cada uno.
  //    const champion = champions[name];: Accede a la información del campeón por su nombre.
  //      <div key={index} className="col">: Cada campeón se renderiza en una columna.
  //        img-top" />: Carga una imagen del campeón desde una URL específica y establece el atributo alt con el nombre del campeón.
  //          <h5 className="card-title">{champion.name}</h5>: Muestra el nombre del campeón en un título dentro de la tarjeta.

  return (
    <div className="row row-cols-6">  
      {championNames.map((name, index) => {
        const champion = champions[name];
        return (
          <div key={index} className="col">
            <div className="card mb-3">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
                alt={champion.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{champion.name}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;




