const AddPokemonsAction = (pokemon) => (dispatch, getState) => {
    const {
        Pokemons: { pokemons },
    } = getState()

    const hasPoke = pokemons.find((i) => i.id === pokemon.id)
    if (!hasPoke && pokemon !== {}) {
        dispatch({
            type: "ADD_POKEMONS",
            payload: [...pokemons, pokemon],
        })
    }
}

export { AddPokemonsAction }