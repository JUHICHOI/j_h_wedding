import Gallery from "./wedding/Gallery";
import MainPhoto from "./wedding/MainPhoto";

function Wedding() {
  return (
    <div className="wedding-page">
      <div className="wedding-wrapper">
        <MainPhoto />
        <Gallery />
      </div>
    </div>
  );
}

export default Wedding;
