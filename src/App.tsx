import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TutorialHeader />
        <Content id="main-content">
          <Switch>
            <Route exact path="/" component={RepoPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
