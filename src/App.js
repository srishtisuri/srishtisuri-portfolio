import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import { Home, Experience, Kuebik } from "./components";
import { AppContainer } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <>
            <NavBar />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/kuebik" component={Kuebik} />
          </>
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
