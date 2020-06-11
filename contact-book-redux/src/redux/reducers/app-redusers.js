const initialState = {
    data:[

    ]
    // currentContact:null,
    // isEdit:false
}

const AppReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_DATA': return{
            data:action.payload
        }
        default: return state;
    }
}

export default AppReducer;