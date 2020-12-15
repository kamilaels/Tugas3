import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Pegawai from './pegawai';

const Main = () => (
    <Switch>
        <Route path="/pegawai" component={Pegawai} />
      </Switch>
  )

export default Main;