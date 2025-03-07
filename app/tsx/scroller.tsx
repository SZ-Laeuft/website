import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules'; // Removed Pagination from imports
import Image from 'next/image';
import LogoHAKHASITHTL from "../pictures/LogoHAKHASITHTL_gradient.png";
import Uniqua from "../pictures/Uniqa_Österreich_logo.png";

const LogoSlider = () => {
    const logos = Array(8).fill(LogoHAKHASITHTL);
    const alternatingLogos = logos.map((_, index) => (index % 2 === 0 ? LogoHAKHASITHTL : Uniqua));

    return (
        <div className="ml-4 mr-4 md:ml-32 md:mr-32 mt-5" style={{ backgroundColor: '#FAFAFA', padding: '20px 0' }}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3} // Default for mobile
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 7 },
                    1280: { slidesPerView: 9 },
                }}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, Navigation, EffectCoverflow]} // Removed Pagination from modules
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                className="mySwiper"
            >
                {alternatingLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ position: 'relative', width: '100%', height: '100px' }}> {/* Adjusted height for mobile */}
                            <Image
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                priority={index < 5}
                                loading="eager"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LogoSlider;