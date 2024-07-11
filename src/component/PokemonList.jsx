
import React from 'react';
import PokemonCard from './PokemonCard.jsx';
import bulbasaurImage from '../imges/001.png';
import ivysaurImage from '../imges/002.png';
import venusaurImage from '../imges/003.png';
import charmanderImage from '../imges/004.png';
import charmeleonImage from '../imges/005.png';
import charizardImage from '../imges/006.png';
import squirtleImage from '../imges/007.png';
import wartortleImage from '../imges/008.png';
import blastoiseImage from '../imges/009.png';
import caterpieImage from '../imges/010.png';
import metapodImage from '../imges/011.png';
import butterfreeImage from '../imges/012.png';

const pokemonList = [
    {
        id: '001',
        name: 'Bulbasaur',
        types: ['Grass', 'Poison'],
        image: bulbasaurImage
    },
    {
        id: '002',
        name: 'Ivysaur',
        types: ['Grass', 'Poison'],
        image: ivysaurImage
    },
    {
        id: '003',
        name: 'Venusaur',
        types: ['Grass', 'Poison'],
        image: venusaurImage
    },
    {
        id: '004',
        name: 'Charmander',
        types: ['Fire'],
        image: charmanderImage
    },
    {
        id: '005',
        name: 'Charmeleon',
        types: ['Fire'],
        image: charmeleonImage
    },
    {
        id: '006',
        name: 'Charizard',
        types: ['Fire', 'Flying'],
        image: charizardImage
    },
    {
        id: '007',
        name: 'Squirtle',
        types: ['Water'],
        image: squirtleImage
    },
    {
        id: '008',
        name: 'Wartortle',
        types: ['Water'],
        image: wartortleImage
    },
    {
        id: '009',
        name: 'Blastoise',
        types: ['Water'],
        image: blastoiseImage
    },
    {
        id: '010',
        name: 'Caterpie',
        types: ['Bug'],
        image: caterpieImage
    },
    {
        id: '011',
        name: 'Metapod',
        types: ['Bug'],
        image: metapodImage
    },
    {
        id: '012',
        name: 'Butterfree',
        types: ['Bug', 'Flying'],
        image: butterfreeImage
    }

];

function PokemonList() {
    return (
        <div className="pokemon-list">
            {pokemonList.map(pokemon => (
                <PokemonCard
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    types={pokemon.types}
                    image={pokemon.image}
                />
            ))}
        </div>
    );
}

export default PokemonList;
