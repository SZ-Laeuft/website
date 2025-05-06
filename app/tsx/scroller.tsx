import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import LogoHAKHASITHTL from "@/public/pictures/LogoHAKHASITHTL_gradient.png";
import Uniqa from "@/public/pictures/Uniqa_Oesterreich_logo.png";
import CYGSCHEID from "@/public/pictures/CYGSCHEID_logo.png";
import Megaplex from "@/public/pictures/logo_megaplex_full_large.png";
import EasyDrivers from "@/public/pictures/ED_Logo_Fahrschule_CMYK_auf_gelb.jpg";
import Wuesterstrom from "@/public/pictures/wuesterstrom_logovarianten_100x30mm.png"
import VolksBank from "@/public/pictures/volksbank-oesterreich.webp"

const logoSources = [
    { logo: LogoHAKHASITHTL, link: 'https://www.sz-ybbs.ac.at' },
    { logo: Uniqa, link: 'https://uniqa.at' },
    { logo: CYGSCHEID, link: 'https://cyg-scheid.com' },
    { logo: Megaplex, link: 'https://megaplex.at' },
    { logo: EasyDrivers, link: 'https://easydrivers.at' },
    { logo: Wuesterstrom, link: 'https://wuesterstrom.at' },
    { logo: VolksBank, link: 'https://volksbank.at' },
];


const LogoSlider = () => {
    const logos = Array.from({ length: 10 }, (_, index) => {
        const item = logoSources[index % logoSources.length];
        return {
            logo: item.logo,
            link: item.link
        };
    });

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={3}
            allowTouchMove={false}
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
            modules={[Autoplay, Navigation, EffectCoverflow]}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2.5,
                slideShadows: false,
            }}
            className="mySwiper scroller"
        >
            {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                    <a href={logo.link} target="_blank" rel="noopener noreferrer">
                        <div style={{ position: 'relative', width: '100%', height: '130px' }}>
                            <Image
                                src={logo.logo}
                                alt={`Logo ${index + 1}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                priority={index < 5}
                                loading="eager"
                                className="swiper-slide-image"
                            />
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default LogoSlider;
