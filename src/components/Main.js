import Card from "./Card.js";
import React, { useState, useEffect } from "react";
const axios = require("axios");

const Main = () => {
  const [news, setNews] = useState();
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=efe465305da2457d86da2c90ae79dd5b`
      )
      .then((response) => {
        setNews(response.data.articles);
      });
  }, []);

  return (
    <>
      <div>
        {news &&
          news.map((item) => {
            return (
              <>
                {/* <div className="container"> */}
                  <div className="rows center">
                    {/* <div className="col-4"> */}
                      <Card
                        name={item.source.name}
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        urlToImage={item.urlToImage}
                      />
                    </div>
                  {/* </div> */}
                {/* </div> */}
              </>
            );
          })}
      </div>
    </>
  );
};

export default Main;
