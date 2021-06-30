import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:cityName" component={Home} />
        <Route path="404" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
