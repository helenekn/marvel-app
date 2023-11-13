import { useState, useEffect, useRef } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import "./comicsList.scss";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]),
    [newItemLoading, setnewItemLoading] = useState(false),
    [offset, setOffset] = useState(0),
    [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setnewItemLoading(false) : setnewItemLoading(true);
    getAllComics(offset).then(onCharListLoaded);
  };

  const onCharListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < 9) {
      ended = true;
    }
    setComicsList([...comicsList, ...newComicsList]);
    setOffset((offset) => offset + 9);
    setComicsEnded((comicsEnded) => ended);
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      return (
        <li className="comics__item" key={i}>
          <a href="#">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="comics__item-img"
            />
            <div className="comics__item-name">{item.title}</div>
            <div className="comics__item-price">{item.price}</div>
          </a>
        </li>
      );
    });
    return <ul className="comics__grid">{items}</ul>;
  }

  const items = renderItems(comicsList);

  const errorMessage = error ? <ErrorMessage /> : null,
    spinner = loading && !newItemLoading ? <Spinner /> : null;
  console.log("render");
  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      {items}
      <button
        className="button button__main button__long"
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
