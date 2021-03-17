import React, { useMemo } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Pagination from "./components/Pagination";
const REACT_APP_SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
function App() {
  const [data, setData] = React.useState<any[]>();
  const [searchString, setSearchString] = React.useState("");
  React.useEffect(() => {
    fetch(`http://localhost:${REACT_APP_SERVER_PORT}/patients`)
      .then((res) => res.json())
      .then(setData);
  }, [setData]);
  const filteredData = useMemo(
    () =>
      data?.filter((item: any) => {
        return (
          item.ssn.includes(searchString) || item.id.includes(searchString)
        );
      }),
    [searchString]
  );
  if (data)
    return (
      <Container>
        <Grid container wrap="wrap" alignItems="center" justify="space-between">
          <h1>Patients List</h1>
          <div>
            Search id or ssn:{" "}
            <input
              type="text"
              value={searchString}
              onChange={(ev) => setSearchString(ev.target.value)}
            />
          </div>
        </Grid>
        <Pagination data={filteredData} />
      </Container>
    );
  else return null;
}

export default App;
