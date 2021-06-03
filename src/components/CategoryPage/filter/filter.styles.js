import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: (props) => props.bgColor,
    fontSize: "1.6rem",
    display: "flex",
      alignItems: 'flex-start',
    flexDirection: "column",
    borderRadius: "5px",
    padding: "1.2rem 1rem",
    height: "100vh", //temporary
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  textField: {
      minWidth: '5rem',
      "&:nth-child(2)": {
          marginTop: '2rem',
          marginBottom: '2rem',
      }
  },
}));