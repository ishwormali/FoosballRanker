import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Panel, Button, Glyphicon, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';

export default class ParticipantsList extends React.Component {
    
    render() {
        const { participants } = this.props;

        return <div>
            
            {this.renderTable(participants)}
            
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
