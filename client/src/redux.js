import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from "./store/reducers/rootReducer";
import { persistStore} from 'redux-persist';

// create middleware for redux when dispatch:
// redux-thunk lets the action creators invert control by dispatching functions. 
// They would receive dispatch as an argument and may call it asynchronously.
// Such functions are called thunks.    
import thunk from 'redux-thunk';                     

const reduxStore = () => {
    // applyMiddleware supercharges createStore with middleware:
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const persistor = persistStore(store);

    return { store, persistor }
}

export default reduxStore;