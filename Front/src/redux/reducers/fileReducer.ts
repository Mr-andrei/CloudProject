type Action = any
type InitialState = string


const initialState: InitialState = ""

export const fileReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case'SomeActions':{
            return state
        }
        default: {
            return state
        }

    }
}

