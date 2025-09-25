import mainPhoto from "../public/main-photo.jpg";
import sentence from "../public/sentence-white.png";
import child from "../public/child.png";
import calendar from "../public/calendar.png";
import calendarLabel from "../public/calendar-label.png";
import galleryLabel from "../public/gallery-label.png";
import LocationLabel from "../public/location-label.png";
import TimelineLabel from "../public/timeline-label.png";
import AccountLabel from "../public/account-label.png";
import "./wedding.css";
import Gallery from "./Gallery";
import KakaoMap from "./KakaoMap";
import Direction from "./Direction.";
import Account from "./Account";
import Sentence from "./Sentence";

function Wedding() {
  return (
    <div className="wedding-page">
      <div className="wedding-wrapper">
        <section className="main-photo">
          <img src={mainPhoto} alt="wedding-main-photo" />
        </section>

        <section className="wedding-top">
          {/* <img src={sentence} alt="wedding-sentence" className="sentence" /> */}
          <Sentence />
          <img src={child} alt="wedding-child" className="child" />
          <div className="wedding-calendar">
            <img
              src={calendarLabel}
              alt="wedding-calendar-label"
              className="calendar-label"
            />
            <img src={calendar} alt="wedding-calendar" />
          </div>
        </section>

        <section className="wedding-gallery">
          <img
            src={galleryLabel}
            alt="wedding-gallery-label"
            className="gallery-label"
          />
          <Gallery />
        </section>

        <section className="wedding-bottom">
          <div className="wedding-location">
            <img
              src={LocationLabel}
              alt="wedding-location-label"
              className="location-label"
            />
            <KakaoMap />
            <Direction />
          </div>

          <div className="wedding-timeline">
            <img
              src={TimelineLabel}
              alt="wedding-timeline-label"
              className="timeline-label"
            />
          </div>

          <div className="wedding-account">
            <img
              src={AccountLabel}
              alt="wedding-account-label"
              className="account-label"
            />
            <Account />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Wedding;
