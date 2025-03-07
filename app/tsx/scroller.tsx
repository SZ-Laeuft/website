import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import LogoHAKHASITHTL from "../pictures/LogoHAKHASITHTL_gradient.png";

const LogoSlider = () => {
    const logos = [
        LogoHAKHASITHTL,
        LogoHAKHASITHTL,
        LogoHAKHASITHTL,
        LogoHAKHASITHTL,
        LogoHAKHASITHTL,
        LogoHAKHASITHTL,
        LogoHAKHASITHTL,
        LogoHAKHASITHTL,
    ];

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={5}
            spaceBetween={30}
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
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            className="mySwiper"
        >
            {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
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
    );
};

export default LogoSlider;