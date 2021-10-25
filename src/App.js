import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./layouts";
import { routes } from "./routes";
import { MainContainer } from "./styles";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index} exact path={`${route.path}`}>
                {route.header && <Header />}
                <MainContainer className="main">
                  {route.component}
                </MainContainer>
                {route.footer && <Footer />}
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
