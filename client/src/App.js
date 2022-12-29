import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.jsx';
import Home from './views/Home/Home.jsx';
import Detail from './views/Detail/Detail.jsx';
import Create from './views/Create/Create.jsx';
import Error404 from './views/Error404/Error404.jsx'


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/country/:id" component={Detail}/>
            <Route exact path="/activity" component={Create}/>
            <Route  path="/*" component={Error404}/>
          </Switch>
      


    </div>

</BrowserRouter>
  );
}

export default App;
