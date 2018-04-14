import { fetchMatches } from '../../api/FoosballRankerApi';
import { MatchesActionTypes } from './MatchesActionTypes';

export function fetchMatchesAction(dispatch) {
    return async () => {
        try {
            dispatch({ type: MatchesActionTypes.pending });
            const matches = await fetchMatches();
            dispatch({ type: MatchesActionTypes.success, payload: matches });
            return matches;
        } catch (ex) {
            dispatch({ type: MatchesActionTypes.error, payload: ex.message });
        }
    }
}