
import React from 'react';
import './PokemonCard.css';

function PokemonCard({ id, name, types, image }) {
    return (
        <div className="pokemon-card">
            <img src={image} alt={name} className="pokemon-image" />
            <div className="pokemon-info">
                <p className="pokemon-id">#{id}</p>
                <h3 className="pokemon-name">{name}</h3>
                <div className="pokemon-types">
                    {types.map((type, index) => (
                        <span key={index} className={`pokemon-type ${type.toLowerCase()}`}>
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
