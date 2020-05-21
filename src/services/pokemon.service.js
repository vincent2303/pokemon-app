function getFirstAbility(pokemon){
    const { abilities } = pokemon
    return abilities.length ? abilities[0].ability.name : null
}

function convertPoundsToKilograms(pounds){
    return Math.trunc(pounds*0.453592*100)/100
}

export { getFirstAbility, convertPoundsToKilograms }