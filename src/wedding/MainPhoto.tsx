import mainPhoto from "../../public/main-photo.jpg";
import namePlace from "../../public/name-place.png";
import "./wedding.css";

function MainPhoto() {
  return (
    <section className="main-photo-wrapper">
      <img src={mainPhoto} alt="wedding-main-photo" />
      <img src={namePlace} alt="wedding-name-place" />
    </section>
  );
}

export default MainPhoto;
