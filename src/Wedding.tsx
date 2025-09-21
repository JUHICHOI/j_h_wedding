import mainPhoto from "../public/main-photo.jpg";
import namePlace from "../public/name-place.png";
import sentence from "../public/sentence.png";
import child from "../public/child.png";
import calendar from "../public/calendar.png";
import galleryLabel from "../public/gallery-label.png";
import LocationLabel from "../public/location-label.png";
import "./wedding.css";
import Gallery from "./Gallery";
import KakaoMap from "./KakaoMap";

function Wedding() {
  return (
    <div className="wedding-page">
      <div className="wedding-wrapper">
        <section className="wedding-top">
          <img src={mainPhoto} alt="wedding-main-photo" />
          <img src={namePlace} alt="wedding-name-place" />
          <img src={sentence} alt="wedding-sentence" />
          <img src={child} alt="wedding-child" />
          <img src={calendar} alt="wedding-calendar" />
        </section>

        <section className="wedding-middle">
          <img src={galleryLabel} alt="wedding-gallery-label" />
          <Gallery />
          <img src={LocationLabel} alt="wedding-location-label" />
          <KakaoMap />
        </section>

        <section></section>
      </div>
    </div>
  );
}

export default Wedding;
