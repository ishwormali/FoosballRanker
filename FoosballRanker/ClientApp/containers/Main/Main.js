import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Matches from '../Matches/Matches';

/**
 * Main component
 */
export default class Main extends React.Component {
    render() {
        return <div>
            <Matches></Matches>
        </div>;
    }
}
