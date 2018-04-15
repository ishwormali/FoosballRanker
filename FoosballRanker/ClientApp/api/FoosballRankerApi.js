
export async function fetchMatches(id) {
    if (id) {
        return matches.find(match => {
            if (match.id == id) {
                return true;
            }
        })
    }
    return await matches;
}

export async function addMatch(match) {

}

export async function fetchParticipants() {
    return await participants;
}

export async function fetchParticipantDetails(id) {
    return {
        "id": 1,
        "name": "Christiano Ronaldo",
        "totalMatches": 3,
        "totalWins": 2,
        "totalLosses": 1,
        "opponents": [
            {
                "id": 2,
                "name": "Messe",
                "totalMatches": 5,
                "totalWins": 3,
                "totalLosses":2
            }, {
                "id": 3,
                "name": "Swaraj",
                "totalMatches":9,
                "totalWins": 5,
                "totalLosses": 4
            }
        ]

    }
}

export async function addParticipant(participant) {
    let newParticipant = Object.assign({},participant, {
        "id": ++maxId,
        "totalMatches": 0,
        "totalWins": 0,
        "totalLoses": 0
    });

    participants.push(newParticipant);
    return new Promise(resolve => setTimeout(() => {
        resolve(newParticipant);
    }, 1000));
    
}

let maxId = 3;
let participants = [
    {
        "id": 1,
        "name": "Christiano Ronaldo",
        "totalMatches": 3,
        "totalWins": 2,
        "totalLosses": 1

    },
    {
        "id": 2,
        "name": "Messe",
        "totalMatches": 6,
        "totalWins": 6,
        "totalLosses": 0

    },
    {
        "id": 3,
        "name": "Swaraj",
        "totalMatches": 2,
        "totalWins": 2,
        "totalLosses": 0

    },
    {
        "id": 4,
        "name": "Neymar",
        "totalMatches": 4,
        "totalWins": 3,
        "totalLosses": 1

    }
];

let matches = [
    {
        "id": 1,
        "participants": [
            {
                "id": 1,
                "name": "Christiano Ronaldo",
                "score":2
            }, {
                "id": 2,
                "name": "Messe",
                "score":4
            }

        ],
        "dateCreatedFormatted": "01/02/2018",
        "winner": "Messe",
        "winnerId":2
    }, {
        "id": 2,
        "participants": [
            {
                "id": 2,
                "name": "Messe",
                "score": 2
            }, {
                "id": 3,
                "name": "Swaraj",
                "score": 4
            }

        ],
        "dateCreatedFormatted": "01/03/2018",
        "winner": "Swaraj",
        "winnerId": 3
    }, {
        "id": 3,
        "participants": [
            {
                "id": 3,
                "name": "Swaraj",
                "score": 4
            }, {
                "id": 4,
                "name": "Neymar",
                "score": 4
            }

        ],
        "dateCreatedFormatted": "01/4/2018",
        "winner": "Draw",
        "winnerId": 0
    }
]