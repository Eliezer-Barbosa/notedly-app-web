import { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    // update the document title
    document.title = "Favorites - Notedly";
  });
  return (
    <div>
      <h1>Notedly</h1>
      <p>This are my favorites</p>
    </div>
  );
};

export default Favorites;
