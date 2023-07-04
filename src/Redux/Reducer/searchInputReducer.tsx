const searchInputString:string ='';



export default function postAdReducer(state=searchInputString, action){
    const {type, payload} = action
    
    switch (type) {
        case 'SearchInput':           
            return state=payload       
        default:
            return state
    }
}