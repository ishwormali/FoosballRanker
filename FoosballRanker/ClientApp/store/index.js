import ParticipantsReducer from '../components/Participants/ParticipantsReducer';
import MatchesReducer from '../components/Matches/MatchesReducer';

export const reducers = {
    participants: ParticipantsReducer,
    matches: MatchesReducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
