

const FaviouritesList:any = []



export default function favouritesReducer(state=FaviouritesList, action){
    const {type, payload} = action

    switch (type) {
        case 'AddToList':
            return [...state, payload]
        case 'RemoveFav':
            return state.filter((each) => each.listing_id !== payload)
    
        default:
            return state
    }

    
}




