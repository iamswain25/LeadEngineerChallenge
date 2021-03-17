import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import PatientDetail from "./PatientDetail";
const useStyles = makeStyles((theme) => ({
  paper: {
    // position: "absolute",
    // minWidth: 400,
    maxWidth: "90%",
    maxHeight: "90%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "30px auto",
    overflow: "auto",
  },
}));
export default function DetailModal(props: any) {
  const classes = useStyles();
  const { data, ...rest } = props;
  return (
    <Modal
      {...rest}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <Grid container alignItems="center" justify="space-between">
          <h2 id="simple-modal-title">{data.first_name}</h2>
          <IconButton onClick={rest.onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <PatientDetail data={data} />
      </div>
    </Modal>
  );
}
