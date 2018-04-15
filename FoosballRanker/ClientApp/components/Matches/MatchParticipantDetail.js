import * as React from 'react';
import { Panel,Row,Col } from 'react-bootstrap';


export default class MatchParticipantDetail extends React.Component {

    render() {
        let { participant } = this.props;
        participant = participant || {};
        return <Panel bsStyle="info">
            <Panel.Heading className="text-center" ><h3>{participant.name}</h3></Panel.Heading>
            <Panel.Body>
                <Row >
                    <Col className="text-center">
                        <h1>{participant.score}</h1>
                    </Col>
                </Row>

            </Panel.Body>
        </Panel>
    }
}