import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";

export default function App() {
  const [article, setArticle] = useState(undefined);

  return (
    <div>
      {article && (
        <div>
          <div>name: {article.name}</div>
          <div>text: {article.text}</div>
        </div>
      )}
      <Form onSubmit={setArticle} article={article} />
    </div>
  );
}
