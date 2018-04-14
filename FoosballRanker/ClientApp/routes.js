import * as React from 'react';
import { Route } from 'react-router-dom';


import Main from './components/Main/Main';
import { Layout } from './components/Layout';
import Participants  from './components/Participants/Participants';
import MatchDetails from './components/Matches/MatchDetails';

export const routes = <Layout>
    <Route exact path='/' component={Main} />
    <Route exact path='/participants' component={Participants} />
    <Route exact path='/matches/:id' component={MatchDetails} />
</Layout>;
