import { useState } from "react";
import "./App.css";
import "./css/index.css";
import PropTypes from 'prop-types';

function App() {
  const [list] = useState([
    {
      type: "video",
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      views: 50,
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      views: 12,
    },
    {
      type: "article",
      title: "Невероятные события в неизвестном поселке...",
      views: 175,
    },
    {
      type: "article",
      title: "Секретные данные были раскрыты!",
      views: 1532,
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      views: 4253,
    },
    {
      type: "article",
      title: "Кот Бегемот обладает невероятной...",
      views: 12,
    },
  ]);

  return <List list={list} />;
}

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}

function Article(props) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}

function List(props) {
  let i = 0;
  return props.list.map((item) => {
    i++;
    if (item.views > 1000) {
      if (item.type === "video") {
        const prop = {
          children: (<Video {...item} />),
          key: i,
        }
        return <Popular {...prop} key={prop.key}/>;
      }
      if (item.type === "article") {
        const prop = {
          children: (<Article {...item} />),
          key: i,
        }
        return <Popular {...prop} key={prop.key}/>;
      }
    }
    if (item.views < 100) {
      if (item.type === "video") {
        const prop = {
          children: (<Video {...item} />),
          key: i,
        }
        return <New {...prop} key={prop.key}/>;
      }
      if (item.type === "article") {
        const prop = {
          children: (<Article {...item} />),
          key: i,
        }
        return <New {...prop} key={prop.key}/>;
      }
    }
    switch (item.type) {
      case "video":
        return <Video {...item} />;

      case "article":
        return <Article {...item} />;
    }
    return null;
  });
}

New.propTypes = {
  children: PropTypes.function,
}
Popular.propTypes = {
  children: PropTypes.function,
}
Article.propTypes = {
  title: PropTypes.string,
  views: PropTypes.number,
}
Video.propTypes = {
  url: PropTypes.string,
  views: PropTypes.number,
}

export default App;
