
/**
 * Fetch all matches. Optional Id to fetch single match
 * @param {any} id
 */
export async function fetchMatches(id) {
    let response = await fetch(`/api/match/${id ? id : ''}`);
    const data = await response.json();
    return data;
    
}

/**
 * Add a new match
 * @param {any} match
 */
export async function addMatch(match) {
    console.log('adding match', match);
    try {
        let response = await fetch('/api/match', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(match)
        });
        return response.ok;
    } catch (ex) {
        return false;
    }

}

/**
 * Fetches all participants from the backed api.
 */
export async function fetchParticipants() {
    //return await participants;
    let response = await fetch('/api/participant');
    let data = await response.json();
    return data;
}

/**
 * Fetches participant details for the given id.
 * @param {any} id
 */
export async function fetchParticipantDetails(id) {
    const response = await fetch(`/api/participant/${id}`);
    const data = response.json();
    return data;
    
}

/**
 * Posts given participant details to the api to persist
 * @param {any} participant
 */
export async function addParticipant(participant) {
    try {
        let response=await fetch('/api/participant', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(participant)
        });
        return response.ok;
    } catch (ex) {
        return false;
    }
    
}
