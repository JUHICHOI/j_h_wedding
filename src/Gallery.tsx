import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gallery1 from "../public/gallery/01.jpg";
import gallery2 from "../public/gallery/02.jpg";
import gallery3 from "../public/gallery/03.jpg";
import gallery4 from "../public/gallery/04.jpg";
import gallery5 from "../public/gallery/05.jpg";
import gallery6 from "../public/gallery/06.jpg";
import gallery7 from "../public/gallery/07.jpg";
import gallery8 from "../public/gallery/08.jpg";
import gallery9 from "../public/gallery/09.jpg";
import gallery10 from "../public/gallery/10.jpg";
import gallery11 from "../public/gallery/11.jpg";
import gallery12 from "../public/gallery/12.jpg";
import gallery13 from "../public/gallery/13.jpg";
import gallery14 from "../public/gallery/14.jpg";
import gallery15 from "../public/gallery/15.jpg";

function Gallery() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={gallery1} alt="wedding-gallery-1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery2} alt="wedding-gallery-2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery3} alt="wedding-gallery-3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery4} alt="wedding-gallery-4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery5} alt="wedding-gallery-5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery6} alt="wedding-gallery-6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery7} alt="wedding-gallery-7" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery8} alt="wedding-gallery-8" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery9} alt="wedding-gallery-9" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery10} alt="wedding-gallery-10" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery11} alt="wedding-gallery-11" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery12} alt="wedding-gallery-12" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery13} alt="wedding-gallery-13" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery14} alt="wedding-gallery-14" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gallery15} alt="wedding-gallery-15" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Gallery;
