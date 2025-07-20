import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import pic01 from '../assets/pic01.jpg';
import pic02 from '../assets/pic02.jpg';
import pic03 from '../assets/pic03.jpg';
import pic04 from '../assets/pic04.jpg';
import pic05 from '../assets/pic05.jpg';
import pic06 from '../assets/pic06.jpg';
import pic07 from '../assets/pic07.jpg';
import AppStackChart from '../components/chart_stack';

const images = [pic01, pic02, pic03, pic04, pic05, pic06, pic07];

export default function Home() {
  return (
    <div>
      <h1>React Swiper 應用</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        freeMode={true}
        watchSlidesProgress={true}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              style={{ width: '400px', maxHeight: '500px', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <h1>ReCharts 應用</h1>
      <div style={{ width: '100%', height: 500 }}>
        <AppStackChart />
      </div>
    </div>
  );
}
