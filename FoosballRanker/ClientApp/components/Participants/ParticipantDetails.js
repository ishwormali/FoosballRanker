import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Panel, Button, Glyphicon, Form, FormControl, ControlLabel, Table, Row, Col } from 'react-bootstrap';

import { addParticipant, fetchParticipantDetails } from '../../api/FoosballRankerApi';

const initialState = {
    "details":null
};

export default class ParticipantDetails extends React.Component {
    constructor() {
        super();
        
        this.state = initialState;
    }

    async componentDidMount() {
        const details = await fetchParticipantDetails(this.props.match.params.id);
        this.setState({ "details": details });
    }
    
    
    render() {
        const { details, inProgress } = this.state;

        return <div>
            <Row>
                <Col md={6} mdOffset={3}>
                    <Panel bsStyle="info">
                        <Panel.Heading className="text-center">
                            <h3>
                                {details && <h3>
                                    {details.name}
                                </h3>}
                            </h3>
                        </Panel.Heading>
                        <Panel.Body>
                            <Row >
                                <Col className="text-center" mdOffset={4} md={2} mdOffset={5}>
                                    <h1><Glyphicon glyph="user" size /></h1>

                                </Col>
                            </Row>
                            {details && <div>
                                <Row>
                                    <Col>
                                        <Table striped bordered condensed hover>
                                            <thead>
                                                <tr>
                                                    <th>Total Matches</th>
                                                    <th>Total wins</th>
                                                    <th>Total Losses</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{details.totalMatches}</td>
                                                    <td>{details.totalWins}</td>
                                                    <td>{details.totalLosses}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    
                                    </Col>
                                </Row>
                                <div>
                                    <h3>Opponent History</h3>
                                    <Row>
                                        <Col>
                                            <Table striped bordered condensed hover>
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Total Matches</th>
                                                        <th>Wins/Losses</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {details.opponents.map(opponent => {
                                                        return <tr key={opponent.id}>
                                                            <td>{opponent.name}</td>
                                                            <td>{opponent.totalMatches}</td>
                                                            <td>{opponent.totalWins}/{opponent.totalLosses}</td>
                                                            
                                                        </tr>
                                                    })}
                                                    
                                                </tbody>
                                            </Table>
                                            
                                        </Col>
                                    </Row>
                                    
                                </div>
                            </div>
                            }
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>

        </div>;
    }

}