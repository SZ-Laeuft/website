import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import LogoHAKHASITHTL from "../pictures/LogoHAKHASITHTL_gradient.png";
import Uniqua from "../pictures/Uniqa_Österreich_logo.png"

const LogoSlider = () => {
    const logos = Array(8).fill(LogoHAKHASITHTL);
    const alternatingLogos = logos.map((_, index) => {
        return index % 2 === 0 ? LogoHAKHASITHTL : Uniqua;
    });

    return (
        <div className="ml-32 mr-32 mt-5" style={{ backgroundColor: '#FAFAFA', padding: '20px 0 20px 0' }}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={9}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 9 },
                }}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
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
                        <div style={{ position: 'relative', width: '100%', height: '150px' }}>
                            <Image
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LogoSlider;
