import { fetchParticipants } from '../../api/FoosballRankerApi';
import { ParticipantsActionTypes } from './ParticipantsActionTypes';

export function fetchParticipantsAction(dispatch) {
    return async () => {
        try {
            dispatch({ type: ParticipantsActionTypes.pending });
            const participants = await fetchParticipants();
            dispatch({ type: ParticipantsActionTypes.success, payload: participants });
            return participants;
        } catch (ex) {
            dispatch({ type: ParticipantsActionTypes.error, payload: ex.message });
        }
    }
}