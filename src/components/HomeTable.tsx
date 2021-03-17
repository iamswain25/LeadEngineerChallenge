import React, { useMemo } from "react";
import { Container, Grid } from "@material-ui/core";
import Pagination from "./Pagination";
function HomeGrid({ data }: any) {
  const [searchString, setSearchString] = React.useState("");
  const filteredData = useMemo(
    () =>
      data?.filter((item: any) => {
        return (
          item.ssn.includes(searchString) || item.id.includes(searchString)
        );
      }),
    [searchString]
  );
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
}

export default HomeGrid;
