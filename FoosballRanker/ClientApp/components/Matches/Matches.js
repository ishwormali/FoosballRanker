import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Panel, Button, Glyphicon, Table, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as Actions from './MatchesActions';

class Matches extends React.Component {

    constructor() {
        super();
        
    }
    componentDidMount() {
        this.props.fetchMatches();
    }
    
    render() {
        const { matches } = this.props;

        return <div>
            <Row>
                <Col md={12}>
                    <h2 className="pull-left">Matches</h2>
                    <Link to={"/matches/new"}>
                        <Button className="pull-right" bsStyle="primary"><Glyphicon glyph="plus" />New Match</Button>
                    </Link>
                </Col>
            </Row>
          
            <p>List of match</p>
            {this.renderTable(matches)}
            <br /><br />
            

        </div>;
    }

    renderTable(matches) {
        return <Table>
            <thead>
                <tr>
                    <th>Match Date</th>
                    <th>Winner</th>
                    <th>Score</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {matches.map(match => {

                    return <tr key={match.id}>
                        <td>{match.dateCreatedFormatted}</td>
                        <td>{match.winner}</td>
                        <td>
                            <Row>
                                <Col md={6}>
                                    <Table width="10" striped condensed>
                                        <thead>
                                            <tr>
                                                <th>{match.participants[0].name}</th>
                                                
                                                <th>{match.participants[1].name}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{match.participants[0].score}</td>
                                                
                                                <td>{match.participants[1].score}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col md={6} xsHidden></Col>
                            </Row>
                        </td>
                        <td>
                            <Link to={`/matches/details/${match.id}`}><Button bsStyle="primary"><Glyphicon glyph="arrow-right" />View Details</Button></Link>
                        </td>
                    </tr>

                }
                )}
            </tbody>

        </Table>;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMatches: Actions.fetchMatchesAction(dispatch)
    }
};

export default connect(
    (state) => state.matches,
    mapDispatchToProps
)(Matches);