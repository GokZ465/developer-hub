import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#dedede",
    justifyContent: "space-between",
    borderBottom: "10px solid #0d73a7",
  },
  activeCard: {
    borderBottom: "10px solid #22289a",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
    color: "black",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
