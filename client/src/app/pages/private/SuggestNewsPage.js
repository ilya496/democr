import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { USER_PUBLISHING_NEWS } from "../../actions/actionTypes";
import { publishNews } from "../../actions/newsActions";
import Loader from "../../components/Loader";
import "../../styles/SuggestNewsPage.css";

function SuggestNewsPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const news = useSelector((state) => state.news);

  if (news && news.newsCreated) {
    setTimeout(() => {
      history.push("/");
      dispatch({
        type: `${USER_PUBLISHING_NEWS}_REVERT`,
      });
    }, 2500);
  }

  const handlePublishArticle = (e) => {
    e.preventDefault();
    dispatch(
      publishNews({
        title,
        content,
      })
    );
    setTitle("");
    setContent("");
  };

  if (news && news.publishingNews) {
    return (
      <div
        className="container"
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        <p className="greeting">Loading...</p>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {news && news.newsCreated && (
        <div className="overlay">
          <p className="greeting">News created</p>
        </div>
      )}
      <div className="container suggest-container">
        <p className="greeting">Suggest Article</p>
        <div className="info">
          Writers, editors and publishers are encouraged to submit their best
          work.
        </div>
        <form className="form" onSubmit={handlePublishArticle}>
          <label htmlFor="title" className="suggest-label">
            Article title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article name..."
            id="title"
            className="input suggest-input"
            required
          />
          <label htmlFor="content" className="suggest-label">
            Write about your story
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            id="content"
            className="content suggest-input"
            placeholder="Article content..."
            required
          />
          <button type="submit" className="btn">
            Submit Suggestion
          </button>
        </form>
      </div>
    </>
  );
}

export default SuggestNewsPage;
