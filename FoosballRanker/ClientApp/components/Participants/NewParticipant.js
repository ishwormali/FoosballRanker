import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Panel, Button, Glyphicon,Form,FormControl,ControlLabel,Row,Col } from 'react-bootstrap';

import { addParticipant } from '../../api/FoosballRankerApi';

const initialState = {
    participant: {
        name: ''
    },
    inProgress: false
};

export default class NewParticipant extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.addNew = this.addNew.bind(this);
        this.state = initialState;
    }
    componentDidMount() {
        
    }

    handleChange(e) {
        let participant = Object.assign({}, this.state.participant, { name: e.target.value });
        this.setState({ participant: participant });
        //    Object.assign({}, this.state, { participant: participant })
        //);

    }
    async addNew() {
        let { participant } = this.state;
       
        console.log('adding ', this.state.participant);
        this.setState({ inProgress: true });

        const newParticipant = await addParticipant(participant);
        this.setState({ inProgress: false });
        if (newParticipant) {
            this.clear();
            if (this.props.callback) {
                this.props.callback(newParticipant);
            }
        }
        
        
    }

    clear() {
        this.setState(initialState);
    }
    render() {
        const { participant,inProgress } = this.state;
        const canAdd = participant && participant.name && participant.name.trim().length > 0;

        return <div>
            <Panel>
                <Panel.Heading>
                    <h5>Add new Participant</h5>
                </Panel.Heading>
                <Panel.Body>
                    <Form inline>
                        <Row>
                            <Col md={3}>
                                <ControlLabel>Name: </ControlLabel>
                            </Col>
                            <Col md={8}>
                                <FormControl
                                    type="text"
                                    value={participant.name}
                                    placeholder="Enter participant Name"
                                    onChange={this.handleChange}
                               

                                />
                                
                                <Button bsStyle="primary" disabled={!canAdd || inProgress} onClick={this.addNew}>
                                    <Glyphicon glyph="plus" />Add New
                                </Button>
                            </Col>

                            
                        </Row>
                       
                    </Form>
                    
                </Panel.Body>
                </Panel>
        </div>;
    }
    
}