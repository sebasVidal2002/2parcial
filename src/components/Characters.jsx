import React from "react";

const Characters = ({ champions }) => {
  if (!champions || !Object.keys(champions).length) {
    return <p>No hay campeones disponibles</p>;
  }

  const championNames = Object.keys(champions);

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




