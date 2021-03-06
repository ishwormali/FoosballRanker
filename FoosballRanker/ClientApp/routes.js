import * as React from 'react';
import { Route } from 'react-router-dom';


import Main from './containers/Main/Main';
import { Layout } from './containers/Layout';
import Participants  from './containers/Participants/Participants';
import MatchDetails from './components/Matches/MatchDetails';
import NewMatch from './components/Matches/MatchNew';
import ParticipantDetails from './components/Participants/ParticipantDetails';

export const routes = <Layout>
    <Route exact path='/' component={Main} />
    <Route exact path='/participants' component={Participants} />
    <Route exact path='/participants/:id' component={ParticipantDetails} />
    <Route exact path='/matches/new' component={NewMatch} />
    <Route exact path='/matches/details/:id' component={MatchDetails} />
</Layout>;
