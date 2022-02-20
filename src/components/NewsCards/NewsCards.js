import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow } from "@material-ui/core";
import useStyles from "./styles.js";

// const infoCards = [
//   { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
//   {
//     color: "#1565c0",
//     title: "News by Categories",
//     info: "Business, Entertainment, General, Health, Science, Sports, Technology",
//     text: "Give me the latest Technology news",
//   },
// ];

const NewsCards = ({ arr, activeArticle }) => {
  const classes = useStyles();

  if (!arr.length) {
    return (
      <div class="card-container">
        <div class="card">
          <div class="imgBox"></div>

          <div class="contentBox">
            <h1 class="price">&dArr; Try saying</h1>
            <h2>&ldquo;Give me the news&rdquo;</h2>
            <h2>to get the latest programming news</h2>
            <h2>-- Please allow microphone access</h2>

            <a href="/" class="buy">
              click voice icon
            </a>
          </div>
        </div>
        <div class="card">
          <div class="imgBox"></div>

          <div class="contentBox">
            <h1 class="price">&dArr; Try saying</h1>
            <h2>&ldquo; Go to Search &rdquo;</h2>
            <h2>to search the latest tech questions</h2>
            <a href="/" class="buy">
              click voice icon
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {arr.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
