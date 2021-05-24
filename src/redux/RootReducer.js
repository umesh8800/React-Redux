import { combineReducers} from 'redux';
import cakeReducer from './cakes/CakeReducer';
import IceCreamReducer from './iceCream/IceCreamReducer';
import UserReducer from './user/UserReducer';


const RootReducer= combineReducers( {
    cake: cakeReducer,
    iceCream: IceCreamReducer,
    user:UserReducer
})

export default RootReducer;