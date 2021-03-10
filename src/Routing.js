import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function Routing() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default Routing;