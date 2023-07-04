const previewPhotosArray:any =[];


export default function previewPhotosReducer(state=previewPhotosArray, action){
    const {type, payload} = action
    
    switch (type) {
        case 'addPreviewPhotosArray':           
            return state = payload 
        case 'resetPreviewPhotos':
            return state = []      
        default:
            return state
    }
}