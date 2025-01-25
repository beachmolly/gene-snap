import { EXAMPLE_ACTION } from "./actions";

const initialState = {
    example: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return { ...state, example: action.payload };
        default:
            return state;
    }
};

export default reducer;
