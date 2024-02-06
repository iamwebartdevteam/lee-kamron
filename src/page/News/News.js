import React from "react";
import { Link } from "react-router-dom";
import { IMG } from "../../api/constant";

const News = ({ newsData }) => {
  console.log("newsData", newsData);
  return (
    <>
      <section class=" p-v-50">
        <div class="container">
          <div class="row">
            {newsData.map((item, index) => (
              <div class="col-12 newsBox mb-4" key={index}>
                <Link to={`/news-details/${item.slug}`} class="row">
                  <span class="newsPic col-md-6">
                    <img src={IMG + item.image} alt="" class="w-100" />
                  </span>
                  <div class="news_details col-md-6">
                    <small>{item.created_date}</small>
                    <h4>{item.title}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
