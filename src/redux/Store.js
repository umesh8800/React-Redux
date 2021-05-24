import { createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import logger from 'redux-logger'
import RootReducer from './RootReducer'

const Store = createStore(RootReducer,composeWithDevTools (applyMiddleware(logger,thunk)))


export default Store;