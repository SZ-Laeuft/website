'use client'


import {Pagination, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import Image from "next/image";
import Route_Rechts from "@/public/pictures/Strecke_rechts.jpg";
import Route_Links from "@/public/pictures/Strecke_links.jpg";

const images = [
    {src: Route_Rechts, alt:"whatever"},
    {src: Route_Links, alt:"whatever2"}
];
const RouteSlider = () => {
    return (
        <div className="mt-4 border-0">
            <Swiper
                navigation={true}
                allowTouchMove={false}
                pagination={true}
                centeredSlides={true}
                loop={true}
                modules={[Navigation, Pagination]}

                className="customRouteSlider"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex h-full w-full items-center justify-center">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="block h-full w-full object-cover mt-4"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RouteSlider;