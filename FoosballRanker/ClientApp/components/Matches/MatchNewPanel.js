import * as React from 'react';
import { Panel, Row, Col, DropdownButton,MenuItem,FormControl } from 'react-bootstrap';

import { fetchParticipants } from '../../api/FoosballRankerApi';

const initialState = {
    participant: null,
    score:0
}
export default class MatchNewPanel extends React.Component {
    constructor() {
        super();
        this.onSelect = this.onSelect.bind(this);
        this.onScoreChange = this.onScoreChange.bind(this);
        this.sendCallback = this.sendCallback.bind(this);
        this.state = initialState;
    }
    async componentDidMount() {
        
    }
    onSelect(participant) {
        //console.log(participant);
        this.setState({ participant: participant });
        this.sendCallback(participant,this.state.score);
    }
    onScoreChange(e) {
        const score = e.target.value;
        console.log(e.target.value);
        this.setState({ score: e.target.value });
        this.sendCallback(this.state.participant, score);
    }
    sendCallback(participant,score) {
        if (this.props.callback) {
            
            if (participant)
                this.props.callback({ participant: participant, score: score });
        }
    }
    render() {
        let { participant,score } = this.state;
        const { participants,id } = this.props;
        
        return <Panel bsStyle="primary">
            <Panel.Heading className="text-center" >
                {participant && <h3>{participant.name}</h3>}
                {!participant && participants &&
                    <DropdownButton bsStyle="info" title="Select Participant from the List" id={`Dropdown${id}`}>

                    {participants.map(part => {
                        return <MenuItem key={part.id} onSelect={() => { this.onSelect(part) }} >{part.name}</MenuItem>
                    })}
                    </DropdownButton>

}
            </Panel.Heading>
            <Panel.Body>
                <Row >
                    <Col className="text-center" mdOffset={4} md={2} mdOffset={5}>
                        {participant && <form>
                            <FormControl width={100}   bsSize="large" type="number" onChange={this.onScoreChange} min={0} required value={score} />
                            </form>
                            }

                    </Col>
                </Row>

            </Panel.Body>
        </Panel>
    }
}