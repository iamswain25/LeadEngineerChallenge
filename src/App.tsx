import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import HomeGrid from "./components/HomeGrid";
import TableMaterial from "./components/TableMaterial";
import { patients } from "./db.json";
function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/grid">Grid List</Link>
        </li>
        <li>
          <Link to="/table">Table List</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route path="/grid" exact render={() => <HomeGrid data={patients} />} />
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
  );
}

export default App;
