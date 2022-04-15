import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

import './App.css';
import { Create } from './components/Create';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { Single } from './components/Single';

function App() {
   return (
     
     <Router>
      <Layout>
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route exact path="/create" >
          <Create/>
        </Route>
        <Route exact path="/blogs/:id" >
          <Single/>
        </Route>
      </Switch>
     </Layout>
    </Router>
  );
}

export default App;
