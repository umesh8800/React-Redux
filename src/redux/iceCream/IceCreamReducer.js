import {BUY_ICE_CREAM} from './IceCreamType'

const initialState={
    numOfIceCream:40
}

const IceCreamReducer=( state=initialState, action)=>{
    switch(action.type){
        case BUY_ICE_CREAM: return{
            ...state,
            numOfIceCream:state.numOfIceCream-2
        }
        default: return state
    }
}

export default IceCreamReducer;