import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import StoryPage from './pages/StoryPage';
import AdminPage from './pages/AdminPage';
import Auth from './components/Auth';
import StoryForm from './components/StoryForm';
import Timeline from './components/Timeline';
import AdminPanel from './components/AdminPanel';
import './assets/styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/story/:id" component={StoryPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/auth" component={Auth} />
          <Route path="/submit-story" component={StoryForm} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/admin-panel" component={AdminPanel} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;