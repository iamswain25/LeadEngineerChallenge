import { ThemeProvider, createMuiTheme, Theme } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeGrid from "./components/HomeGrid";
import TableMaterial from "./components/TableMaterial";
import { patients } from "./db.json";
export const theme: Theme = createMuiTheme({
  palette: {
    primary: { main: "#30B568" },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <ul>
          <li>
            <Link to="/grid">Grid List</Link>
          </li>
          <li>
            <Link to="/table">Table List</Link>
          </li>
        </ul>

        <hr /> */}
        <Switch>
          <Route
            path="/grid"
            exact
            render={() => <HomeGrid data={patients} />}
          />
          <Route
            path="/table"
            exact
            render={() => <TableMaterial data={patients} />}
          />
          <Route path="*">
            <Redirect to="/grid" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
