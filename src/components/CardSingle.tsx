import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CakeIcon from "@material-ui/icons/Cake";
import { Grid, Chip } from "@material-ui/core";
import React from "react";
import DetailModal from "./DetailModal";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const useStyles = makeStyles((theme) => ({
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
  insured: {
    backgroundColor: "#2979ff",
    color: "#fff",
  },
  uninsured: {
    backgroundColor: "#ff9100",
  },
  deceased: {
    backgroundColor: "#000",
    color: "#fff",
  },
}));
export default function CardSingle({ data }: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container justify="space-between">
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {data.id}
          </Typography>
          <div>
            <div>
              <Chip
                size="small"
                classes={{
                  root: data.insured ? classes.insured : classes.uninsured,
                }}
                label={data.insured ? "insured" : "uninsured"}
              />
            </div>
            {data.deceased && (
              <div>
                <Chip
                  size="small"
                  classes={{
                    root: classes.deceased,
                  }}
                  label="deceased"
                />
              </div>
            )}
          </div>
        </Grid>
        <Typography variant="h5" component="h2">
          <Grid container alignItems="center">
            {data.first_name}
          </Grid>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {data.last_name}
        </Typography>
        <Typography variant="h6">
          <Grid container alignItems="center">
            <PermIdentityIcon fontSize="small" /> {data.ssn}
          </Grid>
        </Typography>
        <Typography variant="h6">
          <Grid container alignItems="center">
            <CakeIcon fontSize="small" /> {data.birthdate}
          </Grid>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>
          Detail
        </Button>
        <DetailModal open={open} onClose={handleClose} data={data} />
      </CardActions>
    </Card>
  );
}
