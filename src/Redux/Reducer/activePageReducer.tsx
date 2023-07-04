 


const IncActivePageCount:number |null = 0;





export default function activePageCount(state=IncActivePageCount, action): any{
    const {type, payload} = action

    switch (type) {
        case 'IncActivePageCount':
            return state = payload;  
        case 'decreaseThePageCount':
            return state = payload; 
        case 'InAddDBCount':
            return state = payload   
        default:
            return state
    }
}
