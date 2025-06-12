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
import LukIt from "@/public/pictures/lukit-logo-blue-rgb.svg"
import druckat from "@/public/pictures/druckat.png";
import eckl from "@/public/pictures/eckl.png";
import hairrichtn from "@/public/pictures/hairrichtn.png";
import buchmayer from "@/public/pictures/buchmayer.png";
import hollywood from "@/public/pictures/hollywood.jpg";
import kahit from "@/public/pictures/kahit.jpeg";
import lagerhaus from "@/public/pictures/lagerhaus.png";
import MCDonalds from "@/public/pictures/MCDonald.png";
import mediastyle from "@/public/pictures/mediastyle.png";
import sonnentor from "@/public/pictures/sonnentor.png";
import steinecker from "@/public/pictures/steinecker.jpg";


const logoSources = [
    { logo: LogoHAKHASITHTL, link: 'https://www.sz-ybbs.ac.at' },
    { logo: Uniqa, link: 'https://uniqa.at' },
    { logo: CYGSCHEID, link: 'https://cygscheid.at/' },
    { logo: Megaplex, link: 'https://megaplex.at' },
    { logo: EasyDrivers, link: 'https://easydrivers.at' },
    { logo: Wuesterstrom, link: 'https://wuesterstrom.at' },
    { logo: VolksBank, link: 'https://volksbank.at' },
    { logo: LukIt, link: 'https://lukit.at'},
    { logo: druckat, link: 'https://www.druck.at/' },
    { logo: eckl, link: 'https://eckl.com/' },
    { logo: hairrichtn, link: 'https://hairrichtn.at' },
    { logo: buchmayer, link: 'https://partyservice-buchmayer.at/' },
    { logo: hollywood, link: 'https://pizzaservicehollywood.at/home' },
    { logo: kahit, link: 'https://kah-it.at' },
    { logo: lagerhaus, link: 'https://lagerhaus.at' },
    { logo: MCDonalds, link: 'https://mcdonalds.at' },
    { logo: mediastyle, link: 'https://mediastyle.at' },
    { logo: sonnentor, link: 'https://sonnentor.at' },
    { logo: steinecker, link: 'https://steinecker.at' }
];


const LogoSlider = () => {
    const logos = logoSources; // Use all logos

    return (
        <div className="mx-auto w-full max-w-screen-lg">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 7 },
                    1280: { slidesPerView: 8 },
                }}
                spaceBetween={24}
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
                className="mySwiper"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <a href={logo.link} target="_blank" rel="noopener noreferrer">
                            <div style={{ position: 'relative', width: '100%', height: '180px' }}>
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
        </div>
    );
};

export default LogoSlider;
