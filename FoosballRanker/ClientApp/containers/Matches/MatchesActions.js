import { fetchMatches } from '../../api/FoosballRankerApi';
import { MatchesActionTypes } from './MatchesActionTypes';

/**
 * Redux action to fetch all matches
 * @param {any} dispatch
 */
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