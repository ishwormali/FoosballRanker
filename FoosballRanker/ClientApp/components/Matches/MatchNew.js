import * as React from 'react';
import { Panel, Table, Row, Col,Button,Glyphicon } from 'react-bootstrap';

import MatchNewPanel from './MatchNewPanel';
import { fetchParticipants, addMatch } from '../../api/FoosballRankerApi';

export default class NewMatch extends React.Component {
    constructor() {
        super();
        this.save = this.save.bind(this);
        this.canSave = this.canSave.bind(this);
        this.state = {
            participants: [],
            newParticipants: [{}, {}],
            inProgress:false
        }
    }
    async componentDidMount() {
        const participants = await fetchParticipants();
        this.setState({ participants: participants });
    }

    async save() {
        const { newParticipants } = this.state;
        if (this.canSave()) {
            console.log('saving');
            let match = {};
            match.participants = newParticipants.map(p => {
                return { id: p.participant.id, score: p.score }
            });

            this.setState({ inProgress: true });
            const result = await addMatch(match);
            this.setState({ inProgress: false });
            if (result) {
                this.props.history.push('/');
            }
            
        }
    }
    canSave() {
        const { newParticipants } = this.state;
        return newParticipants && newParticipants.length > 1 && newParticipants[0].participant && newParticipants[1].participant;

    }
    onParticipantSelected(idx,info) {
        let { newParticipants } = this.state;
        newParticipants[idx] = info;
        this.setState({ newParticipants: newParticipants });
        console.log(newParticipants);
    }
    render() {
        const { participants } = this.state;
        const canSave = this.canSave();
        return <div>
            <Row>
                <Col md={6}>
                <MatchNewPanel participants={participants} id={1} callback={(info) => { this.onParticipantSelected(0, info);}} />
                </Col>
                <Col md={6}>
                <MatchNewPanel participants={participants} id={2} callback={(info) => { this.onParticipantSelected(1, info); }}/>
                </Col>

            </Row>
            <Button onClick={this.save} disabled={!canSave} ><Glyphicon glyph="plus" /> Save</Button>
        </div>
    }
}