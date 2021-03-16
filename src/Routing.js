import {Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';
import PostDetails from './components/pages/PostDetails';

function Routing() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={PostDetails}></Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default Routing;