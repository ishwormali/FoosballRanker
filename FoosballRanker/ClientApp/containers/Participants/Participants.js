import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Panel, Button,Glyphicon,Row,Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as Actions from './ParticipantsActions';
import NewParticipant from '../../components/Participants/NewParticipant';
import ParticipantsList from '../../components/Participants/ParticipantsList';

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
            <ParticipantsList participants={participants} />

            <br /><br />
            <Row>
                <Col md={3}>
                    <NewParticipant callback={this.newParticipantCallback} />
                </Col>
            </Row>
            
        </div>;
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