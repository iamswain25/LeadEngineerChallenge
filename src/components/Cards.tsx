import { Grid, makeStyles } from "@material-ui/core";
import CardSingle from "./CardSingle";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0),
  },
}));
export default function Cards({ data }: any) {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Grid container spacing={2}>
        {data.map((card: any) => (
          <Grid key={card.id} xs={12} sm={6} md={3} item>
            <CardSingle data={card} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
