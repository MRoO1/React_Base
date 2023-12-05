import React from "react";
import ReactDOM from "react-dom/client";

//importing created files
import "./index.css";

// create Booklist Component
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

//create book Component
const Book = () => {
  return (
    <article className="book">
      <Img />
      <Title />
      <Author />
    </article>
  );
};
//Components
const Img = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg"
    alt=""
  />
);
const Title = () => <h2>Iron Flame</h2>;
const Author = () => {
  const inlineStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h6 style={inlineStyles}>Rebecca Yarros</h6>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
