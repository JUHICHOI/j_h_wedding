import MainPhoto from "../public/main-photo.jpg";
import Ribon from "../public/ribbon.png";
import Child from "../public/child.png";
import Calendar from "../public/calendar.png";
import CalendarLabel from "../public/calendar-label.png";
import GalleryLabel from "../public/gallery-label.png";
import LocationLabel from "../public/location-label.png";
import TimelineLabel from "../public/timeline-label.png";
import AccountLabel from "../public/account-label.png";
import "./wedding.css";
import Gallery from "./Gallery";
import KakaoMap from "./KakaoMap";
import Direction from "./Direction.";
import Account from "./Account";
import Sentence from "./Sentence";
import Share from "./Share";

function Wedding() {
  return (
    <div className="wedding-page">
      <div className="wedding-wrapper">
        <section className="main-photo">
          <img src={MainPhoto} alt="wedding-main-photo" />
        </section>

        <section className="wedding-sentence">
          <div className="wedding-name-place">
            <p>
              박호정<strong>♥</strong>최주희
            </p>
            <p>2025.12.06. 토요일 15:20</p>
            <p>엠스타하우스 모닝스타홀</p>
          </div>
          <img src={Ribon} alt="wedding-ribon" className="wedding-ribon" />
          <Sentence />
        </section>

        <section className="wedding-top">
          <img src={Child} alt="wedding-child" className="child" />
          <div className="wedding-calendar">
            <img
              src={CalendarLabel}
              alt="wedding-calendar-label"
              className="calendar-label"
            />
            <img src={Calendar} alt="wedding-calendar" />
          </div>
        </section>

        <section className="wedding-gallery">
          <img
            src={GalleryLabel}
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

          <div className="wedding-share">
            <Share />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Wedding;
