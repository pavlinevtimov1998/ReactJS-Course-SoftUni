import { GameCatalogItem } from "./GameCatalogItem";

export const Catalog = () => {
  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      <GameCatalogItem />

      {/* Display paragraph: If there is no games  */}
      {/* <h3 className="no-articles">No articles yet</h3> */}
    </section>
  );
};
