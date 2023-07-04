import {createStore, applyMiddleware} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import rootReducer from '../Reducer/rootReducer'

const middleWare = [thunk]

const Store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(...middleWare)));

export default Store