import React from "react";
import { Link } from "react-router-dom";
import "../../styles/AdminPage.css";

function AdminPage() {
  return (
    <div className="container admin-container">
      <p className="greeting mb-1">This is page for Admins</p>
      <div className="info">There are some usefull links for admins:</div>
      <ul className="admin-links">
        <div className="admin-item">
          <li className="admin-link title">
            <Link to="/admin/suggest" className="account-link">
              Suggested articles
            </Link>{" "}
            from all users
          </li>
          <div className="info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            vel quas repudiandae, mollitia velit sunt facilis, veniam aliquam
            voluptas commodi illo officia iure error reprehenderit deleniti
            reiciendis dicta et minus corrupti impedit. Excepturi fuga
            voluptatum voluptatem omnis voluptas expedita eaque architecto
            debitis, sapiente a nisi necessitatibus quo nihil rerum porro.
          </div>
        </div>
        <div className="admin-item">
          <li className="admin-link title">
            <Link to="/" className="account-link">
              Suggested articles
            </Link>{" "}
            from all users
          </li>
          <div className="info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            vel quas repudiandae, mollitia velit sunt facilis, veniam aliquam
            voluptas commodi illo officia iure error reprehenderit deleniti
            reiciendis dicta et minus corrupti impedit. Excepturi fuga
            voluptatum voluptatem omnis voluptas expedita eaque architecto
            debitis, sapiente a nisi necessitatibus quo nihil rerum porro.
          </div>
        </div>
        <div className="admin-item">
          <li className="admin-link title">
            <Link to="/" className="account-link">
              Suggested articles
            </Link>{" "}
            from all users
          </li>
          <div className="info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            vel quas repudiandae, mollitia velit sunt facilis, veniam aliquam
            voluptas commodi illo officia iure error reprehenderit deleniti
            reiciendis dicta et minus corrupti impedit. Excepturi fuga
            voluptatum voluptatem omnis voluptas expedita eaque architecto
            debitis, sapiente a nisi necessitatibus quo nihil rerum porro.
          </div>
        </div>
      </ul>
      <div className="divider aside-divider"></div>
      <div className="info">
        If you need help or advice, please contact main developer
      </div>
      <div className="info">
        You can easily contact with either discord or email, for this check out{" "}
        contact in the bottom of page
      </div>
    </div>
  );
}

export default AdminPage;
