import React from 'react'
import { getFirstAbility, convertPoundsToKilograms } from '../../services/pokemon.service'
import './styles.css'
 
class Pokemon extends React.Component {

    state = { pokemon: null, loading: true }
    
    async componentDidMount(){
        const { pokemonId } = this.props
        const pokemonAPIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        const pokemon = await pokemonAPIResponse.json();
        this.setState({ pokemon, loading: false })
    }

    render() {
      const { pokemon, loading } = this.state 
      if(loading) return <p>Loading pokemon</p>
      const { name, sprites, weight } = pokemon
      const firstAbilityName = getFirstAbility(pokemon)
      const weightKG = convertPoundsToKilograms(weight)
      
    return (
        <div className="pokemonContainer">
            <p>Name: {name}</p>
            <img alt="pokemon" src={sprites.front_default} />
            <p>First ability: {firstAbilityName}</p>
            <p>Weight: {weightKG} Kg</p>
        </div>
    )}
}

export default Pokemon