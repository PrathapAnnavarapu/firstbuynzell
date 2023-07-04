

const userPostAdDetails:any =[];



export default function postAdReducer(state=userPostAdDetails, action){
    const {type, payload} = action
    
    switch (type) {
        case 'addPostDetails':
            if (state.length === 0){
                return [...state, payload ]
            }else{
                return [{...state[0], brand:payload.brand, model:payload.model, yearOfRegistration:payload.yearOfRegistration, kmDriven:payload.kmDriven, title:payload.title, description:payload.description, noOfOwners:payload.noOfOwners, fuelType:payload.fuelType, steeringOption:payload.steeringOption, horsePower:payload.horsePower, noOfDoors:payload.noOfDoors,
                    noOfCylinders:payload.noOfCylinders, noOfSeats:payload.noOfSeats, insurenceValidityUpto:payload.insurenceValidityUpto, exteriorColor:payload.exteriorColor,interiorColor:payload.interiorColor , price:payload.price}]
            }         
        case 'contactDetails':
            if (state.length === 1){
            return [...state,  payload ]
            }else{
                return [{...state[1], lati:payload.lati, long:payload.long, name:payload.name, email:payload.email, phoneNumber:payload.phoneNumber, showContactInformation:payload.showContactInformation}]
            }
        case 'addPlanDetails':
            if (state.length === 2){
            return [...state,  payload]
            }
        case 'resetAdDetails':
            return state = []
        default:
            return state
    }
}