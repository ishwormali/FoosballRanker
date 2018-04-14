import { MatchesActionTypes } from './MatchesActionTypes';

const initialState = {
    isLoading: false, matches: []
};

export default (state = initialState, action) => {

    switch (action.type) {
        case MatchesActionTypes.pending:
            return Object.assign({}, state, { isLoading: true });
        case MatchesActionTypes.success:
            return Object.assign({}, state, { isLoading: false, matches: action.payload });
        case MatchesActionTypes.pending:
            return Object.assign({}, state, { isLoading: false, message: action.payload });
        default:
            return state;
    }
}