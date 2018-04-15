import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Panel, Button, Glyphicon, Table, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as Actions from './MatchesActions';
import MatchesList from '../../components/Matches/MatchesList';

/**
 * List component to display all the matches
 */
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
            <MatchesList matches={matches}></MatchesList>
            <br /><br />
            

        </div>;
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