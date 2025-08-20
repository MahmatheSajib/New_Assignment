import React, { useState } from "react";
import Status from "./status";
import Pagination from "./pagination";
import "./Article.css";

export default function Article() {
  const [currentPage, setCurrentPage] = useState(1);

  // Manually define articles for simplicity
  const articles = [
    { title: "CSE1", status: "published", lastEdited: "1 week ago " },
    { title: "CSE2", status: "draft", lastEdited: "2 weeks ago" },
    { title: "CSE3", status: "published", lastEdited: "2 days ago" },
    { title: "CSE4", status: "draft", lastEdited: "2 years ago" },
    { title: "CSE5", status: "published", lastEdited: "1 month ago" },
    { title: "CSE6", status: "draft", lastEdited: "2 months ago" },
  ];

  const articlesPerPage = 3;
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);

  return (
    <div className="article-container">
      <h2>My Articles</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td><Status type={article.status} /></td>
              <td>{article.lastEdited}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(articles.length / articlesPerPage)}
        onPageChange={setCurrentPage}
      />
     
    </div>
  );
}
