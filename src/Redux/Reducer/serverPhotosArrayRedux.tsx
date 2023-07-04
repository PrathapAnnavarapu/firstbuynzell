const serverPhotosArray:any =[];



export default function serverPhotosReducer(state=serverPhotosArray, action){
    const {type, payload} = action
    
    switch (type) {
        case 'addServerPhotosArray':           
            return state = payload             
        case 'resetServerPhotos':
            return state=[]
        default:
            return state
    }
}