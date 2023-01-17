import PokemonCard from "./PokemonCard";

const PokemonList = ({pokemons}) => {
   
    return(
        <div className="PokemonList">
           {pokemons.map((pokemon) => {
            return <PokemonCard name={pokemon.name} key={pokemon.name}/>
           })} 
        </div>
    )
} 

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), //Crear un arreglo de 10 posiciones con ''
}

export default PokemonList