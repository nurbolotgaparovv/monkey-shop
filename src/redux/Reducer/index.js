

const initialState = {
    product: [],
    basket:[],
    favorites:[],
    quantity:[]

}
export const Reducer = (state = initialState, action) =>{
    switch (action.type){
        case "GET_PRODUCT":
            return {...state,product: action.payload}
        case 'ADD_TO_BASKET':
            const fountProduct = state.basket.find(el => el.id === action.payload.id)
            if (fountProduct){
                return {...state,basket: state.basket.map(el => el.id === fountProduct.id ?{...el, quantity:el.quantity +1}: 1)}
            }else {
               return  {...state,basket: [...state.basket,{...action.payload,quantity: 1}]}
            }

            case 'ADD_TO_FAVORITES':
            const favoritesADD = state.favorites.find(el => el.id === action.payload.id)
            if (favoritesADD){
                return {...state,favorites: state.favorites.map(el => el)}
            }else {

               return  {...state,favorites: [...state.favorites,{...action.payload,quantity: 1}]}
            }
        case 'GET_QUANTITY':
            const fountGetBasket = state.favorites.find(el =>el.id === action.payload.id)
                if (state.basket.map(el => el.quantity > 0)){
                    return {...state,basket: state.basket.map((el) => el.quantity  && {...el,quantity: el.quantity - action.payload })}
                }
        case 'ADD_QUANTITY':
                if (state.basket.map(el => el.quantity > 0)){
                    return {...state,basket: state.basket.map((el) => el.quantity  && {...el,quantity: el.quantity + action.payload })}
                }

        default: return state
    }
}