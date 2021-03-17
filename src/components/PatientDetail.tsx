import { Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
const useStyles = makeStyles((theme) => ({
  ul: {
    listStyleType: "none",
    position: "relative",
    "& li::before": {
      content: "'🏥'",
      left: 0,
      transform: "translateY(8px)",
      position: "absolute",
    },
  },
  h5: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(5),
  },
  box: {
    "&::before": {
      content: "'✅'",
      marginRight: theme.spacing(1),
    },
    margin: theme.spacing(2, 0),
    border: "solid 1px black",
    padding: theme.spacing(0, 2),
  },
}));
export default function PatientDetail({ data }: { data: any }) {
  const classes = useStyles();
  return (
    <ul className={classes.ul}>
      <li>
        <Typography variant="h5" className={classes.h5}>
          ID
        </Typography>
        <Typography color="textSecondary">{data.id}</Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          First Name
        </Typography>
        <Typography color="textSecondary">{data.first_name}</Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          Last Name
        </Typography>
        <Typography color="textSecondary">{data.last_name}</Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          Email
        </Typography>
        <Typography color="textSecondary">{data.email}</Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          Gender
        </Typography>
        <Typography color="textSecondary">{data.gender}</Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          Ethnicity
        </Typography>
        <Typography color="textSecondary">{data.ethnicity}</Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          Birthdate
        </Typography>
        <Typography color="textSecondary">{data.birthdate}</Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          SSN
        </Typography>
        <Typography color="textSecondary">{data.ssn}</Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          Insured
        </Typography>
        <Typography color="textSecondary">
          {data.insured ? (
            <CheckBoxIcon color="primary" />
          ) : (
            <CloseIcon color="primary" />
          )}
        </Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          deceased
        </Typography>
        <Typography color="textSecondary">
          {data.deceased ? (
            <CheckBoxIcon color="primary" />
          ) : (
            <CloseIcon color="primary" />
          )}
        </Typography>
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          diagnosis
        </Typography>
        {data.diagnosis.desc?.map((d: string, i: number) => (
          <Typography color="textSecondary" key={i} className={classes.box}>
            {d}
          </Typography>
        ))}
      </li>
      <li>
        <Typography variant="h5" className={classes.h5}>
          pcp
        </Typography>
        <Typography color="textSecondary">
          {data.pcp.fname} {data.pcp.lname} @{data.pcp.clinic_location}
        </Typography>
      </li>
    </ul>
  );
}
