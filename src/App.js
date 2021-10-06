import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar, Footer } from "./layouts";
import { Home } from "./pages";
import { routes } from "./routes";
import { AppContainer, BodyContainer } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <AppContainer className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <div>
            {/* conditional NavBar to be visible on all routes except "/" */}
            <Route exact path="/:page" component={NavBar} />
            <BodyContainer className="body">
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    exact
                    path={`${route.path}`}
                    component={route.component}
                  />
                );
              })}
            </BodyContainer>
          </div>
        </Switch>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
