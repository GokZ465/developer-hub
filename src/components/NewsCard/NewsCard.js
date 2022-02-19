import React, { useState, useEffect, createRef } from "react";
import classNames from "classnames";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles.js";

const NewsCard = ({ article: { by, title, url }, i, activeArticle }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <Card
      ref={elRefs[i]}
      className={classNames(
        classes.card,
        activeArticle === i ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target="_blank">
        <div className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
          ></Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {by}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button href={url} target="_blank" size="small" color="#b4b4b4">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
