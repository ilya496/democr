import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../actions/newsActions";
import "../styles/NewsList.css";

function NewsList() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (news && news.data && news.data.length) {
    return (
      <>
        <p
          style={{
            fontSize: "1.3em",
            textAlign: "center",
          }}
        >
          News
        </p>
        <div className="news">
          {news.data.map((el, key) => {
            if (el.published) {
              return (
                <div className="news-item" key={key}>
                  <p className="news-title">{el.title}</p>
                  <div className="news-content">{el.content}</div>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }
  return <div className="title">There are no News</div>;
}

export default NewsList;
