import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



const ImageCarousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-150 " // Adjust height as needed
        >
            <SwiperSlide>
                <img src="\src\images\Green Modern Agriculture Presentation.jpg" alt="Slide 1" className="w-full h-full object-cover" />
            </SwiperSlide>
          
        </Swiper>
    );
};

export default ImageCarousel;
