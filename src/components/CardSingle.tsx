import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CakeIcon from "@material-ui/icons/Cake";
import { Grid, Chip } from "@material-ui/core";
import React from "react";
import DetailModal from "./DetailModal";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      cursor: "pointer",
      borderRadius: 50,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, .15)",
    },
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
  textRight: {
    textAlign: "right",
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
    <>
      <Card className={classes.root} onClick={handleOpen}>
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
              <div className={classes.textRight}>
                <Chip
                  size="small"
                  classes={{
                    root: data.insured ? classes.insured : classes.uninsured,
                  }}
                  label={data.insured ? "insured" : "uninsured"}
                />
              </div>
              {data.deceased && (
                <div className={classes.textRight}>
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
      </Card>
      <DetailModal open={open} onClose={handleClose} data={data} />
    </>
  );
}
