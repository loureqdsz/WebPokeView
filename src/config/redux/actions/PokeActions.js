const AddPokemonsAction = (pokemon) => (dispatch, getState) => {
    const {
        Pokemons: { pokemons },
    } = getState()

    const hasPoke = pokemons.find((i) => i.id === pokemon.id)
    if (!hasPoke && pokemon !== {}) {
        dispatch({
            type: "ADD_POKEMONS",
            payload: [pokemon, ...pokemons],
        })
    }
}

const RemovePokemonsAction = (pokemonsList) => (dispatch, getState) => {
    const {
        Pokemons: { pokemons },
    } = getState()

    dispatch({
        type: "REMOVE_POKEMONS",
        payload: [pokemonsList],
    })
}

export { AddPokemonsAction, RemovePokemonsAction }