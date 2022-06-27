import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import { client } from './services/client';

import './App.css';

function App() {
  const [user, setUser] = useState(client.auth.user());
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/create">Add New Treasures</Link>
            </li>
            <li>
              <Link to="/treasures/1">Update Treasure</Link>
            </li>
            <li>
              <Link to="/treasures">Treasure Chest</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            {!user ? <AuthPage setUser={setUser} /> : <Redirect to="/treasure" />}
          </Route>
          <Route exact path="/treasures/:id">
            <UpdatePage />
          </Route>
          <Route exact path="/treasures">
            {user ? <ListPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
