import * as React from 'react';
import { Panel, Table, Button,Row,Col } from 'react-bootstrap';

import MatchParticipantDetail from './MatchParticipantDetail';
import { fetchMatches } from '../../api/FoosballRankerApi';

const initialState = {
    match: {}
}
export default class MatchDetail extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }

    async componentDidMount() {
        const matchId = this.props.match.params.id;
        const match = await fetchMatches(matchId);
        this.setState({ match: match });
    }

    render() {
        const { match } = this.state;
        const firstParticipant = match.participants && match.participants.length > 0 ? match.participants[0] : null;
        const secondParticipant = match.participants && match.participants.length > 1 ? match.participants[1] : null;

        return <Row>
            <Col md={6}>
                <MatchParticipantDetail participant={firstParticipant}></MatchParticipantDetail>
            </Col>
            <Col md={6}>
                <MatchParticipantDetail participant={secondParticipant}></MatchParticipantDetail>
            </Col>
        </Row>
    }
}