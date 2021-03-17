import React, { useMemo } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import Pagination from "./Pagination";
import NativeSelect from "@material-ui/core/NativeSelect";
function HomeGrid({ data }: any) {
  const [searchString, setSearchString] = React.useState("");
  const [sortBy, setSortBy] = React.useState("id");
  const [desc, setDesc] = React.useState(true);
  const filteredData = useMemo(
    () =>
      data?.filter((item: any) => {
        return (
          item.ssn.includes(searchString) || item.id.includes(searchString)
        );
      }),
    [searchString, data]
  );
  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };
  const handleBtnDesc = () => setDesc(!desc);
  React.useEffect(() => {
    filteredData.sort((a: any, b: any) => {
      if (desc) {
        return a?.[sortBy] > b?.[sortBy] ? 1 : -1;
      } else {
        return a?.[sortBy] > b?.[sortBy] ? -1 : 1;
      }
    });
  }, [sortBy, desc, filteredData]);
  return (
    <Container>
      <Grid container wrap="wrap" alignItems="center" justify="space-between">
        <h1>Patients List</h1>
        <div>
          <Grid>
            Search id or ssn:{" "}
            <input
              type="text"
              value={searchString}
              onChange={(ev) => setSearchString(ev.target.value)}
            />
          </Grid>
          <Grid>
            sort by{" "}
            <NativeSelect
              variant="outlined"
              value={sortBy}
              onChange={handleChangeSelect}
            >
              <option value="id">ID</option>
              <option value="first_name">First Name</option>
            </NativeSelect>
            <Button
              color="primary"
              size="small"
              onClick={handleBtnDesc}
              variant="contained"
            >
              {desc ? "DESC" : "ASC"}
            </Button>
          </Grid>
        </div>
      </Grid>
      <Pagination data={filteredData} />
    </Container>
  );
}

export default HomeGrid;
