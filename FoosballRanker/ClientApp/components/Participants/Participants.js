import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Panel, Button,Glyphicon,Row,Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as Actions from './ParticipantsActions';
import NewParticipant from './NewParticipant';

class Participants extends React.Component {

    constructor() {
        super();
        this.newParticipantCallback = this.newParticipantCallback.bind(this);
    }
    componentDidMount() {
        this.props.fetchParticipants();
    }
    newParticipantCallback() {
        this.props.fetchParticipants();
    }
    render() {
        const { participants } = this.props;

        return <div>
            <h2>Participants</h2>
            {this.renderTable(participants)}
            <br /><br />
            <Row>
                <Col md={3}>
                    <NewParticipant callback={this.newParticipantCallback} />
                </Col>
            </Row>
            
        </div>;
    }

    renderTable(participants) {
        return <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Matches</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {participants.map(participant => 
                    <tr key={participant.id}>
                        <td>{participant.name}</td>
                        <td>{participant.totalMatches}</td>
                        <td>{participant.totalWins}</td>
                        <td>{participant.totalLosses}</td>
                        <td>
                            <Link to={`participants/${participant.id}`}>
                                <Button bsStyle="primary"><Glyphicon glyph="arrow-right" />View Details</Button>
                            </Link>
                        </td>
                    </tr>

                
                )}
            </tbody>

        </table>;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchParticipants: Actions.fetchParticipantsAction(dispatch)
    }
};

export default connect(
    (state) => state.participants,
    mapDispatchToProps
)(Participants);