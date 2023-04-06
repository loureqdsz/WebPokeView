import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { PokeReducer } from "./reducers/PokeReducers";

const reducer = combineReducers({
    Pokemons: PokeReducer
})

const initialState = {}

const middlewere = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewere))
)

export { store }