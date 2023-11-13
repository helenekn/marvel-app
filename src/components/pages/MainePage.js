import RandomChar from "../randomChar/RandomChar";
import { useState } from "react";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import AppBanner from "../appBanner/AppBanner";
import decoration from "../../resources/img/vision.png";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const MainPage = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };
  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>

      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharInfo charId={selectedChar} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
