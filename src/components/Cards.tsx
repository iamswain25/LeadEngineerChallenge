import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import CardSingle from "./CardSingle";

const useStyles = makeStyles({});
export default function Cards({ data }: any) {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3}>
        {data?.slice(0, 10)?.map((card: any) => (
          <Grid key={card.id} xs={12} sm={6} md={3} item>
            <CardSingle data={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
