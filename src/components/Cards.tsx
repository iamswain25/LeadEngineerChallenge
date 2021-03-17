import { Grid } from "@material-ui/core";
import CardSingle from "./CardSingle";
export default function Cards({ data }: any) {
  return (
    <Grid container spacing={3}>
      {data.map((card: any) => (
        <Grid key={card.id} xs={12} sm={6} md={3} item>
          <CardSingle data={card} />
        </Grid>
      ))}
    </Grid>
  );
}
