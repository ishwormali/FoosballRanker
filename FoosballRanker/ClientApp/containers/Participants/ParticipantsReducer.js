import { ParticipantsActionTypes } from './ParticipantsActionTypes';

const initialState = {
    isLoading: false, participants: []
};

export default (state = initialState, action) => {

    switch (action.type) {
        case ParticipantsActionTypes.pending:
            return Object.assign({}, state, { isLoading: true });
        case ParticipantsActionTypes.success:
            return Object.assign({}, state, { isLoading: false,participants:action.payload });
        case ParticipantsActionTypes.pending:
            return Object.assign({}, state, { isLoading: false,message:action.payload });
        default:
            return state;
    }
}