import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, Tooltip } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    // minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  strikethrough: {
    textDecoration: "line-through",
  },
});
export default function CardSingle({ data }: any) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {data.id}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          className={data.deceased ? classes.strikethrough : undefined}
        >
          <Grid container alignItems="center">
            {data.first_name}
            <Tooltip
              title="insured"
              aria-label="insured"
              interactive
              enterTouchDelay={100}
            >
              {data.insured ? <CheckIcon htmlColor="#30B568" /> : <CloseIcon />}
            </Tooltip>
          </Grid>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {data.last_name}
        </Typography>
        <Typography variant="body2" component="p">
          ssn: {data.ssn}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>
  );
}
