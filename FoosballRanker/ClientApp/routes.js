import * as React from 'react';
import { Route } from 'react-router-dom';


import Main from './components/Main/Main';
import { Layout } from './components/Layout';
import Participants  from './components/Participants/Participants';

export const routes = <Layout>
    <Route exact path='/' component={Main} />
    <Route exact path='/participants' component={Participants} />
</Layout>;
