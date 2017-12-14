import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';
import { 
  Route, 
  Switch
} from 'react-router-dom';
import { Home } from './layouts/home';

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" render={() => 'Not Found!'} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;
