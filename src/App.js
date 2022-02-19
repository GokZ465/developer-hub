import "./index.css";

import {
  BrowserRouter,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./Navbar";
import { Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import Chat from "./components/SearchPage/Chat";

//-------------------
import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import wordsToNumbers from "words-to-numbers";
const alanKey =
  "71585b1f7ae2fa783f3d287befd74c1c2e956eca572e1d8b807a3e2338fdd0dc/stage";

const arra = [];
const aar = [];

const App = () => {
  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsarticles, setNewsarticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, arr, number }) => {
        if (command === "newHeadlines") {
          arra.push(arr);
          setTimeout(() => {
            setNewsarticles(arr);
            setActiveArticle(-1);
          }, 500);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "showSearch") {
          <SearchPage />;
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          aar.push(arra[0]);
          const article = arra[0][parsedNumber - 1];
          console.log(aar);
          if (article) {
            window.open(article.url, "_blank");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <NewsCards arr={newsarticles} activeArticle={activeArticle} />
          </Route>
          <Route path="/search">
            <Chat />
            <SearchPage />
          </Route>
          {/* <Route path="/dummy">
            <NewsCards arr={newsarticles} activeArticle={activeArticle} />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
