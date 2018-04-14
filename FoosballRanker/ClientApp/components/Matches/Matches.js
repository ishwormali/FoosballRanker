import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Panel, Button, Glyphicon, Row, Col } from 'react-bootstrap';

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
            <h2>Matches</h2>
            <p>List of match</p>
            {this.renderTable(matches)}
            <br /><br />
            

        </div>;
    }

    renderTable(matches) {
        return <table className="table">
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

                        </td>
                        <td></td>
                    </tr>

                }
                )}
            </tbody>

        </table>;
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