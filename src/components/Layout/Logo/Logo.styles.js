import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  logoBox: {
    width: `calc(150px - 24px)`, // 24px margin on the left by default in the appbar component
    paddingRight: "24px", // to nullify 24px padding on the left
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      margin: "0 auto",
      width: "unset",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "24px 0",
    },
  },
  logoBoxHover: {
    cursor: "pointer",
  },
    toolbar: theme.mixins.toolbar
}));