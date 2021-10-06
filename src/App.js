import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar, Footer } from "./layouts";
import { Home, Experience, Kuebik } from "./pages";
import { AppContainer, BodyContainer } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <AppContainer className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <div>
            <Route exact path="/:page" component={NavBar} />
            <BodyContainer className="body">
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/kuebik" component={Kuebik} />
            </BodyContainer>
          </div>
        </Switch>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
