const PokeReducer = (state = { pokemons: [] }, action) => {
    switch(action.type) {
        case 'ADD_POKEMONS':
            return { pokemons: action.payload}
        case 'REMOVE_POKEMONS':
            return { pokemons: action.payload}
        default:
            return state
    }
}

export { PokeReducer }