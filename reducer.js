export const Reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:state.cart.concat(action.payload)
            };
            case 'REMOVE_FROM_CART':
                return{
                    ...state,
                    cart:state.cart.filter(i=>i.id!==action.payload.id)
                };
                default: return state;
    }
}
 export const initialState={
    cart:[]
}