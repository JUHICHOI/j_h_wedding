import mainPhoto from "../public/main-photo.jpg";
import sentence from "../public/sentence.png";
import child from "../public/child.png";
import calendar from "../public/calendar.png";
import calendarLabel from "../public/calendar-label.png";
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
          <img src={sentence} alt="wedding-sentence" />
          <img src={child} alt="wedding-child" />
        </section>

        <section className="wedding-middle">
          <div>
            <img src={calendarLabel} alt="wedding-calendar-label" />
            <img src={calendar} alt="wedding-calendar" />
          </div>

          {/* <div>
            <img
              src={galleryLabel}
              alt="wedding-gallery-label"
              className="gallery-label"
            />
            <Gallery />
          </div> */}

          <div>
            <img
              src={LocationLabel}
              alt="wedding-location-label"
              className="location-label"
            />
            <KakaoMap />
          </div>
        </section>

        <section></section>
      </div>
    </div>
  );
}

export default Wedding;
