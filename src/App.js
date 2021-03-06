import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "./styles";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path='/' exact>
              <Layout>
                <Home />
              </Layout>
            </Route>

            <Route>
              <Layout>
                <NotFound />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
